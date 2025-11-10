import React, { useState, useEffect } from 'react';
import { Module, Question, Badge, SubModule } from './types';
import { courseModules, finalExams } from './services/courseData';
import { QuizView } from './components/QuizView';
import { ChapterView } from './components/ChapterView';
import { useTranslation } from './contexts/LanguageContext';

const BookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-3 h-5 w-5"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>
);

const CheckCircleIcon = ({ className, title }: { className: string; title?: string; }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {title && <title>{title}</title>}
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22 4 12 14.01 9 11.01"></polyline>
  </svg>
);

interface GameState {
  progress: { [key: string]: boolean };
  totalScore: number;
}

const badges: Badge[] = [
    { id: 'primer-paso', name: {en: 'First Step', es: 'Primer Paso'}, description: {en: 'Complete your first subchapter quiz.', es: 'Completa tu primer cuestionario de subcapítulo.'}, icon: '🎓' },
    { id: 'capitulo-1', name: {en: 'Optics Master', es: 'Maestro de Óptica'}, description: {en: 'Complete the Chapter 1 exam.', es: 'Completa el examen del Capítulo 1.'}, icon: '🏆' },
    { id: 'finalista', name: {en: 'Finalist', es: 'Finalista'}, description: {en: 'Complete a final exam.', es: 'Completa un examen final.'}, icon: '🏅' },
];

const checkUnlockedBadges = (progress: { [key: string]: boolean }): string[] => {
  const unlocked: string[] = [];
  const completedQuizzes = Object.keys(progress).filter(k => k.startsWith('quiz-')).length;
  if (completedQuizzes > 0) unlocked.push('primer-paso');
  if (progress['exam-1']) unlocked.push('capitulo-1');
  if (Object.keys(progress).some(k => k.startsWith('final-'))) unlocked.push('finalista');
  return unlocked;
};


const App: React.FC = () => {
  const [selectedChapterId, setSelectedChapterId] = useState<number | null>(1);
  const [activeQuiz, setActiveQuiz] = useState<{ type: 'quiz' | 'exam' | 'final', id: string, questions: Question[], title: string } | null>(null);
  const [gameState, setGameState] = useState<GameState>({ progress: {}, totalScore: 0 });
  const { t, language, toggleLanguage } = useTranslation();


  useEffect(() => {
    try {
      const savedState = localStorage.getItem('ophtalmoGameStateV2');
      if (savedState) {
        setGameState(JSON.parse(savedState));
      }
    } catch (error) {
      console.error("Failed to load game state from localStorage", error);
    }
  }, []);
  
  const updateGameState = (updater: (prevState: GameState) => GameState) => {
    setGameState(prevState => {
      const newState = updater(prevState);
      try {
        localStorage.setItem('ophtalmoGameStateV2', JSON.stringify(newState));
      } catch (error) {
        console.error("Failed to save game state to localStorage", error);
      }
      return newState;
    });
  };

  const handleQuizComplete = (score: number) => {
    if (activeQuiz) {
      const { type, id } = activeQuiz;
      let points = 0;
      if (type === 'quiz') points = score * 10;
      else if (type === 'exam') points = score * 20;
      else if (type === 'final') points = score * 25;
      
      updateGameState(prev => ({
        ...prev,
        totalScore: prev.totalScore + points,
        progress: {
          ...prev.progress,
          [id]: true,
        }
      }));
      setActiveQuiz(null);
    }
  };
  
  const startQuiz = (subModule: SubModule) => {
    const quizTitle = `${t({en: 'Quiz:', es: 'Cuestionario:'})} ${t(subModule.title)}`;
    setActiveQuiz({ type: 'quiz', id: `quiz-${subModule.id}`, questions: subModule.quiz, title: quizTitle });
  };
  
  const startExam = (module: Module) => {
      const examTitle = `${t({en: 'Exam:', es: 'Examen:'})} ${t(module.title)}`;
      setActiveQuiz({ type: 'exam', id: `exam-${module.id}`, questions: module.exam, title: examTitle });
  };
  
  const startFinalExam = (modelIndex: number) => {
    const examQuestions = finalExams[modelIndex];
    if(examQuestions && examQuestions.length > 0) {
        const examTitle = `${t({en: 'Final Exam - Model', es: 'Examen Final - Modelo'})} ${modelIndex + 1}`;
      setActiveQuiz({
          type: 'final',
          id: `final-${modelIndex}`,
          questions: examQuestions,
          title: examTitle
      });
    }
  };

  const selectedChapter = courseModules.find(m => m.id === selectedChapterId);
  const unlockedBadges = checkUnlockedBadges(gameState.progress);

  const renderContent = () => {
    if (activeQuiz) {
      return <QuizView questions={activeQuiz.questions} title={activeQuiz.title} onComplete={(score) => handleQuizComplete(score)} />;
    }
    
    if (selectedChapter) {
        return <ChapterView module={selectedChapter} progress={gameState.progress} onStartQuiz={startQuiz} onStartExam={startExam} />;
    }
    
    if (selectedChapterId === null) {
        return (
            <div className="p-8 max-w-4xl mx-auto bg-gray-800 rounded-lg">
                <h2 className="text-3xl font-bold mb-4">{t({en: "Final Exams", es: "Exámenes Finales"})}</h2>
                <p className="mb-6">{t({en: "You are ready to test your knowledge with the final exams. Each exam contains 600 unique questions from all chapters.", es: "Ya estás listo para poner a prueba tus conocimientos con los exámenes finales. Cada examen contiene 600 preguntas únicas de todos los capítulos."})}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {finalExams.map((_, index) => (
                        <button
                            key={`final-exam-${index}`}
                            onClick={() => startFinalExam(index)}
                            className="w-full flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-4 rounded-lg transition-transform transform hover:scale-105"
                        >
                             {gameState.progress[`final-${index}`] && <CheckCircleIcon className="h-5 w-5 mr-2" />}
                             {t({en: "Final Exam Model", es: "Examen Final Modelo"})} {index + 1}
                        </button>
                    ))}
                </div>
            </div>
        )
    }
    
    return <div className="p-8 text-center text-gray-400">{t({en: "Select a chapter to begin.", es: "Selecciona un capítulo para comenzar."})}</div>;
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen font-sans">
      <aside className="w-full md:w-80 bg-gray-900 border-b md:border-r border-gray-700 p-4 flex flex-col">
        <div>
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold flex items-center">
              <BookIcon />
              <span>{t({en: "Ophthalmology", es: "Oftalmología"})}</span>
            </h1>
            <button onClick={toggleLanguage} className="bg-gray-700 hover:bg-gray-600 text-xs font-bold py-1 px-2 rounded">
              {language === 'en' ? 'ES' : 'EN'}
            </button>
          </div>
          <nav className="space-y-1">
            {courseModules.map((module) => {
               const isUnlocked = true; // All chapters are unlocked
               return (
                <button
                    key={module.id}
                    onClick={() => { if(isUnlocked) {setSelectedChapterId(module.id); setActiveQuiz(null);}}}
                    disabled={!isUnlocked}
                    className={`w-full text-left p-3 rounded-lg flex items-center justify-between transition-colors ${selectedChapterId === module.id && !activeQuiz ? 'bg-blue-600 text-white' : 'hover:bg-gray-700'} ${!isUnlocked ? 'text-gray-500 cursor-not-allowed' : ''}`}
                >
                    <span className="truncate">{t(module.title)}</span>
                    {gameState.progress[`exam-${module.id}`] && <CheckCircleIcon className="h-4 w-4 text-green-400" title={t({ en: 'Chapter exam completed', es: 'Examen de capítulo completado' })} />}
                </button>
               );
            })}

            <div className="mt-4 pt-4 border-t border-gray-700">
              <button
                  onClick={() => { setSelectedChapterId(null); setActiveQuiz(null); }}
                  className={`w-full text-left p-3 rounded-lg flex items-center justify-between transition-colors ${selectedChapterId === null && !activeQuiz ? 'bg-blue-600 text-white' : 'hover:bg-gray-700'}`}
              >
                  <span className="truncate">{t({ en: 'Final Exams', es: 'Exámenes Finales' })}</span>
                  {finalExams.every((_, i) => gameState.progress[`final-${i}`]) && <CheckCircleIcon className="h-4 w-4 text-green-400" title={t({ en: 'All final exams completed', es: 'Todos los exámenes finales completados' })} />}
              </button>
            </div>
          </nav>
        </div>
        <div className="mt-auto pt-6">
          <div className="p-4 bg-gray-800 rounded-lg">
            <h3 className="font-bold text-lg text-yellow-400">{t({en: "Total Score", es: "Puntuación Total"})}</h3>
            <p className="text-2xl font-mono">{gameState.totalScore} {t({en: "Points", es: "Puntos"})}</p>
            <h3 className="font-bold text-lg text-yellow-400 mt-4">{t({en: "Badges", es: "Insignias"})}</h3>
            <div className="space-y-2 mt-2">
              {badges.map(badge => (
                <div key={badge.id} className={`flex items-center p-2 rounded transition-all ${unlockedBadges.includes(badge.id) ? 'bg-green-900/50' : 'bg-gray-700 opacity-50'}`} title={t(badge.description)}>
                  <span className="text-2xl mr-3">{badge.icon}</span>
                  <div>
                    <p className="font-semibold">{t(badge.name)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </aside>
      <main className="flex-1 p-4 md:p-10 overflow-y-auto bg-gray-800/50">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
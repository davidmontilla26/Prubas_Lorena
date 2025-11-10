import React, { useState, useMemo } from 'react';
import { Question, QuestionType, UserAnswers, AnswerOption } from '../types';
import { ProgressBar } from './ProgressBar';
import { useTranslation } from '../contexts/LanguageContext';

interface QuizViewProps {
  questions: Question[];
  title: string;
  onComplete: (score: number, total: number) => void;
}

const shuffleArray = <T,>(array: T[]): T[] => {
  return [...array].sort(() => Math.random() - 0.5);
};

export const QuizView: React.FC<QuizViewProps> = ({ questions, title, onComplete }) => {
  const { t } = useTranslation();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<UserAnswers>({});
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const shuffledQuestions = useMemo(() => shuffleArray(questions), [questions]);

  const currentQuestion = shuffledQuestions[currentQuestionIndex];
  const currentAnswerState = userAnswers[currentQuestion?.id];

  const handleAnswerSelect = (answer: string) => {
    if (currentAnswerState) return; // Prevent changing answer
    setSelectedAnswer(answer);
  };
  
  const handleSubmit = () => {
    if (!selectedAnswer || !currentQuestion) return;

    let isCorrect = false;
    if (currentQuestion.type === QuestionType.TrueFalse || currentQuestion.type === QuestionType.MultipleChoice || currentQuestion.type === QuestionType.CaseStudy) {
        const correctOption = currentQuestion.options?.find(opt => opt.isCorrect);
        isCorrect = selectedAnswer === t(correctOption!.text);
    } else {
        isCorrect = true; // Auto-correct reflective questions for simplicity
    }

    setUserAnswers(prev => ({
      ...prev,
      [currentQuestion.id]: { answer: selectedAnswer, isCorrect }
    }));
  };

  const handleNext = () => {
    setSelectedAnswer(null);
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setShowResults(true);
      const score = Object.values(userAnswers).filter(a => a.isCorrect).length;
      onComplete(score, shuffledQuestions.length);
    }
  };
  
  const getOptionClass = (option: AnswerOption) => {
    const optionText = t(option.text);
    if (!currentAnswerState) {
      return selectedAnswer === optionText ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600';
    }
    
    if (option.isCorrect) {
      return 'bg-green-600';
    }
    if (optionText === currentAnswerState.answer && !currentAnswerState.isCorrect) {
      return 'bg-red-600';
    }
    return 'bg-gray-700';
  };

  if (showResults) {
    const score = Object.values(userAnswers).filter(a => a.isCorrect).length;
    return (
      <div className="p-8 max-w-4xl mx-auto bg-gray-800 rounded-lg">
        <h2 className="text-3xl font-bold mb-4">{title} - {t({en: "Results", es: "Resultados"})}</h2>
        <p className="text-xl mb-6">{t({en: "Your score:", es: "Tu puntuación:"})} {score} {t({en: "of", es: "de"})} {shuffledQuestions.length}</p>
        <button
          onClick={() => onComplete(score, shuffledQuestions.length)}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-4 rounded-lg transition-colors"
        >
          {t({en: "Back to Module", es: "Volver al Módulo"})}
        </button>
      </div>
    );
  }

  if (!currentQuestion) {
    return <div className="p-8 text-center">{t({en: "Loading quiz...", es: "Cargando cuestionario..."})}</div>;
  }
  
  const renderQuestionBody = () => {
    switch (currentQuestion.type) {
      case QuestionType.TrueFalse:
      case QuestionType.MultipleChoice:
      case QuestionType.CaseStudy:
        return (
          <div className="space-y-3">
            {currentQuestion.options?.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(t(option.text))}
                disabled={!!currentAnswerState}
                className={`w-full text-left p-4 rounded-lg transition-colors ${getOptionClass(option)}`}
              >
                {t(option.text)}
              </button>
            ))}
          </div>
        );
      case QuestionType.Reflection:
      case QuestionType.Metacognition:
        return (
          <div>
            <textarea
              className="w-full bg-gray-700 rounded-lg p-3 text-white focus:ring-2 focus:ring-blue-500 focus:outline-none"
              rows={5}
              placeholder={t({en: "Write your reflection here...", es: "Escriba su reflexión aquí..."})}
              onChange={(e) => setSelectedAnswer(e.target.value)}
              disabled={!!currentAnswerState}
            />
            {currentAnswerState && <p className="mt-2 text-sm text-gray-400">{t({en: "Answer submitted.", es: "Respuesta enviada."})}</p>}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="p-4 md:p-8 max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-2xl">
      <h2 className="text-2xl md:text-3xl font-bold mb-2 text-blue-300">{title}</h2>
      <p className="mb-4 text-gray-400">{t({en: "Question", es: "Pregunta"})} {currentQuestionIndex + 1} {t({en: "of", es: "de"})} {shuffledQuestions.length}</p>
      <ProgressBar current={currentQuestionIndex + 1} total={shuffledQuestions.length} />
      <div className="mt-6 p-6 bg-gray-900 rounded-lg">
        <p className="text-lg md:text-xl mb-5 leading-relaxed">{t(currentQuestion.questionText)}</p>
        {renderQuestionBody()}
      </div>
      
      {currentAnswerState && (
        <div className={`mt-4 p-4 rounded-lg ${currentAnswerState.isCorrect ? 'bg-green-900/50' : 'bg-red-900/50'}`}>
          <p className={`font-bold ${currentAnswerState.isCorrect ? 'text-green-300' : 'text-red-300'}`}>
            {currentAnswerState.isCorrect ? t({en: 'Correct!', es: '¡Correcto!'}) : t({en: 'Incorrect', es: 'Incorrecto'})}
          </p>
          <p className="mt-2 text-gray-300">{t(currentQuestion.explanation)}</p>
        </div>
      )}

      <div className="mt-6 flex justify-end">
        {!currentAnswerState ? (
          <button
            onClick={handleSubmit}
            disabled={!selectedAnswer}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-lg disabled:bg-gray-600 disabled:cursor-not-allowed transition-colors"
          >
            {t({en: "Submit", es: "Enviar"})}
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg transition-colors"
          >
            {currentQuestionIndex === shuffledQuestions.length - 1 ? t({en: "Finish", es: "Finalizar"}) : t({en: "Next", es: "Siguiente"})}
          </button>
        )}
      </div>
    </div>
  );
};

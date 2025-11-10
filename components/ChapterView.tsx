import React from 'react';
import { Module, SubModule } from '../types';
import { useTranslation } from '../contexts/LanguageContext';

const CheckCircleIcon = ({ className, title }: { className: string; title?: string; }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        {title && <title>{title}</title>}
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
);
const LockIcon = ({ className }: { className: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
);


interface ChapterViewProps {
    module: Module;
    progress: { [key: string]: boolean };
    onStartQuiz: (subModule: SubModule) => void;
    onStartExam: (module: Module) => void;
}

export const ChapterView: React.FC<ChapterViewProps> = ({ module, progress, onStartQuiz, onStartExam }) => {
    const { t } = useTranslation();
    const areAllQuizzesCompleted = module.subModules.every(sm => progress[`quiz-${sm.id}`] || sm.quiz.length === 0);

    return (
        <div className="p-4 md:p-8 max-w-4xl mx-auto bg-gray-800 rounded-lg shadow-2xl">
            <h2 className="text-3xl font-bold mb-3">{t(module.title)}</h2>
            <p className="text-gray-300 leading-relaxed mb-8">{t(module.summary)}</p>

            <h3 className="text-2xl font-semibold mb-4 border-b-2 border-blue-400 pb-2">{t({en: "Subchapters", es: "Subcapítulos"})}</h3>
            <div className="space-y-3">
                {module.subModules.map((subModule) => {
                    const isQuizCompleted = progress[`quiz-${subModule.id}`];
                    const isUnlocked = true; // All subchapters are unlocked
                    
                    return (
                        <div key={subModule.id} className={`p-4 rounded-lg flex items-center justify-between transition-all ${isUnlocked ? 'bg-gray-700' : 'bg-gray-800 opacity-60'}`}>
                            <div>
                                <h4 className="font-bold text-lg">{t(subModule.title)}</h4>
                                <p className="text-sm text-gray-400">{t(subModule.summary)}</p>
                            </div>
                            <div className="flex items-center space-x-3">
                                {isQuizCompleted && <CheckCircleIcon className="h-6 w-6 text-green-400" title={t({en: "Quiz Completed", es: "Cuestionario Completado"})}/>}
                                <button
                                    onClick={() => onStartQuiz(subModule)}
                                    disabled={!isUnlocked || subModule.quiz.length === 0}
                                    className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg disabled:bg-gray-500 disabled:cursor-not-allowed transition-colors text-sm"
                                >
                                    {subModule.quiz.length > 0 ? `${t({en: "Quiz", es: "Cuestionario"})}` : `${t({en: "No Quiz", es: "Sin Cuestionario"})}`}
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
            
            <div className="mt-10 pt-6 border-t border-gray-600">
                 <h3 className="text-2xl font-semibold mb-4">{t({en: "Chapter Exam", es: "Examen del Capítulo"})}</h3>
                 <button
                    onClick={() => onStartExam(module)}
                    disabled={!areAllQuizzesCompleted || module.exam.length === 0}
                    className="w-full flex items-center justify-center bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg disabled:bg-gray-500 disabled:cursor-not-allowed transition-transform transform hover:scale-105"
                >
                    {progress[`exam-${module.id}`] && <CheckCircleIcon className="h-5 w-5 mr-2" />}
                    {t({en: "Start Chapter Exam", es: "Iniciar Examen del Capítulo"})} ({module.exam.length > 0 ? '200' : '0'} {t({en: "questions", es: "preguntas"})})
                </button>
                {!areAllQuizzesCompleted && (
                    <p className="text-center text-sm text-yellow-400 mt-2">{t({en: "You must complete all subchapter quizzes to unlock the exam.", es: "Debes completar todos los cuestionarios de los subcapítulos para desbloquear el examen."})}</p>
                )}
            </div>

        </div>
    );
};
import { Module, Question, QuestionType } from '../types';

const shuffleArray = <T,>(array: T[]): T[] => {
  if (!array) return [];
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
};

const allQuestions: { [key: string]: Question[] } = {
  '1-1': [
    {
      id: 'c1s1q1',
      type: QuestionType.MultipleChoice,
      questionText: { en: 'The simplest imaging system is a pinhole camera. What is a characteristic feature of this device?', es: 'El sistema de imagen más simple es una cámara estenopeica. ¿Cuál es una característica de este dispositivo?' },
      options: [
        { text: { en: 'high magnification', es: 'alta magnificación' }, isCorrect: false },
        { text: { en: 'superb depth of field', es: 'excelente profundidad de campo' }, isCorrect: true },
        { text: { en: 'upright image formed at the image plane', es: 'imagen derecha formada en el plano de la imagen' }, isCorrect: false },
        { text: { en: 'rapid exposure times', es: 'tiempos de exposición rápidos' }, isCorrect: false },
      ],
      explanation: { en: 'The small aperture limits the light, requiring lengthy exposure times. However, it provides a nearly unlimited depth of field. The image is inverted.', es: 'La pequeña apertura limita la luz, requiriendo largos tiempos de exposición. Sin embargo, proporciona una profundidad de campo casi ilimitada. La imagen está invertida.' },
    },
    // ... 49 more questions for subchapter 1-1
  ],
  '1-2': [
    {
      id: 'c1s2q1',
      type: QuestionType.MultipleChoice,
      questionText: { en: 'While surfing, a person spots a shark nearby in the water. Where is the shark, in reality, compared with where the person sees its image from the surfboard?', es: 'Mientras surfea, una persona ve un tiburón cerca en el agua. ¿Dónde está el tiburón, en realidad, en comparación con donde la persona ve su imagen desde la tabla de surf?' },
      options: [
        { text: { en: 'closer to the person', es: 'más cerca de la persona' }, isCorrect: true },
        { text: { en: 'further from the person', es: 'más lejos de la persona' }, isCorrect: false },
        { text: { en: 'precisely where it appears', es: 'exactamente donde aparece' }, isCorrect: false },
        { text: { en: 'the same distance, but to the opposite side', es: 'a la misma distancia, pero en el lado opuesto' }, isCorrect: false },
      ],
      explanation: { en: 'If light travels from a denser medium (water; refractive index 1.33) to a less dense medium (air; refractive index 1.00), then light rays bend away from the surface normal, according to Snell’s law. This redirection of light produces image displacement, thus causing the shark to appear further away than it actually is. Thus, the shark is closer than it appears to the surfer.', es: 'Si la luz viaja de un medio más denso (agua; índice de refracción 1.33) a un medio menos denso (aire; índice de refracción 1.00), los rayos de luz se alejan de la normal de la superficie, según la ley de Snell. Esta redirección de la luz produce un desplazamiento de la imagen, lo que hace que el tiburón parezca más lejos de lo que realmente está. Por lo tanto, el tiburón está más cerca de lo que le parece al surfista.' },
    },
    // ... 49 more questions for subchapter 1-2
  ],
  '1-3': [
    {
        id: 'c1s3q1',
        type: QuestionType.MultipleChoice,
        questionText: { en: 'When a beam of white light passes through a prism, which color is deflected the most?', es: 'Cuando un haz de luz blanca pasa a través de un prisma, ¿qué color se desvía más?' },
        options: [ { text: { en: 'red', es: 'rojo' }, isCorrect: false }, { text: { en: 'yellow', es: 'amarillo' }, isCorrect: false }, { text: { en: 'green', es: 'verde' }, isCorrect: false }, { text: { en: 'violet', es: 'violeta' }, isCorrect: true } ],
        explanation: { en: 'Shorter wavelengths of light, such as violet, are bent more than longer wavelengths, such as red due to chromatic dispersion.', es: 'Las longitudes de onda más cortas, como el violeta, se desvían más que las longitudes de onda más largas, como el rojo, debido a la dispersión cromática.' },
    },
    // ... 49 more questions for subchapter 1-3
  ],
  '1-4': [ { id: 'c1s4q1', type: QuestionType.TrueFalse, questionText: { en: 'The vergence of parallel rays of light is considered to be zero.', es: 'La vergencia de los rayos de luz paralelos se considera cero.'}, options: [ { text: { en: 'True', es: 'Verdadero' }, isCorrect: true }, { text: { en: 'False', es: 'Falso' }, isCorrect: false } ], explanation: { en: 'Parallel rays have zero vergence by definition, as they do not converge or diverge.', es: 'Los rayos paralelos tienen vergencia cero por definición, ya que no convergen ni divergen.'} } /* ... 49 more */ ],
  '1-5': [ { id: 'c1s5q1', type: QuestionType.MultipleChoice, questionText: { en: 'What is the magnification of a +20D IOL when measured in air with a lensometer?', es: '¿Cuál es la magnificación de una LIO de +20D medida en aire con un lensómetro?' }, options: [ { text: { en: '+20 D', es: '+20 D' }, isCorrect: false }, { text: { en: '+40 D', es: '+40 D' }, isCorrect: false }, { text: { en: '+59 D', es: '+59 D' }, isCorrect: true }, { text: { en: '+10 D', es: '+10 D' }, isCorrect: false } ], explanation: { en: "Using the formula for power of a lens immersed in fluid (Pair/Paqueous) = (niol - nair)/(niol - naqueous), Pair = 20 * ([1.5 - 1.0]/[1.5 - 1.33]) = +58.8 D.", es: "Usando la fórmula para la potencia de una lente inmersa en un fluido (Paire/Pacuosa) = (nlio - naire)/(nlio - nacuosa), Paire = 20 * ([1.5 - 1.0]/[1.5 - 1.33]) = +58.8 D." } } /* ... 49 more */ ],
  '1-6': [ { id: 'c1s6q1', type: QuestionType.MultipleChoice, questionText: { en: 'A convex mirror produces what type of image?', es: '¿Qué tipo de imagen produce un espejo convexo?' }, options: [ { text: { en: 'real, inverted, magnified', es: 'real, invertida, magnificada' }, isCorrect: false }, { text: { en: 'virtual, erect, minified', es: 'virtual, derecha, reducida' }, isCorrect: true }, { text: { en: 'real, erect, magnified', es: 'real, derecha, magnificada' }, isCorrect: false }, { text: { en: 'virtual, inverted, minified', es: 'virtual, invertida, reducida' }, isCorrect: false } ], explanation: { en: 'A convex mirror always produces a virtual, erect, and minified image. The mnemonic is VErMin.', es: 'Un espejo convexo siempre produce una imagen virtual, derecha y reducida. La mnemotecnia es VErMin.' } } /* ... 49 more */ ],
  '1-7': [ { id: 'c1s7q1', type: QuestionType.MultipleChoice, questionText: { en: 'In the reduced schematic eye, what is the total power?', es: 'En el ojo esquemático reducido, ¿cuál es la potencia total?' }, options: [ { text: { en: '+43 D', es: '+43 D' }, isCorrect: false }, { text: { en: '+58.6 D', es: '+58.6 D' }, isCorrect: false }, { text: { en: '+60 D', es: '+60 D' }, isCorrect: true }, { text: { en: '+20 D', es: '+20 D' }, isCorrect: false } ], explanation: { en: 'The simplified "reduced" or "schematic" eye model by Gullstrand has a total power of +60 D.', es: 'El modelo de ojo "reducido" o "esquemático" simplificado de Gullstrand tiene una potencia total de +60 D.' } } /* ... 49 more */ ],
  '1-8': [ { id: 'c1s8q1', type: QuestionType.TrueFalse, questionText: { en: 'For a myope, pushing spectacles closer to the face increases their effective minus power.', es: 'Para un miope, acercar las gafas a la cara aumenta su potencia negativa efectiva.' }, options: [ { text: { en: 'True', es: 'Verdadero' }, isCorrect: false }, { text: { en: 'False', es: 'Falso' }, isCorrect: true } ], explanation: { en: 'Decreasing the vertex distance for a minus lens decreases its effective power (makes it less minus). This is why myopes push their glasses up their nose to see better.', es: 'Disminuir la distancia al vértice para una lente negativa disminuye su potencia efectiva (la hace menos negativa). Es por eso que los miopes se suben las gafas por la nariz para ver mejor.' } } /* ... 49 more */ ],
  '1-9': [ { id: 'c1s9q1', type: QuestionType.MultipleChoice, questionText: { en: 'To fit a rigid contact lens steeper than the cornea, what adjustment must be made to the lens power?', es: 'Para adaptar una lente de contacto rígida más curva que la córnea, ¿qué ajuste se debe hacer a la potencia de la lente?' }, options: [ { text: { en: 'Add plus power', es: 'Añadir potencia positiva' }, isCorrect: false }, { text: { en: 'Add minus power', es: 'Añadir potencia negativa' }, isCorrect: true }, { text: { en: 'No change is needed', es: 'No se necesita ningún cambio' }, isCorrect: false }, { text: { en: 'Increase the diameter', es: 'Aumentar el diámetro' }, isCorrect: false } ], explanation: { en: 'Fitting a rigid lens steeper than the cornea creates a plus power tear meniscus between the lens and the cornea. To compensate, minus power must be added to the contact lens. The rule is "SAM-FAP" (Steeper Add Minus, Flatter Add Plus).', es: 'Adaptar una lente rígida más curva que la córnea crea un menisco lagrimal de potencia positiva entre la lente y la córnea. Para compensar, se debe añadir potencia negativa a la lente de contacto. La regla es "SAM-FAP" (Más Curva Añadir Menos, Más Plana Añadir Más).' } } /* ... 49 more */ ],
  '1-10': [ { id: 'c1s10q1', type: QuestionType.TrueFalse, questionText: { en: 'For a patient with 20/80 vision, a +4.00 D add is required to read standard newspaper print.', es: 'Para un paciente con visión 20/80, se requiere una adición de +4.00 D para leer la letra estándar de un periódico.' }, options: [ { text: { en: 'True', es: 'Verdadero' }, isCorrect: true }, { text: { en: 'False', es: 'Falso' }, isCorrect: false } ], explanation: { en: "Kestenbaum's rule estimates the required add power by taking the reciprocal of the distance Snellen acuity. For 20/80, the reciprocal is 80/20 = +4.00 D.", es: "La regla de Kestenbaum estima la potencia de adición requerida tomando el recíproco de la agudeza visual de Snellen a distancia. Para 20/80, el recíproco es 80/20 = +4.00 D." } } /* ... 49 more */ ],
  '1-11': [ { id: 'c1s11q1', type: QuestionType.MultipleChoice, questionText: { en: 'Which generation of IOL formulas first incorporated keratometry (K) values in addition to axial length (AL)?', es: '¿Qué generación de fórmulas de LIO incorporó por primera vez los valores de queratometría (K) además de la longitud axial (LA)?' }, options: [ { text: { en: 'First generation', es: 'Primera generación' }, isCorrect: false }, { text: { en: 'Second generation', es: 'Segunda generación' }, isCorrect: false }, { text: { en: 'Third generation', es: 'Tercera generación' }, isCorrect: true }, { text: { en: 'Fourth generation', es: 'Cuarta generación' }, isCorrect: false } ], explanation: { en: 'Third-generation formulas (like Holladay 1, Hoffer Q, SRK/T) were the first to use two variables: both axial length and keratometry to predict the effective lens position (ELP).', es: 'Las fórmulas de tercera generación (como Holladay 1, Hoffer Q, SRK/T) fueron las primeras en utilizar dos variables: tanto la longitud axial como la queratometría para predecir la posición efectiva del cristalino (ELP).' } } /* ... 49 more */ ],
  '1-12': [ { id: 'c1s12q1', type: QuestionType.TrueFalse, questionText: { en: 'A direct ophthalmoscope provides a wider field of view than an indirect ophthalmoscope.', es: 'Un oftalmoscopio directo proporciona un campo de visión más amplio que un oftalmoscopio indirecto.' }, options: [ { text: { en: 'True', es: 'Verdadero' }, isCorrect: false }, { text: { en: 'False', es: 'Falso' }, isCorrect: true } ], explanation: { en: 'The indirect ophthalmoscope offers a much wider field of view (around 25°) compared to the direct ophthalmoscope (around 7°).', es: 'El oftalmoscopio indirecto ofrece un campo de visión mucho más amplio (alrededor de 25°) en comparación con el oftalmoscopio directo (alrededor de 7°).' } } /* ... 49 more */ ],
  '1-13': [ { id: 'c1s13q1', type: QuestionType.MultipleChoice, questionText: { en: 'What does the "U" represent in the vergence equation U + P = V?', es: '¿Qué representa la "U" en la ecuación de vergencia U + P = V?' }, options: [ { text: { en: 'Image vergence', es: 'Vergencia de la imagen' }, isCorrect: false }, { text: { en: 'Lens power', es: 'Potencia de la lente' }, isCorrect: false }, { text: { en: 'Object vergence', es: 'Vergencia del objeto' }, isCorrect: true }, { text: { en: 'Refractive index', es: 'Índice de refracción' }, isCorrect: false } ], explanation: { en: 'In the simple form of the vergence equation, U represents the object vergence (1/u), P is the lens power, and V is the image vergence (1/v).', es: 'En la forma simple de la ecuación de vergencia, U representa la vergencia del objeto (1/u), P es la potencia de la lente y V es la vergencia de la imagen (1/v).' } } /* ... 49 more */ ],
  '1-14': [ { id: 'c1s14q1', type: QuestionType.MultipleChoice, questionText: { en: 'What is the induced prism when a 67-year-old woman reads 10 mm below the upper segment optical center of her bifocals, which measure +2.50 +1.00 x 90 OD and -1.50 +1.50 x 180 OS add +2.50 OU?', es: '¿Cuál es el prisma inducido cuando una mujer de 67 años lee 10 mm por debajo del centro óptico del segmento superior de sus bifocales, que miden +2.50 +1.00 x 90 OD y -1.50 +1.50 x 180 OS con adición de +2.50 OU?' }, options: [ { text: { en: '4.0 Δ', es: '4.0 Δ' }, isCorrect: false }, { text: { en: '3.5 Δ', es: '3.5 Δ' }, isCorrect: false }, { text: { en: '2.5 Δ', es: '2.5 Δ' }, isCorrect: true }, { text: { en: '2.0 Δ', es: '2.0 Δ' }, isCorrect: false } ], explanation: { en: "Using Prentice's rule, the induced prism is (+2.50 x 1) OD and ([-1.50+1.50] x 1) OS (cylinder power acts in the vertical meridian, so it must be used in the calculation); the total is +2.5Δ BU OD; the effect is due to the underlying lens; the power of the bifocal segment can be ignored because it is the same for both lenses.", es: "Usando la regla de Prentice, el prisma inducido es (+2.50 x 1) OD y ([-1.50+1.50] x 1) OS (la potencia del cilindro actúa en el meridiano vertical, por lo que debe usarse en el cálculo); el total es +2.5Δ BU OD; el efecto se debe a la lente subyacente; la potencia del segmento bifocal puede ignorarse porque es la misma para ambas lentes." } } /* ... 49 more */ ],
  '1-15': [],
  '2-1': [
    { id: 'c2s1q1', type: QuestionType.MultipleChoice, questionText: { en: 'Which antibiotic results in the highest intravitreal concentration when administered orally?', es: '¿Qué antibiótico alcanza la mayor concentración intravítrea cuando se administra por vía oral?' }, options: [ { text: { en: 'ciprofloxacin', es: 'ciprofloxacino' }, isCorrect: true }, { text: { en: 'penicillin', es: 'penicilina' }, isCorrect: false }, { text: { en: 'bactrim', es: 'bactrim' }, isCorrect: false }, { text: { en: 'clindamycin', es: 'clindamicina' }, isCorrect: false } ], explanation: { en: 'Ciprofloxacin, a fluoroquinolone, has excellent intraocular penetration when administered orally.', es: 'El ciprofloxacino, una fluoroquinolona, tiene una excelente penetración intraocular cuando se administra por vía oral.' } }
    // ... more questions for 2-1
  ],
  '2-2': [
    { id: 'c2s2q1', type: QuestionType.TrueFalse, questionText: { en: 'Topical medications bypass the hepatic "first-pass" metabolism.', es: 'Los medicamentos tópicos evitan el metabolismo de "primer paso" hepático.' }, options: [ { text: { en: 'True', es: 'Verdadero' }, isCorrect: true }, { text: { en: 'False', es: 'Falso' }, isCorrect: false } ], explanation: { en: 'Topical medications are absorbed through mucous membranes and enter the bloodstream directly, avoiding the first-pass metabolism in the liver, which can increase the risk of systemic side effects.', es: 'Los medicamentos tópicos se absorben a través de las membranas mucosas y entran directamente en el torrente sanguíneo, evitando el metabolismo de primer paso en el hígado, lo que puede aumentar el riesgo de efectos secundarios sistémicos.' } }
    // ... more questions for 2-2
  ],
  '2-3': [
    { id: 'c2s3q1', type: QuestionType.MultipleChoice, questionText: { en: 'Which anesthetic agent would most interfere with an intraocular gas bubble?', es: '¿Qué agente anestésico interferiría más con una burbuja de gas intraocular?' }, options: [ { text: { en: 'isoflurane', es: 'isoflurano' }, isCorrect: false }, { text: { en: 'propofol', es: 'propofol' }, isCorrect: false }, { text: { en: 'sodium thiopental', es: 'tiopental sódico' }, isCorrect: false }, { text: { en: 'nitrous oxide', es: 'óxido nitroso' }, isCorrect: true } ], explanation: { en: 'Nitrous oxide can diffuse into an intraocular gas bubble, causing it to expand rapidly and dangerously increase intraocular pressure.', es: 'El óxido nitroso puede difundirse dentro de una burbuja de gas intraocular, haciendo que se expanda rápidamente y aumente peligrosamente la presión intraocular.' } }
    // ... more questions for 2-3
  ],
  '2-4': [
    { id: 'c2s4q1', type: QuestionType.MultipleChoice, questionText: { en: 'Which of the following is a direct-acting cholinergic agonist?', es: '¿Cuál de los siguientes es un agonista colinérgico de acción directa?' }, options: [ { text: { en: 'Echothiophate', es: 'Ecotiofato' }, isCorrect: false }, { text: { en: 'Physostigmine', es: 'Fisostigmina' }, isCorrect: false }, { text: { en: 'Pilocarpine', es: 'Pilocarpina' }, isCorrect: true }, { text: { en: 'Atropine', es: 'Atropina' }, isCorrect: false } ], explanation: { en: 'Pilocarpine is a direct-acting cholinergic agonist that acts on muscarinic receptors. Echothiophate and physostigmine are indirect-acting (anticholinesterases), and atropine is a muscarinic antagonist.', es: 'La pilocarpina es un agonista colinérgico de acción directa que actúa sobre los receptores muscarínicos. El ecotiofato y la fisostigmina son de acción indirecta (anticolinesterásicos), y la atropina es un antagonista muscarínico.' } }
    // ... more questions for 2-4
  ],
   '2-5': [ { id: 'c2s5q1', type: QuestionType.MultipleChoice, questionText: { en: 'What is the primary mechanism of action for prostaglandin analogues in glaucoma treatment?', es: '¿Cuál es el mecanismo de acción primario de los análogos de prostaglandinas en el tratamiento del glaucoma?' }, options: [ { text: { en: 'Decrease aqueous production', es: 'Disminuir la producción acuosa' }, isCorrect: false }, { text: { en: 'Increase trabecular outflow', es: 'Aumentar el flujo trabecular' }, isCorrect: false }, { text: { en: 'Increase uveoscleral outflow', es: 'Aumentar el flujo uveoescleral' }, isCorrect: true }, { text: { en: 'Constrict the pupil', es: 'Constreñir la pupila' }, isCorrect: false } ], explanation: { en: 'Prostaglandin analogues, like latanoprost, primarily lower IOP by increasing the uveoscleral outflow of aqueous humor.', es: 'Los análogos de prostaglandinas, como el latanoprost, disminuyen principalmente la PIO al aumentar el flujo de salida uveoescleral del humor acuoso.' } } ],
   '2-6': [ { id: 'c2s6q1', type: QuestionType.TrueFalse, questionText: { en: 'Steroids inhibit the enzyme phospholipase A2.', es: 'Los esteroides inhiben la enzima fosfolipasa A2.' }, options: [ { text: { en: 'True', es: 'Verdadero' }, isCorrect: true }, { text: { en: 'False', es: 'Falso' }, isCorrect: false } ], explanation: { en: 'Steroids block the release of arachidonic acid from phospholipids by inhibiting phospholipase A2, thereby blocking the entire inflammatory pathway.', es: 'Los esteroides bloquean la liberación de ácido araquidónico de los fosfolípidos al inhibir la fosfolipasa A2, bloqueando así toda la cascada inflamatoria.' } } ],
   '2-7': [ { id: 'c2s7q1', type: QuestionType.MultipleChoice, questionText: { en: 'Which of these is NOT a class of anti-inflammatory drugs?', es: '¿Cuál de estas no es una clase de medicamentos antiinflamatorios?' }, options: [ { text: { en: 'NSAIDs', es: 'AINEs' }, isCorrect: false }, { text: { en: 'Corticosteroids', es: 'Corticoesteroides' }, isCorrect: false }, { text: { en: 'Beta-blockers', es: 'Betabloqueantes' }, isCorrect: true }, { text: { en: 'Immunomodulators', es: 'Inmunomoduladores' }, isCorrect: false } ], explanation: { en: 'Beta-blockers are primarily used to treat glaucoma and cardiovascular conditions, not inflammation.', es: 'Los betabloqueantes se utilizan principalmente para tratar el glaucoma y las afecciones cardiovasculares, no la inflamación.' } } ],
   '2-8': [ { id: 'c2s8q1', type: QuestionType.TrueFalse, questionText: { en: 'Ocular decongestants like naphazoline can cause rebound hyperemia with chronic use.', es: 'Los descongestionantes oculares como la nafazolina pueden causar hiperemia de rebote con el uso crónico.' }, options: [ { text: { en: 'True', es: 'Verdadero' }, isCorrect: true }, { text: { en: 'False', es: 'Falso' }, isCorrect: false } ], explanation: { en: 'Chronic use of vasoconstrictors like naphazoline can lead to rebound vasodilation and conjunctival injection when the drug is discontinued.', es: 'El uso crónico de vasoconstrictores como la nafazolina puede provocar vasodilatación de rebote e inyección conjuntival cuando se suspende el fármaco.' } } ],
   '2-9': [ { id: 'c2s9q1', type: QuestionType.MultipleChoice, questionText: { en: 'Which drug is a combination antihistamine and mast cell stabilizer?', es: '¿Qué fármaco es una combinación de antihistamínico y estabilizador de mastocitos?' }, options: [ { text: { en: 'Cromolyn', es: 'Cromoglicato' }, isCorrect: false }, { text: { en: 'Levocabastine', es: 'Levocabastina' }, isCorrect: false }, { text: { en: 'Olopatadine', es: 'Olopatadina' }, isCorrect: true }, { text: { en: 'Lodoxamide', es: 'Lodoxamida' }, isCorrect: false } ], explanation: { en: 'Olopatadine (Patanol, Pataday) is a popular medication that has both H1-receptor antagonist (antihistamine) and mast cell stabilizing properties.', es: 'La olopatadina (Patanol, Pataday) es un medicamento popular que tiene propiedades tanto antagonistas de los receptores H1 (antihistamínico) como estabilizadoras de los mastocitos.' } } ],
   '2-10': [ { id: 'c2s10q1', type: QuestionType.TrueFalse, questionText: { en: 'Cyclosporine (Restasis) is a corticosteroid used for dry eye.', es: 'La ciclosporina (Restasis) es un corticosteroide utilizado para el ojo seco.' }, options: [ { text: { en: 'True', es: 'Verdadero' }, isCorrect: false }, { text: { en: 'False', es: 'Falso' }, isCorrect: true } ], explanation: { en: 'Cyclosporine is an immunomodulator (a T-cell inhibitor), not a corticosteroid. It is used to increase tear production in patients with chronic dry eye.', es: 'La ciclosporina es un inmunomodulador (un inhibidor de las células T), no un corticosteroide. Se utiliza para aumentar la producción de lágrimas en pacientes con ojo seco crónico.' } } ],
   '2-11': [ { id: 'c2s11q1', type: QuestionType.MultipleChoice, questionText: { en: 'Which antineoplastic drug is a pyrimidine antagonist topically used in glaucoma surgery?', es: '¿Qué fármaco antineoplásico es un antagonista de la pirimidina utilizado tópicamente en la cirugía de glaucoma?' }, options: [ { text: { en: 'Methotrexate', es: 'Metotrexato' }, isCorrect: false }, { text: { en: '5-Fluorouracil (5-FU)', es: '5-Fluorouracilo (5-FU)' }, isCorrect: true }, { text: { en: 'Mitomycin-C', es: 'Mitomicina-C' }, isCorrect: false }, { text: { en: 'Cyclophosphamide', es: 'Ciclofosfamida' }, isCorrect: false } ], explanation: { en: '5-Fluorouracil (5-FU) is a pyrimidine antagonist that inhibits DNA synthesis and is used as an antimetabolite in glaucoma filtration surgery to prevent scarring.', es: 'El 5-fluorouracilo (5-FU) es un antagonista de la pirimidina que inhibe la síntesis de ADN y se utiliza como antimetabolito en la cirugía de filtración de glaucoma para prevenir la cicatrización.' } } ],
   '2-12': [ { id: 'c2s12q1', type: QuestionType.TrueFalse, questionText: { en: 'Penicillins inhibit bacterial protein synthesis.', es: 'Las penicilinas inhiben la síntesis de proteínas bacterianas.' }, options: [ { text: { en: 'True', es: 'Verdadero' }, isCorrect: false }, { text: { en: 'False', es: 'Falso' }, isCorrect: true } ], explanation: { en: 'Penicillins are β-lactam antibiotics that inhibit cell-wall synthesis, not protein synthesis. Tetracyclines and macrolides are examples of protein synthesis inhibitors.', es: 'Las penicilinas son antibióticos β-lactámicos que inhiben la síntesis de la pared celular, no la síntesis de proteínas. Las tetraciclinas y los macrólidos son ejemplos de inhibidores de la síntesis de proteínas.' } } ],
   '2-13': [ { id: 'c2s13q1', type: QuestionType.MultipleChoice, questionText: { en: 'Which drug is used for its sympathomimetic effect to test for Horner syndrome?', es: '¿Qué fármaco se utiliza por su efecto simpaticomimético para la prueba del síndrome de Horner?' }, options: [ { text: { en: 'Pilocarpine', es: 'Pilocarpina' }, isCorrect: false }, { text: { en: 'Atropine', es: 'Atropina' }, isCorrect: false }, { text: { en: 'Cocaine', es: 'Cocaína' }, isCorrect: true }, { text: { en: 'Tropicamide', es: 'Tropicamida' }, isCorrect: false } ], explanation: { en: 'Topical cocaine (4% or 10%) blocks the reuptake of norepinephrine (NE). In a functioning sympathetic system, this causes pupil dilation. In Horner syndrome, NE is not released, so cocaine fails to dilate the pupil.', es: 'La cocaína tópica (4% o 10%) bloquea la recaptación de norepinefrina (NE). En un sistema simpático funcional, esto causa la dilatación de la pupila. En el síndrome de Horner, no se libera NE, por lo que la cocaína no dilata la pupila.' } } ],
   '2-14': [ { id: 'c2s14q1', type: QuestionType.MultipleChoice, questionText: { en: 'What is the most common ocular manifestation of abusive head trauma (AHT)?', es: '¿Cuál es la manifestación ocular más común del traumatismo craneoencefálico por abuso (TCA)?' }, options: [ { text: { en: 'corneal abrasion', es: 'abrasión corneal' }, isCorrect: false }, { text: { en: 'hyphema', es: 'hifema' }, isCorrect: false }, { text: { en: 'subconjunctival hemorrhage', es: 'hemorragia subconjuntival' }, isCorrect: false }, { text: { en: 'retinal hemorrhage', es: 'hemorragia retiniana' }, isCorrect: true } ], explanation: { en: 'Retinal hemorrhages are the cardinal manifestation of abusive head trauma (AHT), present in approximately 80% of cases. They can be seen in all layers of the retina and may be unilateral or bilateral.', es: 'Las hemorragias retinianas son la manifestación cardinal del traumatismo craneoencefálico por abuso (TCA), presentes en aproximadamente el 80% de los casos. Pueden observarse en todas las capas de la retina y pueden ser unilaterales o bilaterales.' } } ],
   '2-15': [],
  '3-1': [
    {
      id: 'c3s1q1',
      type: QuestionType.MultipleChoice,
      questionText: {
        en: 'Which of the following is the last embryonic tissue to form?',
        es: '¿Cuál de los siguientes es el último tejido embrionario en formarse?'
      },
      options: [
        { text: { en: 'Ectoderm', es: 'Ectodermo' }, isCorrect: false },
        { text: { en: 'Mesoderm', es: 'Mesodermo' }, isCorrect: false },
        { text: { en: 'Endoderm', es: 'Endodermo' }, isCorrect: false },
        { text: { en: 'Neural crest', es: 'Cresta neural' }, isCorrect: true }
      ],
      explanation: {
        en: 'Neural crest cells are migratory stem cells that arise from the crest of the neural folds and form tissue with characteristics of both ectoderm and mesoderm.',
        es: 'Las células de la cresta neural son células madre migratorias que surgen de la cresta de los pliegues neurales y forman tejido con características tanto del ectodermo como del mesodermo.'
      }
    },
     // ... more questions for 3-1
  ],
  '3-2': [
     {
      id: 'c3s2q1',
      type: QuestionType.MultipleChoice,
      questionText: {
        en: 'Which stain is most helpful in the diagnosis of sebaceous gland carcinoma?',
        es: '¿Qué tinción es más útil en el diagnóstico de carcinoma de glándula sebácea?'
      },
      options: [
        { text: { en: 'Giemsa', es: 'Giemsa' }, isCorrect: false },
        { text: { en: 'Hematoxylin and eosin', es: 'Hematoxilina y eosina' }, isCorrect: false },
        { text: { en: 'Oil-red-O', es: 'Rojo oleoso O' }, isCorrect: true },
        { text: { en: 'Methenamine silver', es: 'Plata metenamina' }, isCorrect: false }
      ],
      explanation: {
        en: 'Oil-red-O is a lipid stain, which is helpful in identifying sebaceous gland carcinoma as it stains the lipid within the tumor cells.',
        es: 'El rojo oleoso O es una tinción para lípidos, útil para identificar el carcinoma de glándula sebácea ya que tiñe los lípidos dentro de las células tumorales.'
      }
    },
    // ... more questions for 3-2
  ],
   '3-3': [
     {
      id: 'c3s3q1',
      type: QuestionType.TrueFalse,
      questionText: {
        en: 'Formalin fixation leaches lipids out of fresh tissue.',
        es: 'La fijación con formalina extrae los lípidos del tejido fresco.'
      },
      options: [
        { text: { en: 'True', es: 'Verdadero' }, isCorrect: true },
        { text: { en: 'False', es: 'Falso' }, isCorrect: false }
      ],
      explanation: {
        en: 'Formalin leaches out lipids, which is why lipid stains like Oil red O must be used on fresh or frozen tissue.',
        es: 'La formalina extrae los lípidos, por lo que las tinciones para lípidos como el Rojo oleoso O deben usarse en tejido fresco o congelado.'
      }
    },
    // ... more questions for 3-3
  ],
   '3-4': [
     {
      id: 'c3s4q1',
      type: QuestionType.MultipleChoice,
      questionText: {
        en: 'A graft reaction is an example of which type of hypersensitivity reaction?',
        es: 'Una reacción de rechazo de injerto es un ejemplo de qué tipo de reacción de hipersensibilidad?'
      },
      options: [
        { text: { en: 'Type I', es: 'Tipo I' }, isCorrect: false },
        { text: { en: 'Type II', es: 'Tipo II' }, isCorrect: false },
        { text: { en: 'Type III', es: 'Tipo III' }, isCorrect: false },
        { text: { en: 'Type IV', es: 'Tipo IV' }, isCorrect: true }
      ],
      explanation: {
        en: 'Graft rejection is a classic example of a Type IV cell-mediated or delayed hypersensitivity reaction, involving T-lymphocytes.',
        es: 'El rechazo de injerto es un ejemplo clásico de una reacción de hipersensibilidad de tipo IV, mediada por células o retardada, que involucra a los linfocitos T.'
      }
    },
    // ... more questions for 3-4
  ],
   '3-5': [
     {
      id: 'c3s5q1',
      type: QuestionType.MultipleChoice,
      questionText: {
        en: 'Which immunoglobulin is the most abundant and can cross the placenta?',
        es: '¿Qué inmunoglobulina es la más abundante y puede atravesar la placenta?'
      },
      options: [
        { text: { en: 'IgA', es: 'IgA' }, isCorrect: false },
        { text: { en: 'IgE', es: 'IgE' }, isCorrect: false },
        { text: { en: 'IgG', es: 'IgG' }, isCorrect: true },
        { text: { en: 'IgM', es: 'IgM' }, isCorrect: false }
      ],
      explanation: {
        en: 'IgG is the most abundant immunoglobulin in serum, crosses the placenta to provide passive immunity to the fetus, and binds complement.',
        es: 'La IgG es la inmunoglobulina más abundante en el suero, atraviesa la placenta para proporcionar inmunidad pasiva al feto y se une al complemento.'
      }
    },
    // ... more questions for 3-5
  ],
   '3-6': [
     {
      id: 'c3s6q1',
      type: QuestionType.MultipleChoice,
      questionText: {
        en: 'Birdshot chorioretinopathy is strongly associated with which HLA antigen?',
        es: 'La coriorretinopatía en perdigonada está fuertemente asociada con ¿qué antígeno HLA?'
      },
      options: [
        { text: { en: 'HLA-B27', es: 'HLA-B27' }, isCorrect: false },
        { text: { en: 'HLA-A29', es: 'HLA-A29' }, isCorrect: true },
        { text: { en: 'HLA-B51', es: 'HLA-B51' }, isCorrect: false },
        { text: { en: 'HLA-DR4', es: 'HLA-DR4' }, isCorrect: false }
      ],
      explanation: {
        en: 'Birdshot chorioretinopathy has the strongest known HLA association in ocular inflammatory disease, with nearly all patients being HLA-A29 positive.',
        es: 'La coriorretinopatía en perdigonada tiene la asociación HLA más fuerte conocida en enfermedades inflamatorias oculares, siendo casi todos los pacientes HLA-A29 positivos.'
      }
    },
    // ... more questions for 3-6
  ],
   '3-7': [
     {
      id: 'c3s7q1',
      type: QuestionType.MultipleChoice,
      questionText: {
        en: 'Touton giant cells are characteristic of which condition?',
        es: 'Las células gigantes de Touton son características de ¿qué condición?'
      },
      options: [
        { text: { en: 'Tuberculosis', es: 'Tuberculosis' }, isCorrect: false },
        { text: { en: 'Sarcoidosis', es: 'Sarcoidosis' }, isCorrect: false },
        { text: { en: 'Juvenile xanthogranuloma (JXG)', es: 'Xantogranuloma juvenil (JXG)' }, isCorrect: true },
        { text: { en: 'Foreign body reaction', es: 'Reacción a cuerpo extraño' }, isCorrect: false }
      ],
      explanation: {
        en: 'Touton giant cells, with a midperipheral ring of nuclei and a foamy cytoplasm, are characteristic of juvenile xanthogranuloma (JXG).',
        es: 'Las células gigantes de Touton, con un anillo de núcleos en la periferia media y un citoplasma espumoso, son características del xantogranuloma juvenil (JXG).'
      }
    },
    // ... more questions for 3-7
  ],
   '3-8': [
     {
      id: 'c3s8q1',
      type: QuestionType.TrueFalse,
      questionText: {
        en: 'Parakeratosis is the retention of nuclei in the keratin layer of the epithelium.',
        es: 'La paraqueratosis es la retención de núcleos en la capa de queratina del epitelio.'
      },
      options: [
        { text: { en: 'True', es: 'Verdadero' }, isCorrect: true },
        { text: { en: 'False', es: 'Falso' }, isCorrect: false }
      ],
      explanation: {
        en: 'Parakeratosis is the thickening of the keratin layer with retention of nuclei, indicating a shortened epidermal regeneration time.',
        es: 'La paraqueratosis es el engrosamiento de la capa de queratina con retención de núcleos, lo que indica un tiempo de regeneración epidérmica acortado.'
      }
    },
    // ... more questions for 3-8
  ],
   '3-9': [
     {
      id: 'c3s9q1',
      type: QuestionType.MultipleChoice,
      questionText: {
        en: 'Aging changes in the cornea include the presence of:',
        es: 'Los cambios por el envejecimiento en la córnea incluyen la presencia de:'
      },
      options: [
        { text: { en: 'Elschnig pearls', es: 'Perlas de Elschnig' }, isCorrect: false },
        { text: { en: 'Hassall-Henle warts', es: 'Verrugas de Hassall-Henle' }, isCorrect: true },
        { text: { en: 'Brushfield spots', es: 'Manchas de Brushfield' }, isCorrect: false },
        { text: { en: 'Herbert pits', es: 'Fosetas de Herbert' }, isCorrect: false }
      ],
      explanation: {
        en: 'Hassall-Henle warts are excrescences and thickenings of Descemet membrane in the corneal periphery that are considered an aging change.',
        es: 'Las verrugas de Hassall-Henle son excrescencias y engrosamientos de la membrana de Descemet en la periferia corneal que se consideran un cambio por el envejecimiento.'
      }
    },
    // ... more questions for 3-9
  ],
   '3-10': [
     {
      id: 'c3s10q1',
      type: QuestionType.TrueFalse,
      questionText: {
        en: 'Corneal blood staining is caused by hemoglobin breakdown products forced through the endothelium by high IOP.',
        es: 'La tinción sanguínea de la córnea es causada por productos de degradación de la hemoglobina forzados a través del endotelio por una PIO alta.'
      },
      options: [
        { text: { en: 'True', es: 'Verdadero' }, isCorrect: true },
        { text: { en: 'False', es: 'Falso' }, isCorrect: false }
      ],
      explanation: {
        en: 'In the presence of a hyphema and high IOP, hemoglobin breakdown products can be forced through the endothelial cells into the corneal stroma, causing corneal blood staining.',
        es: 'En presencia de un hifema y una PIO alta, los productos de degradación de la hemoglobina pueden ser forzados a través de las células endoteliales hacia el estroma corneal, causando tinción sanguínea de la córnea.'
      }
    },
    // ... more questions for 3-10
  ],
   '3-11': [
     {
      id: 'c3s11q1',
      type: QuestionType.MultipleChoice,
      questionText: {
        en: 'An ocular manifestation of congenital syphilis is:',
        es: 'Una manifestación ocular de la sífilis congénita es:'
      },
      options: [
        { text: { en: 'Interstitial keratitis', es: 'Queratitis intersticial' }, isCorrect: true },
        { text: { en: 'Band keratopathy', es: 'Queratopatía en banda' }, isCorrect: false },
        { text: { en: 'Phlyctenule', es: 'Flicténula' }, isCorrect: false },
        { text: { en: 'Dendritic ulcer', es: 'Úlcera dendrítica' }, isCorrect: false }
      ],
      explanation: {
        en: 'Interstitial keratitis (IK) is a classic finding in congenital syphilis, though it can also be acquired. It involves an immune response to treponemal antigens within the corneal stroma.',
        es: 'La queratitis intersticial (QI) es un hallazgo clásico en la sífilis congénita, aunque también puede ser adquirida. Implica una respuesta inmune a los antígenos treponémicos dentro del estroma corneal.'
      }
    },
    // ... more questions for 3-11
  ],
   '3-12': [
     {
      id: 'c3s12q1',
      type: QuestionType.MultipleChoice,
      questionText: {
        en: 'Which of the following is NOT a type of retinoblastoma rosette?',
        es: '¿Cuál de los siguientes NO es un tipo de roseta de retinoblastoma?'
      },
      options: [
        { text: { en: 'Homer-Wright rosette', es: 'Roseta de Homer-Wright' }, isCorrect: false },
        { text: { en: 'Flexner-Wintersteiner rosette', es: 'Roseta de Flexner-Wintersteiner' }, isCorrect: false },
        { text: { en: 'Touton giant cell', es: 'Célula gigante de Touton' }, isCorrect: true },
        { text: { en: 'Fleurette', es: 'Fleurette' }, isCorrect: false }
      ],
      explanation: {
        en: 'Homer-Wright and Flexner-Wintersteiner rosettes, as well as fleurettes, are histologic markers of differentiation in retinoblastoma. Touton giant cells are found in xanthogranulomatous conditions.',
        es: 'Las rosetas de Homer-Wright y Flexner-Wintersteiner, así como las fleurettes, son marcadores histológicos de diferenciación en el retinoblastoma. Las células gigantes de Touton se encuentran en condiciones xantogranulomatosas.'
      }
    },
    // ... more questions for 3-12
  ],
  '4-1': [
    {
        id: 'c4s1q1',
        type: QuestionType.MultipleChoice,
        questionText: { en: 'A lesion in Meyer\'s loop, part of the optic radiations in the temporal lobe, results in what type of visual field defect?', es: 'Una lesión en el asa de Meyer, parte de las radiaciones ópticas en el lóbulo temporal, ¿resulta en qué tipo de defecto del campo visual?' },
        options: [
            { text: { en: 'Inferior homonymous quadrantanopsia', es: 'Cuadrantanopsia homónima inferior' }, isCorrect: false },
            { text: { en: 'Superior homonymous quadrantanopsia ("pie in the sky")', es: 'Cuadrantanopsia homónima superior ("pastel en el cielo")' }, isCorrect: true },
            { text: { en: 'Bitemporal hemianopsia', es: 'Hemianopsia bitemporal' }, isCorrect: false },
            { text: { en: 'Central scotoma', es: 'Escotoma central' }, isCorrect: false }
        ],
        explanation: { en: 'Meyer\'s loop carries fibers from the inferior retina (superior visual field). A lesion here causes a contralateral superior homonymous quadrantanopsia.', es: 'El asa de Meyer lleva fibras de la retina inferior (campo visual superior). Una lesión aquí causa una cuadrantanopsia homónima superior contralateral.' }
    }
],
'4-2': [
    {
        id: 'c4s2q1',
        type: QuestionType.MultipleChoice,
        questionText: { en: 'The "a-wave" of the full-field electroretinogram (ERG) represents the function of which retinal cells?', es: 'La "onda a" del electrorretinograma (ERG) de campo completo representa la función de ¿qué células retinianas?' },
        options: [
            { text: { en: 'Ganglion cells', es: 'Células ganglionares' }, isCorrect: false },
            { text: { en: 'Bipolar cells', es: 'Células bipolares' }, isCorrect: false },
            { text: { en: 'Photoreceptors (rods and cones)', es: 'Fotorreceptores (bastones y conos)' }, isCorrect: true },
            { text: { en: 'Müller cells', es: 'Células de Müller' }, isCorrect: false }
        ],
        explanation: { en: 'The initial negative deflection, the a-wave, of the ERG reflects the hyperpolarization of the photoreceptors in response to a light stimulus.', es: 'La deflexión negativa inicial, la onda a, del ERG refleja la hiperpolarización de los fotorreceptores en respuesta a un estímulo lumínico.' }
    }
],
'4-3': [
    {
        id: 'c4s3q1',
        type: QuestionType.MultipleChoice,
        questionText: { en: 'A bitemporal hemianopsia is most commonly caused by a lesion at which location?', es: 'Una hemianopsia bitemporal es causada más comúnmente por una lesión en ¿qué ubicación?' },
        options: [
            { text: { en: 'Optic nerve', es: 'Nervio óptico' }, isCorrect: false },
            { text: { en: 'Optic chiasm', es: 'Quiasma óptico' }, isCorrect: true },
            { text: { en: 'Optic tract', es: 'Tracto óptico' }, isCorrect: false },
            { text: { en: 'Occipital cortex', es: 'Corteza occipital' }, isCorrect: false }
        ],
        explanation: { en: 'Lesions at the optic chiasm, such as a pituitary adenoma, compress the decussating nasal retinal fibers from both eyes, causing loss of the temporal visual fields bilaterally.', es: 'Las lesiones en el quiasma óptico, como un adenoma hipofisario, comprimen las fibras retinianas nasales que se decusan de ambos ojos, causando pérdida de los campos visuales temporales bilateralmente.' }
    }
],
'4-4': [
    {
        id: 'c4s4q1',
        type: QuestionType.MultipleChoice,
        questionText: { en: 'Internuclear ophthalmoplegia (INO) is caused by a lesion in the:', es: 'La oftalmoplejía internuclear (OIN) es causada por una lesión en:' },
        options: [
            { text: { en: 'Paramedian pontine reticular formation (PPRF)', es: 'Formación reticular pontina paramediana (FRPP)' }, isCorrect: false },
            { text: { en: 'Abducens nucleus', es: 'Núcleo del abducens' }, isCorrect: false },
            { text: { en: 'Medial longitudinal fasciculus (MLF)', es: 'Fascículo longitudinal medial (FLM)' }, isCorrect: true },
            { text: { en: 'Oculomotor nucleus', es: 'Núcleo oculomotor' }, isCorrect: false }
        ],
        explanation: { en: 'An INO is characterized by impaired adduction of the ipsilateral eye and nystagmus of the contralateral abducting eye. It is caused by a lesion in the MLF, which connects the CN VI nucleus to the contralateral CN III nucleus.', es: 'Una OIN se caracteriza por una aducción deficiente del ojo ipsilateral y nistagmo del ojo contralateral en abducción. Es causada por una lesión en el FLM, que conecta el núcleo del PC VI con el núcleo contralateral del PC III.' }
    }
],
'4-5': [
    {
        id: 'c4s5q1',
        type: QuestionType.TrueFalse,
        questionText: { en: 'Jerk nystagmus is characterized by oscillations of equal velocity in both directions.', es: 'El nistagmo en resorte se caracteriza por oscilaciones de igual velocidad en ambas direcciones.' },
        options: [
            { text: { en: 'True', es: 'Verdadero' }, isCorrect: false },
            { text: { en: 'False', es: 'Falso' }, isCorrect: true }
        ],
        explanation: { en: 'Jerk nystagmus has a slow phase in one direction and a fast, corrective saccade (jerk) in the other. Pendular nystagmus has oscillations of equal velocity.', es: 'El nistagmo en resorte tiene una fase lenta en una dirección y una sacada correctiva rápida (resorte) en la otra. El nistagmo pendular tiene oscilaciones de igual velocidad.' }
    }
],
'4-6': [
    {
        id: 'c4s6q1',
        type: QuestionType.MultipleChoice,
        questionText: { en: 'A "down and out" position of the eye, accompanied by ptosis and a dilated pupil, is characteristic of a palsy of which cranial nerve?', es: 'Una posición del ojo "hacia abajo y afuera", acompañada de ptosis y una pupila dilatada, es característica de una parálisis de ¿qué par craneal?' },
        options: [
            { text: { en: 'CN III (Oculomotor)', es: 'PC III (Oculomotor)' }, isCorrect: true },
            { text: { en: 'CN IV (Trochlear)', es: 'PC IV (Troclear)' }, isCorrect: false },
            { text: { en: 'CN VI (Abducens)', es: 'PC VI (Abducens)' }, isCorrect: false },
            { text: { en: 'CN V (Trigeminal)', es: 'PC V (Trigémino)' }, isCorrect: false }
        ],
        explanation: { en: 'A complete third nerve palsy affects most of the extraocular muscles, the levator palpebrae, and the pupillary sphincter, leading to the classic "down and out" position, ptosis, and mydriasis.', es: 'Una parálisis completa del tercer par craneal afecta a la mayoría de los músculos extraoculares, al elevador del párpado y al esfínter pupilar, lo que conduce a la clásica posición "hacia abajo y afuera", ptosis y midriasis.' }
    }
],
'4-7': [
    {
        id: 'c4s7q1',
        type: QuestionType.MultipleChoice,
        questionText: { en: 'What is the classic finding in an Argyll Robertson pupil?', es: '¿Cuál es el hallazgo clásico en una pupila de Argyll Robertson?' },
        options: [
            { text: { en: 'Poor reaction to light, brisk reaction to accommodation', es: 'Mala reacción a la luz, reacción enérgica a la acomodación' }, isCorrect: true },
            { text: { en: 'Poor reaction to accommodation, brisk reaction to light', es: 'Mala reacción a la acomodación, reacción enérgica a la luz' }, isCorrect: false },
            { text: { en: 'A large, fixed, dilated pupil', es: 'Una pupila grande, fija y dilatada' }, isCorrect: false },
            { text: { en: 'A relative afferent pupillary defect', es: 'Un defecto pupilar aferente relativo' }, isCorrect: false }
        ],
        explanation: { en: 'Argyll Robertson pupils are a classic sign of tertiary syphilis. They are characterized by light-near dissociation, where the pupils constrict poorly to light but constrict well to a near stimulus. Mnemonic: "prostitute\'s pupil" - accommodates but doesn\'t react.', es: 'Las pupilas de Argyll Robertson son un signo clásico de la sífilis terciaria. Se caracterizan por disociación luz-cerca, donde las pupilas se contraen mal a la luz pero se contraen bien a un estímulo cercano. Mnemotecnia: "pupila de prostituta" - acomoda pero no reacciona.' }
    }
],
'4-8': [
    {
        id: 'c4s8q1',
        type: QuestionType.MultipleChoice,
        questionText: { en: 'Which of the following is a classic symptom of optic neuritis?', es: '¿Cuál de los siguientes es un síntoma clásico de la neuritis óptica?' },
        options: [
            { text: { en: 'Sudden, painless, profound vision loss', es: 'Pérdida de visión súbita, indolora y profunda' }, isCorrect: false },
            { text: { en: 'Gradual, painless blurring of vision', es: 'Visión borrosa gradual e indolora' }, isCorrect: false },
            { text: { en: 'Pain with eye movement and vision loss over days', es: 'Dolor con el movimiento ocular y pérdida de visión a lo largo de días' }, isCorrect: true },
            { text: { en: 'Floaters and flashing lights', es: 'Moscas volantes y destellos de luz' }, isCorrect: false }
        ],
        explanation: { en: 'Optic neuritis, strongly associated with multiple sclerosis, typically presents with subacute monocular vision loss, often accompanied by pain on eye movement and dyschromatopsia (impaired color vision).', es: 'La neuritis óptica, fuertemente asociada con la esclerosis múltiple, se presenta típicamente con una pérdida de visión monocular subaguda, a menudo acompañada de dolor al mover el ojo y discromatopsia (alteración de la visión del color).' }
    }
],
'4-9': [
    {
        id: 'c4s9q1',
        type: QuestionType.TrueFalse,
        questionText: { en: 'A pituitary adenoma is the most common cause of chiasmal compression.', es: 'Un adenoma hipofisario es la causa más común de compresión quiasmática.' },
        options: [
            { text: { en: 'True', es: 'Verdadero' }, isCorrect: true },
            { text: { en: 'False', es: 'Falso' }, isCorrect: false }
        ],
        explanation: { en: 'Due to its location directly inferior to the optic chiasm, an enlarging pituitary adenoma is the most frequent cause of chiasmal compression, classically leading to a bitemporal hemianopsia.', es: 'Debido a su ubicación directamente inferior al quiasma óptico, un adenoma hipofisario en crecimiento es la causa más frecuente de compresión quiasmática, lo que clásicamente conduce a una hemianopsia bitemporal.' }
    }
],
'4-10': [
    {
        id: 'c4s10q1',
        type: QuestionType.MultipleChoice,
        questionText: { en: 'A lesion of the left optic tract will produce which visual field defect?', es: 'Una lesión del tracto óptico izquierdo producirá ¿qué defecto del campo visual?' },
        options: [
            { text: { en: 'Left homonymous hemianopsia', es: 'Hemianopsia homónima izquierda' }, isCorrect: false },
            { text: { en: 'Right homonymous hemianopsia', es: 'Hemianopsia homónima derecha' }, isCorrect: true },
            { text: { en: 'Bitemporal hemianopsia', es: 'Hemianopsia bitemporal' }, isCorrect: false },
            { text: { en: 'Binasal hemianopsia', es: 'Hemianopsia binasal' }, isCorrect: false }
        ],
        explanation: { en: 'The left optic tract contains fibers from the left temporal retina and the right nasal retina, which correspond to the right visual field. A lesion here causes a right homonymous hemianopsia.', es: 'El tracto óptico izquierdo contiene fibras de la retina temporal izquierda y la retina nasal derecha, que corresponden al campo visual derecho. Una lesión aquí causa una hemianopsia homónima derecha.' }
    }
],
'4-11': [
    {
        id: 'c4s11q1',
        type: QuestionType.MultipleChoice,
        questionText: { en: 'Charles Bonnet syndrome involves:', es: 'El síndrome de Charles Bonnet implica:' },
        options: [
            { text: { en: 'Visual hallucinations in a psychologically normal person with vision loss', es: 'Alucinaciones visuales en una persona psicológicamente normal con pérdida de visión' }, isCorrect: true },
            { text: { en: 'Inability to recognize faces', es: 'Incapacidad para reconocer caras' }, isCorrect: false },
            { text: { en: 'Denial of blindness', es: 'Negación de la ceguera' }, isCorrect: false },
            { text: { en: 'Loss of color vision', es: 'Pérdida de la visión del color' }, isCorrect: false }
        ],
        explanation: { en: 'Charles Bonnet syndrome is characterized by complex visual hallucinations in patients with significant vision loss (e.g., from macular degeneration). The patients are aware that the hallucinations are not real.', es: 'El síndrome de Charles Bonnet se caracteriza por alucinaciones visuales complejas en pacientes con una pérdida de visión significativa (p. ej., por degeneración macular). Los pacientes son conscientes de que las alucinaciones no son reales.' }
    }
],
'4-12': [
    {
        id: 'c4s12q1',
        type: QuestionType.MultipleChoice,
        questionText: { en: 'A new-onset headache, jaw claudication, and scalp tenderness in an elderly patient should raise suspicion for:', es: 'Una cefalea de nueva aparición, claudicación mandibular y sensibilidad del cuero cabelludo en un paciente de edad avanzada deben hacer sospechar de:' },
        options: [
            { text: { en: 'Migraine', es: 'Migraña' }, isCorrect: false },
            { text: { en: 'Cluster headache', es: 'Cefalea en racimos' }, isCorrect: false },
            { text: { en: 'Giant cell arteritis (GCA)', es: 'Arteritis de células gigantes (ACG)' }, isCorrect: true },
            { text: { en: 'Pseudotumor cerebri', es: 'Pseudotumor cerebral' }, isCorrect: false }
        ],
        explanation: { en: 'This constellation of symptoms is classic for giant cell arteritis (temporal arteritis), a medical emergency that can lead to irreversible vision loss from arteritic anterior ischemic optic neuropathy (A-AION) if not treated promptly with high-dose systemic steroids.', es: 'Esta constelación de síntomas es clásica de la arteritis de células gigantes (arteritis temporal), una emergencia médica que puede conducir a una pérdida de visión irreversible por neuropatía óptica isquémica anterior arterítica (NOIA-A) si no se trata de inmediato con altas dosis de esteroides sistémicos.' }
    }
],
'4-13': [
    {
        id: 'c4s13q1',
        type: QuestionType.TrueFalse,
        questionText: { en: 'The most common neuro-ophthalmic manifestation of AIDS is CMV retinitis.', es: 'La manifestación neuro-oftalmológica más común del SIDA es la retinitis por CMV.' },
        options: [
            { text: { en: 'True', es: 'Verdadero' }, isCorrect: false },
            { text: { en: 'False', es: 'Falso' }, isCorrect: true }
        ],
        explanation: { en: 'While CMV retinitis is a critical opportunistic infection in AIDS, the most common neuro-ophthalmic finding is HIV-related cognitive impairment and associated eye movement abnormalities. Cranial nerve palsies are also more common than CMV retinitis as a neuro-ophthalmic sign.', es: 'Si bien la retinitis por CMV es una infección oportunista crítica en el SIDA, el hallazgo neuro-oftalmológico más común es el deterioro cognitivo relacionado con el VIH y las anomalías asociadas del movimiento ocular. Las parálisis de pares craneales también son más comunes que la retinitis por CMV como signo neuro-oftalmológico.' }
    }
],
'4-14': [
    {
        id: 'c4s14q1',
        type: QuestionType.MultipleChoice,
        questionText: { en: 'A relative afferent pupillary defect (RAPD) indicates a lesion in the:', es: 'Un defecto pupilar aferente relativo (DPAR) indica una lesión en:' },
        options: [
            { text: { en: 'Efferent pupillary pathway (parasympathetic nerves)', es: 'Vía pupilar eferente (nervios parasimpáticos)' }, isCorrect: false },
            { text: { en: 'Afferent visual pathway, anterior to the lateral geniculate nucleus', es: 'Vía visual aferente, anterior al núcleo geniculado lateral' }, isCorrect: true },
            { text: { en: 'Sympathetic pathway to the pupil', es: 'Vía simpática hacia la pupila' }, isCorrect: false },
            { text: { en: 'Edinger-Westphal nucleus', es: 'Núcleo de Edinger-Westphal' }, isCorrect: false }
        ],
        explanation: { en: 'An RAPD, or Marcus Gunn pupil, is a sign of asymmetric damage to the afferent visual pathway (retina or optic nerve). It is detected by the swinging flashlight test.', es: 'Un DPAR, o pupila de Marcus Gunn, es un signo de daño asimétrico en la vía visual aferente (retina o nervio óptico). Se detecta mediante la prueba de la linterna oscilante.' }
    }
],
  '5-1': [
    {
        id: 'c5s1q1',
        type: QuestionType.MultipleChoice,
        questionText: { en: 'At what age does a typically developing infant reach an adult level of visual acuity (20/20)?', es: '¿A qué edad un bebé con desarrollo típico alcanza un nivel de agudeza visual de adulto (20/20)?' },
        options: [
            { text: { en: '6 months', es: '6 meses' }, isCorrect: false },
            { text: { en: '1 year', es: '1 año' }, isCorrect: false },
            { text: { en: '3-5 years', es: '3-5 años' }, isCorrect: true },
            { text: { en: '7-8 years', es: '7-8 años' }, isCorrect: false }
        ],
        explanation: { en: 'Visual acuity develops rapidly over the first few months of life, but adult levels of 20/20 are typically not reached until 3 to 5 years of age.', es: 'La agudeza visual se desarrolla rápidamente durante los primeros meses de vida, pero los niveles de adulto de 20/20 no se alcanzan típicamente hasta los 3 a 5 años de edad.' }
    }
],'5-2': [
    {
        id: 'c5s2q1',
        type: QuestionType.MultipleChoice,
        questionText: { en: 'A firm, non-tender, mobile subcutaneous nodule near the lateral brow in a child is most likely a:', es: 'Un nódulo subcutáneo firme, no doloroso y móvil cerca de la ceja lateral en un niño es muy probablemente un:' },
        options: [
            { text: { en: 'Capillary hemangioma', es: 'Hemangioma capilar' }, isCorrect: false },
            { text: { en: 'Dermoid cyst', es: 'Quiste dermoide' }, isCorrect: true },
            { text: { en: 'Rhabdomyosarcoma', es: 'Rabdomiosarcoma' }, isCorrect: false },
            { text: { en: 'Neurofibroma', es: 'Neurofibroma' }, isCorrect: false }
        ],
        explanation: { en: 'Dermoid cysts are common, benign congenital tumors (choristomas) that typically present as a firm, painless mass in the superotemporal orbit, often attached to the underlying periosteum.', es: 'Los quistes dermoides son tumores congénitos benignos comunes (coristomas) que típicamente se presentan como una masa firme e indolora en la órbita superotemporal, a menudo adherida al periostio subyacente.' }
    }
],'5-3': [
    {
        id: 'c5s3q1',
        type: QuestionType.TrueFalse,
        questionText: { en: 'In congenital ptosis, the ptosis is typically worse in downgaze.', es: 'En la ptosis congénita, la ptosis es típicamente peor en la mirada hacia abajo.' },
        options: [
            { text: { en: 'True', es: 'Verdadero' }, isCorrect: false },
            { text: { en: 'False', es: 'Falso' }, isCorrect: true }
        ],
        explanation: { en: 'Congenital ptosis is usually caused by a dystrophic levator muscle. This muscle does not relax well, leading to lid lag and worsening of the ptosis in upgaze, but improvement in downgaze.', es: 'La ptosis congénita generalmente es causada por un músculo elevador distrófico. Este músculo no se relaja bien, lo que lleva a un retraso palpebral y un empeoramiento de la ptosis en la mirada hacia arriba, pero una mejoría en la mirada hacia abajo.' }
    }
],'5-4': [
    {
        id: 'c5s4q1',
        type: QuestionType.MultipleChoice,
        questionText: { en: 'Hyperacute conjunctivitis (ophthalmia neonatorum) within the first week of life, characterized by severe purulent discharge and chemosis, is most commonly caused by:', es: 'La conjuntivitis hiperaguda (oftalmía neonatal) en la primera semana de vida, caracterizada por una secreción purulenta severa y quemosis, es causada más comúnmente por:' },
        options: [
            { text: { en: 'Chlamydia trachomatis', es: 'Chlamydia trachomatis' }, isCorrect: false },
            { text: { en: 'Neisseria gonorrhoeae', es: 'Neisseria gonorrhoeae' }, isCorrect: true },
            { text: { en: 'Herpes simplex virus (HSV)', es: 'Virus del herpes simple (VHS)' }, isCorrect: false },
            { text: { en: 'Staphylococcus aureus', es: 'Staphylococcus aureus' }, isCorrect: false }
        ],
        explanation: { en: 'Gonococcal conjunctivitis presents 2-5 days after birth with a hyperacute, severe purulent discharge. It is an ophthalmic emergency due to the risk of corneal perforation.', es: 'La conjuntivitis gonocócica se presenta de 2 a 5 días después del nacimiento con una secreción purulenta hiperaguda y severa. Es una emergencia oftálmica debido al riesgo de perforación corneal.' }
    }
],'5-5': [
    {
        id: 'c5s5q1',
        type: QuestionType.TrueFalse,
        questionText: { en: 'A unilateral congenital cataract is more amblyogenic than a bilateral one.', es: 'Una catarata congénita unilateral es más ambliogénica que una bilateral.' },
        options: [
            { text: { en: 'True', es: 'Verdadero' }, isCorrect: true },
            { text: { en: 'False', es: 'Falso' }, isCorrect: false }
        ],
        explanation: { en: 'Unilateral congenital cataracts are highly amblyogenic because the developing visual system will favor the clear eye, leading to profound deprivation amblyopia in the affected eye if not treated urgently.', es: 'Las cataratas congénitas unilaterales son altamente ambliogénicas porque el sistema visual en desarrollo favorecerá al ojo sano, lo que lleva a una ambliopía por deprivación profunda en el ojo afectado si no se trata con urgencia.' }
    }
],'5-6': [
    {
        id: 'c5s6q1',
        type: QuestionType.MultipleChoice,
        questionText: { en: 'The classic triad of primary congenital glaucoma consists of epiphora, photophobia, and:', es: 'La tríada clásica del glaucoma congénito primario consiste en epífora, fotofobia y:' },
        options: [
            { text: { en: 'Nystagmus', es: 'Nistagmo' }, isCorrect: false },
            { text: { en: 'Strabismus', es: 'Estrabismo' }, isCorrect: false },
            { text: { en: 'Blepharospasm', es: 'Blefaroespasmo' }, isCorrect: true },
            { text: { en: 'Leukocoria', es: 'Leucocoria' }, isCorrect: false }
        ],
        explanation: { en: 'The classic triad of symptoms for primary congenital glaucoma is epiphora (tearing), photophobia (light sensitivity), and blepharospasm (eyelid squeezing).', es: 'La tríada clásica de síntomas del glaucoma congénito primario es epífora (lagrimeo), fotofobia (sensibilidad a la luz) y blefaroespasmo (cierre forzado de los párpados).' }
    }
],'5-7': [
    {
        id: 'c5s7q1',
        type: QuestionType.MultipleChoice,
        questionText: { en: 'The most common cause of childhood uveitis is:', es: 'La causa más común de uveítis infantil es:' },
        options: [
            { text: { en: 'Idiopathic', es: 'Idiopática' }, isCorrect: false },
            { text: { en: 'Juvenile idiopathic arthritis (JIA)', es: 'Artritis idiopática juvenil (AIJ)' }, isCorrect: true },
            { text: { en: 'Toxoplasmosis', es: 'Toxoplasmosis' }, isCorrect: false },
            { text: { en: 'Sarcoidosis', es: 'Sarcoidosis' }, isCorrect: false }
        ],
        explanation: { en: 'Juvenile idiopathic arthritis (JIA) is the most common systemic disease associated with uveitis in children. The uveitis is typically a chronic, asymptomatic, non-granulomatous anterior uveitis.', es: 'La artritis idiopática juvenil (AIJ) es la enfermedad sistémica más comúnmente asociada con la uveítis en niños. La uveítis es típicamente una uveítis anterior crónica, asintomática y no granulomatosa.' }
    }
],'5-8': [
    {
        id: 'c5s8q1',
        type: QuestionType.MultipleChoice,
        questionText: { en: 'Which law of ocular motility states that yoked muscles receive equal and simultaneous innervation?', es: '¿Qué ley de la motilidad ocular establece que los músculos yunta reciben una inervación igual y simultánea?' },
        options: [
            { text: { en: 'Sherrington\'s Law', es: 'Ley de Sherrington' }, isCorrect: false },
            { text: { en: 'Hering\'s Law', es: 'Ley de Hering' }, isCorrect: true },
            { text: { en: 'Snell\'s Law', es: 'Ley de Snell' }, isCorrect: false },
            { text: { en: 'Prentice\'s Rule', es: 'Regla de Prentice' }, isCorrect: false }
        ],
        explanation: { en: 'Hering\'s Law of Equal Innervation states that during conjugate eye movements, the yoked muscles (e.g., right lateral rectus and left medial rectus for right gaze) receive equal innervation.', es: 'La Ley de Hering de Igual Inervación establece que durante los movimientos oculares conjugados, los músculos yunta (p. ej., recto lateral derecho y recto medial izquierdo para la mirada a la derecha) reciben igual inervación.' }
    }
],'5-9': [
    {
        id: 'c5s9q1',
        type: QuestionType.MultipleChoice,
        questionText: { en: 'What is the most common type of childhood strabismus?', es: '¿Cuál es el tipo más común de estrabismo infantil?' },
        options: [
            { text: { en: 'Congenital exotropia', es: 'Exotropía congénita' }, isCorrect: false },
            { text: { en: 'Accommodative esotropia', es: 'Esotropía acomodativa' }, isCorrect: true },
            { text: { en: 'Duane syndrome', es: 'Síndrome de Duane' }, isCorrect: false },
            { text: { en: 'Fourth nerve palsy', es: 'Parálisis del cuarto par' }, isCorrect: false }
        ],
        explanation: { en: 'Accommodative esotropia, which is an inward turning of the eyes related to the focusing effort, is the most common form of strabismus in children, typically appearing between 2 and 3 years of age.', es: 'La esotropía acomodativa, que es una desviación hacia adentro de los ojos relacionada con el esfuerzo de enfoque, es la forma más común de estrabismo en niños, y generalmente aparece entre los 2 y 3 años de edad.' }
    }
],
  '6-1': [
      {
          id: 'c6s1q1',
          type: QuestionType.MultipleChoice,
          questionText: {
              en: 'Which bone does not form part of the medial orbital wall?',
              es: '¿Qué hueso no forma parte de la pared medial de la órbita?'
          },
          options: [
              { text: { en: 'Lacrimal', es: 'Lacrimal' }, isCorrect: false },
              { text: { en: 'Maxilla', es: 'Maxilar' }, isCorrect: false },
              { text: { en: 'Sphenoid', es: 'Esfenoides' }, isCorrect: false },
              { text: { en: 'Palatine', es: 'Palatino' }, isCorrect: true }
          ],
          explanation: {
              en: 'The palatine bone is part of the orbital floor. The medial wall is composed of the maxilla, lacrimal, ethmoid, and sphenoid bones. Mnemonic: My Little Eye Sits in the orbit.',
              es: 'El hueso palatino forma parte del suelo de la órbita. La pared medial está compuesta por los huesos maxilar, lacrimal, etmoides y esfenoides. Mnemotecnia: Mi Pequeño Ojo Se Sienta en la órbita.'
          }
      },
      // ... 49 more questions for subchapter 6-1
  ],
  '6-2': [
      {
          id: 'c6s2q1',
          type: QuestionType.TrueFalse,
          questionText: {
              en: 'Magnetic resonance imaging (MRI) is the preferred imaging modality for detecting acute subarachnoid hemorrhage.',
              es: 'La resonancia magnética (RM) es la modalidad de imagen preferida para detectar una hemorragia subaracnoidea aguda.'
          },
          options: [
              { text: { en: 'True', es: 'Verdadero' }, isCorrect: false },
              { text: { en: 'False', es: 'Falso' }, isCorrect: true }
          ],
          explanation: {
              en: 'Computed tomography (CT) is the preferred imaging modality to detect acute subarachnoid hemorrhage. MRI is not preferred for detecting acute hemorrhage but can clarify the evolution of intraparenchymal hemorrhage.',
              es: 'La tomografía computarizada (TC) es la modalidad de imagen preferida para detectar una hemorragia subaracnoidea aguda. La RM no es la preferida para detectar una hemorragia aguda, pero puede aclarar la evolución de una hemorragia intraparenquimatosa.'
          }
      },
      // ... 49 more questions for subchapter 6-2
  ],
  '6-3': [
      {
          id: 'c6s3q1',
          type: QuestionType.MultipleChoice,
          questionText: {
              en: 'Which condition is most commonly associated with bilateral proptosis in adults?',
              es: '¿Qué condición se asocia más comúnmente con proptosis bilateral en adultos?'
          },
          options: [
              { text: { en: 'Orbital pseudotumor', es: 'Pseudotumor orbitario' }, isCorrect: false },
              { text: { en: 'Thyroid eye disease', es: 'Enfermedad ocular tiroidea' }, isCorrect: true },
              { text: { en: 'Orbital cellulitis', es: 'Celulitis orbitaria' }, isCorrect: false },
              { text: { en: 'Cavernous hemangioma', es: 'Hemangioma cavernoso' }, isCorrect: false }
          ],
          explanation: {
              en: 'Thyroid eye disease (Graves\' ophthalmopathy) is the most common cause of both unilateral and bilateral proptosis in adults.',
              es: 'La enfermedad ocular tiroidea (oftalmopatía de Graves) es la causa más común de proptosis tanto unilateral como bilateral en adultos.'
          }
      },
      // ... 49 more questions for subchapter 6-3
  ],
  '6-4': [
    { id: 'c6s4q1', type: QuestionType.MultipleChoice, questionText: { en: 'Which is the most common malignancy of the eyelid?', es: '¿Cuál es el tumor maligno más común del párpado?'}, options: [ { text: { en: 'Squamous cell carcinoma', es: 'Carcinoma de células escamosas' }, isCorrect: false }, { text: { en: 'Basal cell carcinoma', es: 'Carcinoma de células basales' }, isCorrect: true }, { text: { en: 'Sebaceous gland carcinoma', es: 'Carcinoma de glándula sebácea' }, isCorrect: false }, { text: { en: 'Malignant melanoma', es: 'Melanoma maligno' }, isCorrect: false } ], explanation: { en: 'Basal cell carcinoma (BCC) is the most common malignancy of the eyelid, accounting for about 90% of all cases.', es: 'El carcinoma de células basales (CCB) es el tumor maligno más común del párpado, representando alrededor del 90% de todos los casos.'} }
  ],
  '6-5': [
    { id: 'c6s5q1', type: QuestionType.TrueFalse, questionText: { en: 'Congenital nasolacrimal duct obstruction is usually due to a membrane over the valve of Hasner.', es: 'La obstrucción congénita del conducto nasolagrimal generalmente se debe a una membrana sobre la válvula de Hasner.'}, options: [ { text: { en: 'True', es: 'Verdadero' }, isCorrect: true }, { text: { en: 'False', es: 'Falso' }, isCorrect: false } ], explanation: { en: 'Up to 5% of infants have obstruction of the nasolacrimal duct (NLD), usually as a result of a membrane covering the valve of Hasner. Most open spontaneously within 4-6 weeks of birth.', es: 'Hasta el 5% de los bebés tienen obstrucción del conducto nasolagrimal (CNL), generalmente como resultado de una membrana que cubre la válvula de Hasner. La mayoría se abren espontáneamente dentro de las 4-6 semanas de vida.'} }
  ],
  '6-6': [
    { id: 'c6s6q1', type: QuestionType.MultipleChoice, questionText: { en: 'For which procedure would you use a Fasanella-Servat clamp?', es: '¿Para qué procedimiento usarías una pinza de Fasanella-Servat?'}, options: [ { text: { en: 'Levator resection', es: 'Resección del elevador' }, isCorrect: false }, { text: { en: 'Frontalis sling', es: 'Suspensión frontal' }, isCorrect: false }, { text: { en: 'Tarsoconjunctival resection for ptosis repair', es: 'Resección tarsoconjuntival para reparación de ptosis' }, isCorrect: true }, { text: { en: 'Ectropion repair', es: 'Reparación de ectropion' }, isCorrect: false } ], explanation: { en: 'The Fasanella-Servat procedure is a tarsoconjunctival resection used to correct mild ptosis, and it utilizes a specific clamp for the procedure.', es: 'El procedimiento de Fasanella-Servat es una resección tarsoconjuntival que se utiliza para corregir la ptosis leve y utiliza una pinza específica para el procedimiento.'} }
  ],
  '6-7': [],
  '6-8': [],
'7-1': [
    {
        id: 'c7s1q1',
        type: QuestionType.MultipleChoice,
        questionText: { en: 'Which layer of the cornea does not regenerate after injury?', es: '¿Qué capa de la córnea no se regenera después de una lesión?' },
        options: [
            { text: { en: 'Epithelium', es: 'Epitelio' }, isCorrect: false },
            { text: { en: 'Bowman\'s layer', es: 'Capa de Bowman' }, isCorrect: true },
            { text: { en: 'Stroma', es: 'Estroma' }, isCorrect: false },
            { text: { en: 'Descemet\'s membrane', es: 'Membrana de Descemet' }, isCorrect: false }
        ],
        explanation: { en: 'Bowman\'s layer is an acellular layer that does not regenerate and forms a scar when injured. Descemet\'s membrane, however, can be regenerated by the endothelium.', es: 'La capa de Bowman es una capa acelular que no se regenera y forma una cicatriz cuando se lesiona. La membrana de Descemet, sin embargo, puede ser regenerada por el endotelio.' }
    }
],
'7-2': [
    {
        id: 'c7s2q1',
        type: QuestionType.TrueFalse,
        questionText: { en: 'A positive Seidel test indicates an active aqueous humor leak.', es: 'Una prueba de Seidel positiva indica una fuga activa de humor acuoso.' },
        options: [
            { text: { en: 'True', es: 'Verdadero' }, isCorrect: true },
            { text: { en: 'False', es: 'Falso' }, isCorrect: false }
        ],
        explanation: { en: 'The Seidel test uses concentrated fluorescein to detect a corneal or scleral perforation. A positive test shows dilution of the dye by the leaking aqueous, appearing as a dark stream within the green dye.', es: 'La prueba de Seidel utiliza fluoresceína concentrada para detectar una perforación corneal o escleral. Una prueba positiva muestra la dilución del colorante por el humor acuoso que se escapa, apareciendo como una corriente oscura dentro del colorante verde.' }
    }
],
'7-3': [
    {
        id: 'c7s3q1',
        type: QuestionType.MultipleChoice,
        questionText: { en: 'Peters anomaly is characterized by a central corneal opacity and:', es: 'La anomalía de Peters se caracteriza por una opacidad corneal central y:' },
        options: [
            { text: { en: 'Aniridia', es: 'Aniridia' }, isCorrect: false },
            { text: { en: 'Ectopia lentis', es: 'Ectopia lentis' }, isCorrect: false },
            { text: { en: 'Iridocorneal adhesions', es: 'Adherencias iridocorneales' }, isCorrect: true },
            { text: { en: 'Megalocornea', es: 'Megalocórnea' }, isCorrect: false }
        ],
        explanation: { en: 'Peters anomaly is a congenital disorder of the anterior segment, classically presenting with a central corneal opacity (leukoma) due to an absence of Descemet\'s membrane and endothelium, often with adhesions from the iris to the cornea.', es: 'La anomalía de Peters es un trastorno congénito del segmento anterior, que se presenta clásicamente con una opacidad corneal central (leucoma) debido a la ausencia de la membrana de Descemet y del endotelio, a menudo con adherencias del iris a la córnea.' }
    }
],
'7-4': [
    {
        id: 'c7s4q1',
        type: QuestionType.MultipleChoice,
        questionText: { en: 'Which corneal dystrophy is autosomal recessive and stains with Alcian blue?', es: '¿Qué distrofia corneal es autosómica recesiva y se tiñe con azul alcián?' },
        options: [
            { text: { en: 'Granular dystrophy', es: 'Distrofia granular' }, isCorrect: false },
            { text: { en: 'Lattice dystrophy', es: 'Distrofia reticular' }, isCorrect: false },
            { text: { en: 'Macular dystrophy', es: 'Distrofia macular' }, isCorrect: true },
            { text: { en: 'Fuchs endothelial dystrophy', es: 'Distrofia endotelial de Fuchs' }, isCorrect: false }
        ],
        explanation: { en: 'Macular dystrophy is the only autosomal recessive stromal dystrophy. It involves the deposition of glycosaminoglycans (mucopolysaccharides), which stain with Alcian blue.', es: 'La distrofia macular es la única distrofia estromal autosómica recesiva. Implica la deposición de glicosaminoglicanos (mucopolisacáridos), que se tiñen con azul alcián.' }
    }
],
'7-5': [
    {
        id: 'c7s5q1',
        type: QuestionType.MultipleChoice,
        questionText: { en: 'Band keratopathy is the deposition of which substance in Bowman\'s layer?', es: 'La queratopatía en banda es la deposición de ¿qué sustancia en la capa de Bowman?' },
        options: [
            { text: { en: 'Lipid', es: 'Lípidos' }, isCorrect: false },
            { text: { en: 'Calcium', es: 'Calcio' }, isCorrect: true },
            { text: { en: 'Amyloid', es: 'Amiloide' }, isCorrect: false },
            { text: { en: 'Iron', es: 'Hierro' }, isCorrect: false }
        ],
        explanation: { en: 'Band keratopathy is the deposition of calcium salts in the subepithelial space and Bowman\'s layer. It is associated with chronic ocular inflammation, systemic hypercalcemia, and silicone oil.', es: 'La queratopatía en banda es la deposición de sales de calcio en el espacio subepitelial y la capa de Bowman. Se asocia con inflamación ocular crónica, hipercalcemia sistémica y aceite de silicona.' }
    }
],
'7-6': [
    {
        id: 'c7s6q1',
        type: QuestionType.MultipleChoice,
        questionText: { en: 'Severe ocular pain out of proportion to clinical signs and radial keratoneuritis are classic findings in which type of keratitis?', es: 'El dolor ocular severo desproporcionado a los signos clínicos y la queratoneuritis radial son hallazgos clásicos en ¿qué tipo de queratitis?' },
        options: [
            { text: { en: 'Fungal', es: 'Fúngica' }, isCorrect: false },
            { text: { en: 'Herpes simplex', es: 'Herpes simple' }, isCorrect: false },
            { text: { en: 'Pseudomonas', es: 'Pseudomonas' }, isCorrect: false },
            { text: { en: 'Acanthamoeba', es: 'Acanthamoeba' }, isCorrect: true }
        ],
        explanation: { en: 'Acanthamoeba keratitis, often seen in contact lens wearers with poor hygiene or exposure to contaminated water, is classically associated with pain that is much more severe than the visible signs and inflammation of the corneal nerves (radial keratoneuritis).', es: 'La queratitis por Acanthamoeba, observada a menudo en usuarios de lentes de contacto con mala higiene o exposición a agua contaminada, se asocia clásicamente con un dolor mucho más severo que los signos visibles y con la inflamación de los nervios corneales (queratoneuritis radial).' }
    }
],
'7-7': [
    {
        id: 'c7s7q1',
        type: QuestionType.MultipleChoice,
        questionText: { en: 'Mooren\'s ulcer is a form of:', es: 'La úlcera de Mooren es una forma de:' },
        options: [
            { text: { en: 'Infectious keratitis', es: 'Queratitis infecciosa' }, isCorrect: false },
            { text: { en: 'Peripheral ulcerative keratitis (PUK)', es: 'Queratitis ulcerativa periférica (QUP)' }, isCorrect: true },
            { text: { en: 'Neurotrophic keratopathy', es: 'Queratopatía neurotrófica' }, isCorrect: false },
            { text: { en: 'Corneal dystrophy', es: 'Distrofia corneal' }, isCorrect: false }
        ],
        explanation: { en: 'Mooren\'s ulcer is an idiopathic, painful, progressive peripheral ulcerative keratitis (PUK). It is a diagnosis of exclusion after ruling out systemic autoimmune diseases and infectious causes.', es: 'La úlcera de Mooren es una queratitis ulcerativa periférica (QUP) idiopática, dolorosa y progresiva. Es un diagnóstico de exclusión después de descartar enfermedades autoinmunes sistémicas y causas infecciosas.' }
    }
],
'7-8': [
    {
        id: 'c7s8q1',
        type: QuestionType.MultipleChoice,
        questionText: { en: 'A Fleischer ring, seen in keratoconus, is an epithelial deposit of which substance?', es: 'Un anillo de Fleischer, visto en el queratocono, es un depósito epitelial de ¿qué sustancia?' },
        options: [
            { text: { en: 'Copper', es: 'Cobre' }, isCorrect: false },
            { text: { en: 'Melanin', es: 'Melanina' }, isCorrect: false },
            { text: { en: 'Iron', es: 'Hierro' }, isCorrect: true },
            { text: { en: 'Calcium', es: 'Calcio' }, isCorrect: false }
        ],
        explanation: { en: 'A Fleischer ring is an iron (hemosiderin) line at the base of the cone in keratoconus. It is best seen with a cobalt blue filter.', es: 'Un anillo de Fleischer es una línea de hierro (hemosiderina) en la base del cono en el queratocono. Se ve mejor con un filtro azul cobalto.' }
    }
],
'7-9': [
    {
        id: 'c7s9q1',
        type: QuestionType.MultipleChoice,
        questionText: { en: 'What is the most critical first step in managing an ocular chemical burn?', es: '¿Cuál es el primer paso más crítico en el manejo de una quemadura química ocular?' },
        options: [
            { text: { en: 'Checking visual acuity', es: 'Verificar la agudeza visual' }, isCorrect: false },
            { text: { en: 'Measuring intraocular pressure', es: 'Medir la presión intraocular' }, isCorrect: false },
            { text: { en: 'Applying a topical antibiotic', es: 'Aplicar un antibiótico tópico' }, isCorrect: false },
            { text: { en: 'Immediate and copious irrigation', es: 'Irrigación inmediata y copiosa' }, isCorrect: true }
        ],
        explanation: { en: 'In any chemical injury to the eye, immediate, copious irrigation with saline, Ringer\'s lactate, or even tap water is the most important step to dilute and remove the offending agent. Treatment should not be delayed to check vision or pressure.', es: 'En cualquier lesión química en el ojo, la irrigación inmediata y copiosa con solución salina, lactato de Ringer o incluso agua del grifo es el paso más importante para diluir y eliminar el agente agresor. El tratamiento no debe retrasarse para verificar la visión o la presión.' }
    }
],
'7-10': [
    {
        id: 'c7s10q1',
        type: QuestionType.MultipleChoice,
        questionText: { en: 'In Descemet\'s Stripping Endothelial Keratoplasty (DSEK), which layers of the cornea are replaced?', es: 'En la Queratoplastia Endotelial con Desprendimiento de la Membrana de Descemet (DSEK), ¿qué capas de la córnea se reemplazan?' },
        options: [
            { text: { en: 'The full thickness of the cornea', es: 'El espesor total de la córnea' }, isCorrect: false },
            { text: { en: 'Epithelium and Bowman\'s layer', es: 'Epitelio y capa de Bowman' }, isCorrect: false },
            { text: { en: 'The anterior stroma', es: 'El estroma anterior' }, isCorrect: false },
            { text: { en: 'Endothelium, Descemet\'s membrane, and posterior stroma', es: 'Endotelio, membrana de Descemet y estroma posterior' }, isCorrect: true }
        ],
        explanation: { en: 'DSEK is a type of posterior lamellar keratoplasty where the patient\'s diseased Descemet\'s membrane and endothelium are stripped and replaced with a donor graft consisting of posterior stroma, Descemet\'s membrane, and endothelium.', es: 'La DSEK es un tipo de queratoplastia lamelar posterior en la que se retiran la membrana de Descemet y el endotelio enfermos del paciente y se reemplazan con un injerto de donante que consta de estroma posterior, membrana de Descemet y endotelio.' }
    }
],
'7-11': [
    {
        id: 'c7s11q1',
        type: QuestionType.MultipleChoice,
        questionText: { en: 'Symblepharon, a fibrous adhesion between the palpebral and bulbar conjunctiva, is a characteristic finding in:', es: 'El simbléfaron, una adherencia fibrosa entre la conjuntiva palpebral y bulbar, es un hallazgo característico en:' },
        options: [
            { text: { en: 'Allergic conjunctivitis', es: 'Conjuntivitis alérgica' }, isCorrect: false },
            { text: { en: 'Ocular cicatricial pemphigoid', es: 'Penfigoide cicatricial ocular' }, isCorrect: true },
            { text: { en: 'Bacterial conjunctivitis', es: 'Conjuntivitis bacteriana' }, isCorrect: false },
            { text: { en: 'Superior limbic keratoconjunctivitis', es: 'Queratoconjuntivitis límbica superior' }, isCorrect: false }
        ],
        explanation: { en: 'Ocular cicatricial pemphigoid is a chronic autoimmune blistering disease that causes progressive conjunctival scarring, leading to symblepharon, ankyloblepharon (fusion of the eyelids), and severe dry eye.', es: 'El penfigoide cicatricial ocular es una enfermedad ampollosa autoinmune crónica que causa cicatrización conjuntival progresiva, lo que lleva a simbléfaron, anquilobléfaron (fusión de los párpados) y ojo seco severo.' }
    }
],
'7-12': [
    {
        id: 'c7s12q1',
        type: QuestionType.TrueFalse,
        questionText: { en: 'Scleritis is strongly associated with underlying systemic autoimmune diseases.', es: 'La escleritis está fuertemente asociada con enfermedades autoinmunes sistémicas subyacentes.' },
        options: [
            { text: { en: 'True', es: 'Verdadero' }, isCorrect: true },
            { text: { en: 'False', es: 'Falso' }, isCorrect: false }
        ],
        explanation: { en: 'Up to 50% of patients with scleritis, particularly the necrotizing type, have an associated systemic autoimmune disease, most commonly rheumatoid arthritis, granulomatosis with polyangiitis (Wegener\'s), or relapsing polychondritis.', es: 'Hasta el 50% de los pacientes con escleritis, particularmente del tipo necrotizante, tienen una enfermedad autoinmune sistémica asociada, más comúnmente artritis reumatoide, granulomatosis con poliangeítis (Wegener) o policondritis recidivante.' }
    }
],
'7-13': [],
'7-14': [],
'8-1': [
    {
        id: 'c8s1q1',
        type: QuestionType.MultipleChoice,
        questionText: { en: 'The uveal tract is composed of the iris, ciliary body, and which other structure?', es: 'El tracto uveal está compuesto por el iris, el cuerpo ciliar y ¿qué otra estructura?' },
        options: [
            { text: { en: 'Sclera', es: 'Esclera' }, isCorrect: false },
            { text: { en: 'Choroid', es: 'Coroides' }, isCorrect: true },
            { text: { en: 'Retina', es: 'Retina' }, isCorrect: false },
            { text: { en: 'Vitreous', es: 'Vítreo' }, isCorrect: false }
        ],
        explanation: { en: 'The uveal tract, or uvea, is the middle, vascular layer of the eye and consists of the iris, ciliary body, and choroid.', es: 'El tracto uveal, o úvea, es la capa media y vascular del ojo y consta del iris, el cuerpo ciliar y la coroides.' }
    }
],
'8-2': [
    {
        id: 'c8s2q1',
        type: QuestionType.MultipleChoice,
        questionText: { en: '"Mutton-fat" keratic precipitates (KPs) are characteristic of which type of inflammation?', es: 'Los precipitados queráticos "en grasa de carnero" (KPs) son característicos de ¿qué tipo de inflamación?' },
        options: [
            { text: { en: 'Non-granulomatous', es: 'No granulomatosa' }, isCorrect: false },
            { text: { en: 'Allergic', es: 'Alérgica' }, isCorrect: false },
            { text: { en: 'Granulomatous', es: 'Granulomatosa' }, isCorrect: true },
            { text: { en: 'Toxic', es: 'Tóxica' }, isCorrect: false }
        ],
        explanation: { en: 'Large, greasy-appearing "mutton-fat" KPs are composed of macrophages and epithelioid cells and are a hallmark of granulomatous uveitis, such as in sarcoidosis or tuberculosis.', es: 'Los KPs grandes y de apariencia grasosa "en grasa de carnero" están compuestos por macrófagos y células epitelioides y son un sello distintivo de la uveítis granulomatosa, como en la sarcoidosis o la tuberculosis.' }
    }
],
'8-3': [
    {
        id: 'c8s3q1',
        type: QuestionType.TrueFalse,
        questionText: { en: 'The most common form of uveitis is acute anterior uveitis.', es: 'La forma más común de uveítis es la uveítis anterior aguda.' },
        options: [
            { text: { en: 'True', es: 'Verdadero' }, isCorrect: true },
            { text: { en: 'False', es: 'Falso' }, isCorrect: false }
        ],
        explanation: { en: 'Anterior uveitis is the most frequent type of intraocular inflammation encountered in clinical practice, accounting for the majority of cases.', es: 'La uveítis anterior es el tipo más frecuente de inflamación intraocular que se encuentra en la práctica clínica, representando la mayoría de los casos.' }
    }
],
'8-4': [
    {
        id: 'c8s4q1',
        type: QuestionType.MultipleChoice,
        questionText: { en: 'Juvenile Idiopathic Arthritis (JIA) is associated with what type of uveitis?', es: 'La Artritis Idiopática Juvenil (AIJ) se asocia con ¿qué tipo de uveítis?' },
        options: [
            { text: { en: 'Acute, symptomatic, granulomatous posterior uveitis', es: 'Uveítis posterior granulomatosa, aguda y sintomática' }, isCorrect: false },
            { text: { en: 'Chronic, asymptomatic, non-granulomatous anterior uveitis', es: 'Uveítis anterior no granulomatosa, crónica y asintomática' }, isCorrect: true },
            { text: { en: 'Unilateral intermediate uveitis with snowbanking', es: 'Uveítis intermedia unilateral con bancos de nieve' }, isCorrect: false },
            { text: { en: 'Bilateral panuveitis with retinal vasculitis', es: 'Panuveítis bilateral con vasculitis retiniana' }, isCorrect: false }
        ],
        explanation: { en: 'The uveitis associated with JIA is classically a chronic, non-granulomatous anterior uveitis that is often asymptomatic ("white eye"), making screening crucial to prevent long-term complications like band keratopathy, cataract, and glaucoma.', es: 'La uveítis asociada con la AIJ es clásicamente una uveítis anterior no granulomatosa y crónica que a menudo es asintomática ("ojo blanco"), lo que hace que el cribado sea crucial para prevenir complicaciones a largo plazo como la queratopatía en banda, cataratas y glaucoma.' }
    }
],
'8-5': [
    {
        id: 'c8s5q1',
        type: QuestionType.MultipleChoice,
        questionText: { en: 'The most common cause of vision loss in intermediate uveitis is:', es: 'La causa más común de pérdida de visión en la uveítis intermedia es:' },
        options: [
            { text: { en: 'Cataract formation', es: 'Formación de cataratas' }, isCorrect: false },
            { text: { en: 'Glaucoma', es: 'Glaucoma' }, isCorrect: false },
            { text: { en: 'Retinal detachment', es: 'Desprendimiento de retina' }, isCorrect: false },
            { text: { en: 'Cystoid macular edema (CME)', es: 'Edema macular cistoideo (EMC)' }, isCorrect: true }
        ],
        explanation: { en: 'Cystoid macular edema is the leading cause of visual morbidity in patients with intermediate uveitis (pars planitis), resulting from the breakdown of the blood-retinal barrier due to chronic inflammation.', es: 'El edema macular cistoideo es la principal causa de morbilidad visual en pacientes con uveítis intermedia (pars planitis), como resultado de la ruptura de la barrera hematorretiniana debido a la inflamación crónica.' }
    }
],
'8-6': [
    {
        id: 'c8s6q1',
        type: QuestionType.MultipleChoice,
        questionText: { en: 'Sympathetic ophthalmia is a rare bilateral granulomatous panuveitis that occurs after:', es: 'La oftalmía simpática es una rara panuveítis granulomatosa bilateral que ocurre después de:' },
        options: [
            { text: { en: 'Systemic infection', es: 'Infección sistémica' }, isCorrect: false },
            { text: { en: 'Penetrating trauma or intraocular surgery to one eye', es: 'Trauma penetrante o cirugía intraocular en un ojo' }, isCorrect: true },
            { text: { en: 'A severe allergic reaction', es: 'Una reacción alérgica severa' }, isCorrect: false },
            { text: { en: 'Exposure to high levels of UV light', es: 'Exposición a altos niveles de luz UV' }, isCorrect: false }
        ],
        explanation: { en: 'Sympathetic ophthalmia is believed to be an autoimmune response to previously sequestered ocular antigens that are exposed following penetrating trauma or surgery in the inciting eye, leading to inflammation in both the injured and the fellow (sympathizing) eye.', es: 'Se cree que la oftalmía simpática es una respuesta autoinmune a antígenos oculares previamente secuestrados que se exponen después de un trauma penetrante o cirugía en el ojo incitante, lo que lleva a la inflamación tanto en el ojo lesionado como en el ojo contralateral (simpatizante).' }
    }
],
'8-7': [
    {
        id: 'c8s7q1',
        type: QuestionType.MultipleChoice,
        questionText: { en: 'A patient with AIDS and a CD4 count below 50 cells/µL presents with hemorrhagic retinitis often described as "pizza pie" or "ketchup and cheese" fundus. What is the most likely diagnosis?', es: 'Un paciente con SIDA y un recuento de CD4 por debajo de 50 células/µL presenta una retinitis hemorrágica a menudo descrita como un fondo de ojo de "pizza" o "ketchup y queso". ¿Cuál es el diagnóstico más probable?' },
        options: [
            { text: { en: 'Acute Retinal Necrosis (ARN)', es: 'Necrosis Retiniana Aguda (NRA)' }, isCorrect: false },
            { text: { en: 'Toxoplasmosis', es: 'Toxoplasmosis' }, isCorrect: false },
            { text: { en: 'Syphilitic retinitis', es: 'Retinitis sifilítica' }, isCorrect: false },
            { text: { en: 'Cytomegalovirus (CMV) retinitis', es: 'Retinitis por Citomegalovirus (CMV)' }, isCorrect: true }
        ],
        explanation: { en: 'CMV retinitis is the most common opportunistic ocular infection in AIDS patients, typically occurring when the CD4 count is very low. The classic appearance is a fulminant, necrotizing, hemorrhagic retinitis.', es: 'La retinitis por CMV es la infección ocular oportunista más común en pacientes con SIDA, y ocurre típicamente cuando el recuento de CD4 es muy bajo. La apariencia clásica es una retinitis fulminante, necrotizante y hemorrágica.' }
    }
],
'8-8': [
    {
        id: 'c8s8q1',
        type: QuestionType.MultipleChoice,
        questionText: { en: 'A "salt and pepper" fundus is a classic finding in which infectious disease?', es: 'Un fondo de ojo "en sal y pimienta" es un hallazgo clásico en ¿qué enfermedad infecciosa?' },
        options: [
            { text: { en: 'Tuberculosis', es: 'Tuberculosis' }, isCorrect: false },
            { text: { en: 'Congenital syphilis', es: 'Sífilis congénita' }, isCorrect: true },
            { text: { en: 'Lyme disease', es: 'Enfermedad de Lyme' }, isCorrect: false },
            { text: { en: 'Candidiasis', es: 'Candidiasis' }, isCorrect: false }
        ],
        explanation: { en: 'A salt and pepper fundus, representing focal hyperpigmentation and hypopigmentation of the RPE, is a sign of healed, disseminated chorioretinitis and is characteristic of congenital syphilis. It can also be seen in other conditions like rubella.', es: 'Un fondo de ojo en sal y pimienta, que representa hiperpigmentación e hipopigmentación focal del EPR, es un signo de coriorretinitis diseminada y curada, y es característico de la sífilis congénita. También puede observarse en otras condiciones como la rubéola.' }
    }
],
'8-9': [
    {
        id: 'c8s9q1',
        type: QuestionType.MultipleChoice,
        questionText: { en: 'What is the most common cause of posterior uveitis worldwide?', es: '¿Cuál es la causa más común de uveítis posterior en todo el mundo?' },
        options: [
            { text: { en: 'Tuberculosis', es: 'Tuberculosis' }, isCorrect: false },
            { text: { en: 'Sarcoidosis', es: 'Sarcoidosis' }, isCorrect: false },
            { text: { en: 'Toxoplasmosis', es: 'Toxoplasmosis' }, isCorrect: true },
            { text: { en: 'CMV retinitis', es: 'Retinitis por CMV' }, isCorrect: false }
        ],
        explanation: { en: 'Toxoplasmosis, caused by the protozoan Toxoplasma gondii, is the most common cause of infectious retinitis and posterior uveitis in immunocompetent individuals across the globe.', es: 'La toxoplasmosis, causada por el protozoo Toxoplasma gondii, es la causa más común de retinitis infecciosa y uveítis posterior en individuos inmunocompetentes en todo el mundo.' }
    }
],
'8-10': [
    {
        id: 'c8s10q1',
        type: QuestionType.MultipleChoice,
        questionText: { en: 'Birdshot chorioretinopathy is strongly associated with which HLA type?', es: 'La coriorretinopatía en perdigonada está fuertemente asociada con ¿qué tipo de HLA?' },
        options: [
            { text: { en: 'HLA-B27', es: 'HLA-B27' }, isCorrect: false },
            { text: { en: 'HLA-A29', es: 'HLA-A29' }, isCorrect: true },
            { text: { en: 'HLA-B51', es: 'HLA-B51' }, isCorrect: false },
            { text: { en: 'HLA-DR4', es: 'HLA-DR4' }, isCorrect: false }
        ],
        explanation: { en: 'Birdshot chorioretinopathy has one of the strongest known HLA associations, with over 95% of patients testing positive for HLA-A29.', es: 'La coriorretinopatía en perdigonada tiene una de las asociaciones HLA más fuertes conocidas, con más del 95% de los pacientes dando positivo para HLA-A29.' }
    }
],
'8-11': [
    {
        id: 'c8s11q1',
        type: QuestionType.MultipleChoice,
        questionText: { en: 'What is the most common intraocular malignancy to masquerade as chronic uveitis in an elderly patient?', es: '¿Cuál es la neoplasia intraocular más común que se enmascara como uveítis crónica en un paciente de edad avanzada?' },
        options: [
            { text: { en: 'Choroidal melanoma', es: 'Melanoma coroideo' }, isCorrect: false },
            { text: { en: 'Retinoblastoma', es: 'Retinoblastoma' }, isCorrect: false },
            { text: { en: 'Primary vitreoretinal lymphoma', es: 'Linfoma vitreorretiniano primario' }, isCorrect: true },
            { text: { en: 'Metastatic carcinoma', es: 'Carcinoma metastásico' }, isCorrect: false }
        ],
        explanation: { en: 'Primary vitreoretinal lymphoma (formerly known as intraocular lymphoma) is a great masquerader and should be suspected in any patient over 50 with chronic vitritis that does not respond well to steroid treatment.', es: 'El linfoma vitreorretiniano primario (anteriormente conocido como linfoma intraocular) es un gran simulador y debe sospecharse en cualquier paciente mayor de 50 años con vitritis crónica que no responde bien al tratamiento con esteroides.' }
    }
],
'8-12': [
    {
        id: 'c8s12q1',
        type: QuestionType.MultipleChoice,
        questionText: { en: 'What is the first-line treatment for most cases of non-infectious anterior uveitis?', es: '¿Cuál es el tratamiento de primera línea para la mayoría de los casos de uveítis anterior no infecciosa?' },
        options: [
            { text: { en: 'Topical NSAIDs', es: 'AINEs tópicos' }, isCorrect: false },
            { text: { en: 'Systemic antibiotics', es: 'Antibióticos sistémicos' }, isCorrect: false },
            { text: { en: 'Topical corticosteroids', es: 'Corticoesteroides tópicos' }, isCorrect: true },
            { text: { en: 'Oral immunomodulators', es: 'Inmunomoduladores orales' }, isCorrect: false }
        ],
        explanation: { en: 'Topical corticosteroids are the mainstay of therapy for non-infectious anterior uveitis. They are effective at reducing inflammation and are typically paired with a cycloplegic agent to prevent posterior synechiae and reduce pain.', es: 'Los corticoesteroides tópicos son el pilar de la terapia para la uveítis anterior no infecciosa. Son eficaces para reducir la inflamación y generalmente se combinan con un agente ciclopléjico para prevenir las sinequias posteriores y reducir el dolor.' }
    }
],
'8-13': [],
'8-14': [],
'9-1': [
    {
        id: 'c9s1q1',
        type: QuestionType.MultipleChoice,
        questionText: { en: 'Aqueous humor is produced by which structure?', es: '¿Qué estructura produce el humor acuoso?' },
        options: [
            { text: { en: 'Trabecular meshwork', es: 'Malla trabecular' }, isCorrect: false },
            { text: { en: 'Ciliary body', es: 'Cuerpo ciliar' }, isCorrect: true },
            { text: { en: 'Iris root', es: 'Raíz del iris' }, isCorrect: false },
            { text: { en: 'Schlemm\'s canal', es: 'Canal de Schlemm' }, isCorrect: false }
        ],
        explanation: { en: 'Aqueous humor is actively secreted by the nonpigmented epithelium of the ciliary body processes.', es: 'El humor acuoso es secretado activamente por el epitelio no pigmentado de los procesos del cuerpo ciliar.' }
    }
],
'9-2': [
    {
        id: 'c9s2q1',
        type: QuestionType.MultipleChoice,
        questionText: { en: 'Which gonioscopy lens requires a coupling solution and allows for dynamic (indentation) gonioscopy?', es: '¿Qué lente de gonioscopia requiere una solución de acoplamiento y permite la gonioscopia dinámica (de indentación)?' },
        options: [
            { text: { en: 'Goldmann 3-mirror lens', es: 'Lente de 3 espejos de Goldmann' }, isCorrect: false },
            { text: { en: 'Zeiss 4-mirror goniolens', es: 'Goniolente de 4 espejos de Zeiss' }, isCorrect: true },
            { text: { en: 'Koeppe lens', es: 'Lente de Koeppe' }, isCorrect: false },
            { text: { en: 'Posner lens', es: 'Lente de Posner' }, isCorrect: false }
        ],
        explanation: { en: 'The Zeiss-style 4-mirror goniolens has a small contact area that allows for indentation of the cornea, which can help differentiate appositional from synechial angle closure. Goldmann-style lenses have a larger contact area and cannot be used for indentation.', es: 'El goniolente de 4 espejos estilo Zeiss tiene un área de contacto pequeña que permite la indentación de la córnea, lo que puede ayudar a diferenciar el cierre angular aposicional del sinequial. Las lentes estilo Goldmann tienen un área de contacto más grande y no se pueden usar para la indentación.' }
    }
],
'9-3': [
    {
        id: 'c9s3q1',
        type: QuestionType.TrueFalse,
        questionText: { en: 'The "ISNT" rule describes the typical arrangement of neuroretinal rim thickness in a healthy eye, with the Inferior rim being thickest.', es: 'La regla "ISNT" describe la disposición típica del grosor del anillo neurorretiniano en un ojo sano, siendo el anillo inferior el más grueso.' },
        options: [
            { text: { en: 'True', es: 'Verdadero' }, isCorrect: true },
            { text: { en: 'False', es: 'Falso' }, isCorrect: false }
        ],
        explanation: { en: 'The ISNT rule states that in normal eyes, the neuroretinal rim is thickest Inferiorly, followed by Superior, Nasal, and finally Temporal (I > S > N > T). Violation of this rule can be a sign of glaucomatous damage.', es: 'La regla ISNT establece que en ojos normales, el anillo neurorretiniano es más grueso en la parte inferior, seguido de la superior, la nasal y finalmente la temporal (I > S > N > T). La violación de esta regla puede ser un signo de daño glaucomatoso.' }
    }
],
'9-4': [
    {
        id: 'c9s4q1',
        type: QuestionType.MultipleChoice,
        questionText: { en: 'A nasal step is a classic early visual field defect in glaucoma. Which nerve fiber bundle is damaged to produce this defect?', es: 'Un escalón nasal es un defecto clásico temprano del campo visual en el glaucoma. ¿Qué haz de fibras nerviosas se daña para producir este defecto?' },
        options: [
            { text: { en: 'Papillomacular bundle', es: 'Haz papilomacular' }, isCorrect: false },
            { text: { en: 'Nasal radial fibers', es: 'Fibras radiales nasales' }, isCorrect: false },
            { text: { en: 'Arcuate fibers', es: 'Fibras arcuatas' }, isCorrect: true },
            { text: { en: 'Horizontal raphe', es: 'Rafe horizontal' }, isCorrect: false }
        ],
        explanation: { en: 'Damage to the arcuate nerve fiber bundles, which arch over the papillomacular bundle from the temporal retina, causes defects that respect the horizontal meridian, such as a nasal step or an arcuate scotoma.', es: 'El daño a los haces de fibras nerviosas arcuatas, que se arquean sobre el haz papilomacular desde la retina temporal, causa defectos que respetan el meridiano horizontal, como un escalón nasal o un escotoma arcuato.' }
    }
],
'9-5': [
    {
        id: 'c9s5q1',
        type: QuestionType.MultipleChoice,
        questionText: { en: 'What is the most significant risk factor for the development and progression of primary open-angle glaucoma (POAG)?', es: '¿Cuál es el factor de riesgo más significativo para el desarrollo y la progresión del glaucoma primario de ángulo abierto (GPAA)?' },
        options: [
            { text: { en: 'Myopia', es: 'Miopía' }, isCorrect: false },
            { text: { en: 'Family history', es: 'Historia familiar' }, isCorrect: false },
            { text: { en: 'Elevated intraocular pressure (IOP)', es: 'Presión intraocular (PIO) elevada' }, isCorrect: true },
            { text: { en: 'Thin central corneal thickness (CCT)', es: 'Grosor corneal central (GCC) delgado' }, isCorrect: false }
        ],
        explanation: { en: 'While all listed are risk factors, elevated IOP is the most important and currently the only modifiable risk factor for POAG.', es: 'Si bien todos los mencionados son factores de riesgo, la PIO elevada es el más importante y actualmente el único factor de riesgo modificable para el GPAA.' }
    }
],
'9-6': [
    {
        id: 'c9s6q1',
        type: QuestionType.TrueFalse,
        questionText: { en: 'Drance hemorrhages (optic disc hemorrhages) are more commonly seen in normal-tension glaucoma than in high-pressure POAG.', es: 'Las hemorragias de Drance (hemorragias del disco óptico) se observan con más frecuencia en el glaucoma de tensión normal que en el GPAA de alta presión.' },
        options: [
            { text: { en: 'True', es: 'Verdadero' }, isCorrect: true },
            { text: { en: 'False', es: 'Falso' }, isCorrect: false }
        ],
        explanation: { en: 'Drance hemorrhages, which are splinter-shaped hemorrhages at the optic disc margin, are a significant risk factor for glaucomatous progression and are found more frequently in patients with normal-tension glaucoma.', es: 'Las hemorragias de Drance, que son hemorragias en forma de astilla en el margen del disco óptico, son un factor de riesgo significativo para la progresión del glaucoma y se encuentran con mayor frecuencia en pacientes con glaucoma de tensión normal.' }
    }
],
'9-7': [
    {
        id: 'c9s7q1',
        type: QuestionType.MultipleChoice,
        questionText: { en: 'According to the Ocular Hypertension Treatment Study (OHTS), which factor is NOT a significant predictor for progression to glaucoma?', es: 'Según el Estudio de Tratamiento de la Hipertensión Ocular (OHTS), ¿qué factor NO es un predictor significativo de la progresión a glaucoma?' },
        options: [
            { text: { en: 'Higher IOP', es: 'PIO más alta' }, isCorrect: false },
            { text: { en: 'Larger vertical cup-to-disc ratio', es: 'Mayor relación copa/disco vertical' }, isCorrect: false },
            { text: { en: 'Thinner central corneal thickness', es: 'Grosor corneal central más delgado' }, isCorrect: false },
            { text: { en: 'Presence of myopia', es: 'Presencia de miopía' }, isCorrect: true }
        ],
        explanation: { en: 'The OHTS identified age, IOP, CCT, vertical C/D ratio, and pattern standard deviation (PSD) on visual field testing as the key risk factors. Myopia was not found to be a significant independent predictor in this study.', es: 'El OHTS identificó la edad, la PIO, el GCC, la relación C/D vertical y la desviación estándar del patrón (PSD) en las pruebas de campo visual como los factores de riesgo clave. No se encontró que la miopía fuera un predictor independiente significativo en este estudio.' }
    }
],
'9-8': [
    {
        id: 'c9s8q1',
        type: QuestionType.MultipleChoice,
        questionText: { en: 'What is the definitive treatment for primary angle-closure glaucoma?', es: '¿Cuál es el tratamiento definitivo para el glaucoma primario de ángulo cerrado?' },
        options: [
            { text: { en: 'Topical prostaglandin analogs', es: 'Análogos de prostaglandinas tópicos' }, isCorrect: false },
            { text: { en: 'Trabeculectomy', es: 'Trabeculectomía' }, isCorrect: false },
            { text: { en: 'Laser peripheral iridotomy (LPI)', es: 'Iridotomía periférica con láser (LPI)' }, isCorrect: true },
            { text: { en: 'Oral acetazolamide', es: 'Acetazolamida oral' }, isCorrect: false }
        ],
        explanation: { en: 'LPI is the definitive treatment for pupillary block, the most common mechanism of primary angle closure. It creates a new pathway for aqueous to flow from the posterior to the anterior chamber, relieving the pressure gradient that causes iris bombe.', es: 'La LPI es el tratamiento definitivo para el bloqueo pupilar, el mecanismo más común del cierre angular primario. Crea una nueva vía para que el humor acuoso fluya desde la cámara posterior a la anterior, aliviando el gradiente de presión que causa el iris bombé.' }
    }
],
'9-9': [
    {
        id: 'c9s9q1',
        type: QuestionType.MultipleChoice,
        questionText: { en: 'Pseudoexfoliation syndrome is characterized by the deposition of a fibrillar material. What is a common clinical sign?', es: 'El síndrome de pseudoexfoliación se caracteriza por la deposición de un material fibrilar. ¿Cuál es un signo clínico común?' },
        options: [
            { text: { en: 'Krukenberg spindle', es: 'Huso de Krukenberg' }, isCorrect: false },
            { text: { en: 'Iris heterochromia', es: 'Heterocromía del iris' }, isCorrect: false },
            { text: { en: 'A "moth-eaten" appearance of the pupillary ruff', es: 'Apariencia "apolillada" del reborde pupilar' }, isCorrect: true },
            { text: { en: 'Posterior embryotoxon', es: 'Embriotoxon posterior' }, isCorrect: false }
        ],
        explanation: { en: 'In pseudoexfoliation syndrome, the fibrillar material can cause transillumination defects at the pupillary margin, giving it a moth-eaten appearance. Other signs include a bulls-eye pattern on the anterior lens capsule and Sampaolesi line on gonioscopy.', es: 'En el síndrome de pseudoexfoliación, el material fibrilar puede causar defectos de transiluminación en el margen pupilar, dándole una apariencia apolillada. Otros signos incluyen un patrón en diana en la cápsula anterior del cristalino y la línea de Sampaolesi en la gonioscopia.' }
    }
],
'9-10': [
    {
        id: 'c9s10q1',
        type: QuestionType.MultipleChoice,
        questionText: { en: 'Which condition is NOT a cause of secondary angle-closure glaucoma?', es: '¿Qué condición NO es una causa de glaucoma secundario de ángulo cerrado?' },
        options: [
            { text: { en: 'Neovascularization of the iris (NVI)', es: 'Neovascularización del iris (NVI)' }, isCorrect: false },
            { text: { en: 'Pigment dispersion syndrome', es: 'Síndrome de dispersión pigmentaria' }, isCorrect: true },
            { text: { en: 'Uveitis with posterior synechiae', es: 'Uveítis con sinequias posteriores' }, isCorrect: false },
            { text: { en: 'Intumescent cataract', es: 'Catarata intumescente' }, isCorrect: false }
        ],
        explanation: { en: 'Pigment dispersion syndrome is a cause of secondary open-angle glaucoma. The other conditions cause angle closure either by a "pulling" mechanism (NVI creating a fibrovascular membrane) or a "pushing" mechanism (uveitis causing pupillary block, or a swollen lens pushing the iris forward).', es: 'El síndrome de dispersión pigmentaria es una causa de glaucoma secundario de ángulo abierto. Las otras condiciones causan cierre angular ya sea por un mecanismo de "tracción" (la NVI crea una membrana fibrovascular) o un mecanismo de "empuje" (la uveítis causa bloqueo pupilar, o un cristalino hinchado empuja el iris hacia adelante).' }
    }
],
'9-11': [
    {
        id: 'c9s11q1',
        type: QuestionType.MultipleChoice,
        questionText: { en: 'Haab striae, which are horizontal breaks in Descemet\'s membrane, are a sign of which condition?', es: 'Las estrías de Haab, que son rupturas horizontales en la membrana de Descemet, son un signo de ¿qué condición?' },
        options: [
            { text: { en: 'Congenital cataract', es: 'Catarata congénita' }, isCorrect: false },
            { text: { en: 'Retinopathy of prematurity', es: 'Retinopatía del prematuro' }, isCorrect: false },
            { text: { en: 'Primary congenital glaucoma', es: 'Glaucoma congénito primario' }, isCorrect: true },
            { text: { en: 'Aniridia', es: 'Aniridia' }, isCorrect: false }
        ],
        explanation: { en: 'Elevated IOP in infants causes the cornea to stretch and enlarge (buphthalmos), which can lead to tears in Descemet\'s membrane. These breaks, called Haab striae, are a classic sign of primary congenital glaucoma.', es: 'La PIO elevada en los bebés hace que la córnea se estire y se agrande (buftalmos), lo que puede provocar desgarros en la membrana de Descemet. Estas rupturas, llamadas estrías de Haab, son un signo clásico del glaucoma congénito primario.' }
    }
],
'9-12': [
    {
        id: 'c9s12q1',
        type: QuestionType.MultipleChoice,
        questionText: { en: 'What is the most common early complication of trabeculectomy surgery?', es: '¿Cuál es la complicación temprana más común de la cirugía de trabeculectomía?' },
        options: [
            { text: { en: 'Endophthalmitis', es: 'Endoftalmitis' }, isCorrect: false },
            { text: { en: 'Cataract formation', es: 'Formación de cataratas' }, isCorrect: false },
            { text: { en: 'Hypotony', es: 'Hipotonía' }, isCorrect: true },
            { text: { en: 'Hypertensive phase', es: 'Fase hipertensiva' }, isCorrect: false }
        ],
        explanation: { en: 'Hypotony (low IOP) is the most common early complication and is usually due to overfiltration or a wound leak. It can lead to a shallow anterior chamber, choroidal effusions, and maculopathy.', es: 'La hipotonía (PIO baja) es la complicación temprana más común y generalmente se debe a una filtración excesiva o una fuga de la herida. Puede provocar una cámara anterior plana, efusiones coroideas y maculopatía.' }
    }
],
'9-13': [],
'9-14': [],
'10-1': [
    {
        id: 'c10s1q1',
        type: QuestionType.MultipleChoice,
        questionText: { en: 'The lens capsule is primarily composed of what type of collagen?', es: '¿De qué tipo de colágeno está compuesta principalmente la cápsula del cristalino?' },
        options: [
            { text: { en: 'Type I', es: 'Tipo I' }, isCorrect: false },
            { text: { en: 'Type II', es: 'Tipo II' }, isCorrect: false },
            { text: { en: 'Type IV', es: 'Tipo IV' }, isCorrect: true },
            { text: { en: 'Type III', es: 'Tipo III' }, isCorrect: false }
        ],
        explanation: { en: 'The lens capsule is a basement membrane, and like most basement membranes in the body, it is primarily composed of Type IV collagen.', es: 'La cápsula del cristalino es una membrana basal y, como la mayoría de las membranas basales del cuerpo, está compuesta principalmente por colágeno de Tipo IV.' }
    }
],
'10-2': [
    {
        id: 'c10s2q1',
        type: QuestionType.TrueFalse,
        questionText: { en: 'The Lens Opacities Classification System III (LOCS III) is used to grade the severity of cataracts based on slit-lamp images.', es: 'El Sistema de Clasificación de Opacidades del Cristalino III (LOCS III) se utiliza para graduar la severidad de las cataratas basándose en imágenes de la lámpara de hendidura.' },
        options: [
            { text: { en: 'True', es: 'Verdadero' }, isCorrect: true },
            { text: { en: 'False', es: 'Falso' }, isCorrect: false }
        ],
        explanation: { en: 'LOCS III is the standard method for grading and documenting the type and severity of nuclear, cortical, and posterior subcapsular cataracts by comparing the patient\'s lens to a set of standard photographs.', es: 'LOCS III es el método estándar para graduar y documentar el tipo y la severidad de las cataratas nucleares, corticales y subcapsulares posteriores, comparando el cristalino del paciente con un conjunto de fotografías estándar.' }
    }
],
'10-3': [
    {
        id: 'c10s3q1',
        type: QuestionType.MultipleChoice,
        questionText: { en: 'Aniridia, a bilateral and panocular disorder, is most commonly associated with a mutation in which gene?', es: 'La aniridia, un trastorno bilateral y panocular, se asocia más comúnmente con una mutación en ¿qué gen?' },
        options: [
            { text: { en: 'RB1', es: 'RB1' }, isCorrect: false },
            { text: { en: 'PAX6', es: 'PAX6' }, isCorrect: true },
            { text: { en: 'FBN1', es: 'FBN1' }, isCorrect: false },
            { text: { en: 'VHL', es: 'VHL' }, isCorrect: false }
        ],
        explanation: { en: 'Aniridia is caused by mutations in the PAX6 gene, a master control gene for eye development. It can be associated with Wilms tumor in WAGR syndrome.', es: 'La aniridia es causada por mutaciones en el gen PAX6, un gen de control maestro para el desarrollo ocular. Puede estar asociada con el tumor de Wilms en el síndrome WAGR.' }
    }
],
'10-4': [
    {
        id: 'c10s4q1',
        type: QuestionType.MultipleChoice,
        questionText: { en: 'Long-term use of systemic corticosteroids is a well-known risk factor for which type of cataract?', es: 'El uso a largo plazo de corticosteroides sistémicos es un factor de riesgo bien conocido para ¿qué tipo de catarata?' },
        options: [
            { text: { en: 'Nuclear sclerotic', es: 'Nuclear esclerótica' }, isCorrect: false },
            { text: { en: 'Cortical', es: 'Cortical' }, isCorrect: false },
            { text: { en: 'Posterior subcapsular (PSC)', es: 'Subcapsular posterior (SCP)' }, isCorrect: true },
            { text: { en: 'Anterior polar', es: 'Polar anterior' }, isCorrect: false }
        ],
        explanation: { en: 'Posterior subcapsular cataracts (PSC) are classically associated with the use of corticosteroids (topical, systemic, or inhaled), as well as with diabetes, radiation, and intraocular inflammation.', es: 'Las cataratas subcapsulares posteriores (SCP) se asocian clásicamente con el uso de corticosteroides (tópicos, sistémicos o inhalados), así como con la diabetes, la radiación y la inflamación intraocular.' }
    }
],
'10-5': [
    {
        id: 'c10s5q1',
        type: QuestionType.MultipleChoice,
        questionText: { en: 'What is the most common complication following modern cataract surgery?', es: '¿Cuál es la complicación más común después de la cirugía de cataratas moderna?' },
        options: [
            { text: { en: 'Endophthalmitis', es: 'Endoftalmitis' }, isCorrect: false },
            { text: { en: 'Retinal detachment', es: 'Desprendimiento de retina' }, isCorrect: false },
            { text: { en: 'Posterior capsular opacification (PCO)', es: 'Opacificación de la cápsula posterior (OCP)' }, isCorrect: true },
            { text: { en: 'Cystoid macular edema', es: 'Edema macular cistoideo' }, isCorrect: false }
        ],
        explanation: { en: 'Posterior capsular opacification (PCO), sometimes called a "secondary cataract," is the most common late complication of cataract surgery, caused by the proliferation of lens epithelial cells on the posterior capsule.', es: 'La opacificación de la cápsula posterior (OCP), a veces llamada "catarata secundaria", es la complicación tardía más común de la cirugía de cataratas, causada por la proliferación de células epiteliales del cristalino en la cápsula posterior.' }
    }
],
'10-6': [
    {
        id: 'c10s6q1',
        type: QuestionType.MultipleChoice,
        questionText: { en: 'Negative dysphotopsia, a shadow in the temporal field of vision after cataract surgery, is most often associated with which type of IOL material?', es: 'La disfotopsia negativa, una sombra en el campo de visión temporal después de la cirugía de cataratas, se asocia más a menudo con ¿qué tipo de material de LIO?' },
        options: [
            { text: { en: 'Silicone', es: 'Silicona' }, isCorrect: false },
            { text: { en: 'PMMA', es: 'PMMA' }, isCorrect: false },
            { text: { en: 'Hydrophilic acrylic', es: 'Acrílico hidrofílico' }, isCorrect: false },
            { text: { en: 'Hydrophobic acrylic', es: 'Acrílico hidrofóbico' }, isCorrect: true }
        ],
        explanation: { en: 'Negative dysphotopsia is thought to be caused by an interaction of light with the square edge of high-refractive-index IOLs, which are typically made of hydrophobic acrylic.', es: 'Se cree que la disfotopsia negativa es causada por una interacción de la luz con el borde cuadrado de las LIOs de alto índice de refracción, que generalmente están hechas de acrílico hidrofóbico.' }
    }
],
'10-7': [
    {
        id: 'c10s7q1',
        type: QuestionType.MultipleChoice,
        questionText: { en: 'In Marfan syndrome, the crystalline lens typically subluxates in which direction?', es: 'En el síndrome de Marfan, ¿en qué dirección se subluxa típicamente el cristalino?' },
        options: [
            { text: { en: 'Inferonasally', es: 'Inferonasalmente' }, isCorrect: false },
            { text: { en: 'Superotemporally', es: 'Superotemporalmente' }, isCorrect: true },
            { text: { en: 'Directly inferiorly', es: 'Directamente inferior' }, isCorrect: false },
            { text: { en: 'Directly superiorly', es: 'Directamente superior' }, isCorrect: false }
        ],
        explanation: { en: 'Marfan syndrome is caused by a defect in the fibrillin gene, leading to weak zonules. The lens typically subluxates superotemporally. In contrast, in homocystinuria, the lens typically subluxates inferonasally.', es: 'El síndrome de Marfan es causado por un defecto en el gen de la fibrilina, lo que lleva a zónulas débiles. El cristalino típicamente se subluxa superotemporalmente. En contraste, en la homocistinuria, el cristalino típicamente se subluxa inferonasalmente.' }
    }
],
'10-8': [
    {
        id: 'c10s8q1',
        type: QuestionType.MultipleChoice,
        questionText: { en: 'Lisch nodules, which are melanocytic hamartomas of the iris, are a characteristic finding in:', es: 'Los nódulos de Lisch, que son hamartomas melanocíticos del iris, son un hallazgo característico en:' },
        options: [
            { text: { en: 'Tuberous sclerosis', es: 'Esclerosis tuberosa' }, isCorrect: false },
            { text: { en: 'Neurofibromatosis type 1 (NF1)', es: 'Neurofibromatosis tipo 1 (NF1)' }, isCorrect: true },
            { text: { en: 'Sturge-Weber syndrome', es: 'Síndrome de Sturge-Weber' }, isCorrect: false },
            { text: { en: 'Von Hippel-Lindau disease', es: 'Enfermedad de Von Hippel-Lindau' }, isCorrect: false }
        ],
        explanation: { en: 'Lisch nodules are found in over 90% of adult patients with Neurofibromatosis type 1 and are one of the diagnostic criteria for the disease.', es: 'Los nódulos de Lisch se encuentran en más del 90% de los pacientes adultos con Neurofibromatosis tipo 1 y son uno de los criterios diagnósticos para la enfermedad.' }
    }
],
'10-9': [
    {
        id: 'c10s9q1',
        type: QuestionType.TrueFalse,
        questionText: { en: 'A cyclodialysis cleft is a separation of the ciliary body from the scleral spur, often resulting in ocular hypotony.', es: 'Una hendidura de ciclodiálisis es una separación del cuerpo ciliar del espolón escleral, que a menudo resulta en hipotonía ocular.' },
        options: [
            { text: { en: 'True', es: 'Verdadero' }, isCorrect: true },
            { text: { en: 'False', es: 'Falso' }, isCorrect: false }
        ],
        explanation: { en: 'A cyclodialysis cleft, usually caused by trauma or surgery, creates a direct pathway for aqueous humor to drain into the suprachoroidal space, bypassing normal outflow pathways and leading to low intraocular pressure (hypotony).', es: 'Una hendidura de ciclodiálisis, generalmente causada por un trauma o cirugía, crea una vía directa para que el humor acuoso drene al espacio supracoroideo, evitando las vías de salida normales y provocando una presión intraocular baja (hipotonía).' }
    }
],
'10-10': [
    {
        id: 'c10s10q1',
        type: QuestionType.MultipleChoice,
        questionText: { en: 'Elschnig pearls are a form of:', es: 'Las perlas de Elschnig son una forma de:' },
        options: [
            { text: { en: 'Posterior subcapsular cataract', es: 'Catarata subcapsular posterior' }, isCorrect: false },
            { text: { en: 'Iris nodules', es: 'Nódulos del iris' }, isCorrect: false },
            { text: { en: 'Posterior capsular opacification (PCO)', es: 'Opacificación de la cápsula posterior (OCP)' }, isCorrect: true },
            { text: { en: 'Lens subluxation', es: 'Subluxación del cristalino' }, isCorrect: false }
        ],
        explanation: { en: 'Elschnig pearls are a type of PCO characterized by large, grape-like clusters of swollen, opacified lens epithelial cells that have migrated to the posterior capsule after cataract surgery.', es: 'Las perlas de Elschnig son un tipo de OCP caracterizadas por grandes racimos en forma de uva de células epiteliales del cristalino hinchadas y opacificadas que han migrado a la cápsula posterior después de la cirugía de cataratas.' }
    }
],
'10-11': [],
'11-1': [
    {
        id: 'c11s1q1',
        type: QuestionType.MultipleChoice,
        questionText: { en: 'Which type of collagen is the primary component of the vitreous humor?', es: '¿Qué tipo de colágeno es el componente principal del humor vítreo?' },
        options: [
            { text: { en: 'Type I', es: 'Tipo I' }, isCorrect: false },
            { text: { en: 'Type II', es: 'Tipo II' }, isCorrect: true },
            { text: { en: 'Type III', es: 'Tipo III' }, isCorrect: false },
            { text: { en: 'Type IV', es: 'Tipo IV' }, isCorrect: false }
        ],
        explanation: { en: 'The vitreous is a gel-like substance composed mainly of water (99%), hyaluronic acid, and a network of Type II collagen fibrils.', es: 'El vítreo es una sustancia similar a un gel compuesta principalmente de agua (99%), ácido hialurónico y una red de fibrillas de colágeno de Tipo II.' }
    }
],
'11-2': [
    {
        id: 'c11s2q1',
        type: QuestionType.MultipleChoice,
        questionText: { en: 'In fluorescein angiography (FA), blockage of fluorescence (hypofluorescence) can be caused by:', es: 'En la angiografía con fluoresceína (AGF), el bloqueo de la fluorescencia (hipofluorescencia) puede ser causado por:' },
        options: [
            { text: { en: 'Neovascularization', es: 'Neovascularización' }, isCorrect: false },
            { text: { en: 'Cystoid macular edema', es: 'Edema macular cistoideo' }, isCorrect: false },
            { text: { en: 'A dense retinal hemorrhage', es: 'Una hemorragia retiniana densa' }, isCorrect: true },
            { text: { en: 'A window defect', es: 'Un defecto en ventana' }, isCorrect: false }
        ],
        explanation: { en: 'Hypofluorescence on FA can be due to a filling defect (like a vessel occlusion) or a blockage effect, where a substance like blood or pigment blocks the view of the underlying fluorescence.', es: 'La hipofluorescencia en la AGF puede deberse a un defecto de llenado (como una oclusión vascular) o a un efecto de bloqueo, donde una sustancia como sangre o pigmento bloquea la vista de la fluorescencia subyacente.' }
    }
],
'11-3': [
    {
        id: 'c11s3q1',
        type: QuestionType.MultipleChoice,
        questionText: { en: 'What is the hallmark of proliferative diabetic retinopathy (PDR)?', es: '¿Cuál es el sello distintivo de la retinopatía diabética proliferativa (RDP)?' },
        options: [
            { text: { en: 'Microaneurysms', es: 'Microaneurismas' }, isCorrect: false },
            { text: { en: 'Cotton-wool spots', es: 'Manchas algodonosas' }, isCorrect: false },
            { text: { en: 'Neovascularization', es: 'Neovascularización' }, isCorrect: true },
            { text: { en: 'Hard exudates', es: 'Exudados duros' }, isCorrect: false }
        ],
        explanation: { en: 'The defining feature that separates nonproliferative (NPDR) from proliferative diabetic retinopathy (PDR) is the presence of neovascularization (new, abnormal blood vessel growth) of the disc (NVD) or elsewhere in the retina (NVE).', es: 'La característica definitoria que separa la retinopatía diabética no proliferativa (RDNP) de la proliferativa (RDP) es la presencia de neovascularización (crecimiento de nuevos vasos sanguíneos anormales) del disco (NVD) o en otra parte de la retina (NVE).' }
    }
],
'11-4': [
    {
        id: 'c11s4q1',
        type: QuestionType.TrueFalse,
        questionText: { en: 'The treatment for wet age-related macular degeneration (AMD) primarily involves intravitreal injections of anti-VEGF agents.', es: 'El tratamiento para la degeneración macular relacionada con la edad (DMAE) húmeda implica principalmente inyecciones intravítreas de agentes anti-VEGF.' },
        options: [
            { text: { en: 'True', es: 'Verdadero' }, isCorrect: true },
            { text: { en: 'False', es: 'Falso' }, isCorrect: false }
        ],
        explanation: { en: 'Intravitreal anti-VEGF therapy (e.g., ranibizumab, aflibercept, bevacizumab) is the standard of care for wet AMD, as it targets the vascular endothelial growth factor that drives choroidal neovascularization.', es: 'La terapia intravítrea anti-VEGF (p. ej., ranibizumab, aflibercept, bevacizumab) es el estándar de atención para la DMAE húmeda, ya que se dirige al factor de crecimiento endotelial vascular que impulsa la neovascularización coroidea.' }
    }
],
'11-5': [
    {
        id: 'c11s5q1',
        type: QuestionType.MultipleChoice,
        questionText: { en: 'A "cherry-red spot" at the macula is a classic sign of:', es: 'Una "mancha rojo cereza" en la mácula es un signo clásico de:' },
        options: [
            { text: { en: 'Central retinal vein occlusion (CRVO)', es: 'Oclusión de la vena central de la retina (OVCR)' }, isCorrect: false },
            { text: { en: 'Central retinal artery occlusion (CRAO)', es: 'Oclusión de la arteria central de la retina (OACR)' }, isCorrect: true },
            { text: { en: 'Diabetic retinopathy', es: 'Retinopatía diabética' }, isCorrect: false },
            { text: { en: 'Hypertensive retinopathy', es: 'Retinopatía hipertensiva' }, isCorrect: false }
        ],
        explanation: { en: 'In a CRAO, the inner retina becomes ischemic and opacified, except for the foveola, which lacks these layers and is supplied by the choroid. This makes the normal choroidal circulation visible as a "cherry-red spot" in contrast to the surrounding pale retina.', es: 'En una OACR, la retina interna se vuelve isquémica y opacificada, excepto la fovéola, que carece de estas capas y es irrigada por la coroides. Esto hace que la circulación coroidea normal sea visible como una "mancha rojo cereza" en contraste con la retina pálida circundante.' }
    }
],
'11-6': [
    {
        id: 'c11s6q1',
        type: QuestionType.MultipleChoice,
        questionText: { en: 'What is the most common cause of a rhegmatogenous retinal detachment?', es: '¿Cuál es la causa más común de un desprendimiento de retina regmatógeno?' },
        options: [
            { text: { en: 'A macular hole', es: 'Un agujero macular' }, isCorrect: false },
            { text: { en: 'A retinal tear associated with a posterior vitreous detachment (PVD)', es: 'Un desgarro retiniano asociado con un desprendimiento de vítreo posterior (DVP)' }, isCorrect: true },
            { text: { en: 'Traction from proliferative diabetic retinopathy', es: 'Tracción por retinopatía diabética proliferativa' }, isCorrect: false },
            { text: { en: 'Exudation from a choroidal tumor', es: 'Exudación de un tumor coroideo' }, isCorrect: false }
        ],
        explanation: { en: 'A rhegmatogenous RD is caused by a full-thickness retinal break (a tear or hole), which allows liquefied vitreous to pass into the subretinal space. The most common cause of such a break is a posterior vitreous detachment (PVD).', es: 'Un DR regmatógeno es causado por una ruptura de espesor total de la retina (un desgarro o agujero), que permite que el vítreo licuado pase al espacio subretiniano. La causa más común de tal ruptura es un desprendimiento de vítreo posterior (DVP).' }
    }
],
'11-7': [
    {
        id: 'c11s7q1',
        type: QuestionType.MultipleChoice,
        questionText: { en: 'The classic triad of fundus findings in retinitis pigmentosa (RP) is bone-spicule pigmentation, waxy pallor of the optic disc, and:', es: 'La tríada clásica de hallazgos del fondo de ojo en la retinitis pigmentosa (RP) es pigmentación en espículas óseas, palidez cérea del disco óptico y:' },
        options: [
            { text: { en: 'Macular edema', es: 'Edema macular' }, isCorrect: false },
            { text: { en: 'Choroidal neovascularization', es: 'Neovascularización coroidea' }, isCorrect: false },
            { text: { en: 'Retinal vascular attenuation', es: 'Atenuación vascular retiniana' }, isCorrect: true },
            { text: { en: 'Optic disc drusen', es: 'Drusas del disco óptico' }, isCorrect: false }
        ],
        explanation: { en: 'The classic triad for RP is peripheral bone-spicule hyperpigmentation, waxy disc pallor, and attenuation (narrowing) of the retinal arterioles.', es: 'La tríada clásica para la RP es la hiperpigmentación periférica en espículas óseas, la palidez cérea del disco y la atenuación (estrechamiento) de las arteriolas retinianas.' }
    }
],
'11-8': [
    {
        id: 'c11s8q1',
        type: QuestionType.MultipleChoice,
        questionText: { en: 'What is the most common primary intraocular malignancy in adults?', es: '¿Cuál es la neoplasia intraocular primaria más común en adultos?' },
        options: [
            { text: { en: 'Retinoblastoma', es: 'Retinoblastoma' }, isCorrect: false },
            { text: { en: 'Metastasis to the choroid', es: 'Metástasis a la coroides' }, isCorrect: false },
            { text: { en: 'Uveal (choroidal) melanoma', es: 'Melanoma uveal (coroideo)' }, isCorrect: true },
            { text: { en: 'Intraocular lymphoma', es: 'Linfoma intraocular' }, isCorrect: false }
        ],
        explanation: { en: 'Uveal melanoma is the most common primary intraocular malignancy in adults. Metastasis is the most common intraocular malignancy overall, but it is not primary.', es: 'El melanoma uveal es la neoplasia intraocular primaria más común en adultos. La metástasis es la neoplasia intraocular más común en general, pero no es primaria.' }
    }
],
'11-9': [
    {
        id: 'c11s9q1',
        type: QuestionType.MultipleChoice,
        questionText: { en: 'A "bull\'s-eye" maculopathy is a classic toxic side effect of which medication?', es: 'Una maculopatía "en ojo de buey" es un efecto secundario tóxico clásico de ¿qué medicamento?' },
        options: [
            { text: { en: 'Tamoxifen', es: 'Tamoxifeno' }, isCorrect: false },
            { text: { en: 'Chloroquine / Hydroxychloroquine', es: 'Cloroquina / Hidroxicloroquina' }, isCorrect: true },
            { text: { en: 'Thioridazine', es: 'Tioridazina' }, isCorrect: false },
            { text: { en: 'Vigabatrin', es: 'Vigabatrina' }, isCorrect: false }
        ],
        explanation: { en: 'Long-term use of chloroquine or hydroxychloroquine can cause a characteristic pattern of RPE damage in the macula, with a ring of depigmentation surrounding a central area of spared RPE, known as bull\'s-eye maculopathy.', es: 'El uso a largo plazo de cloroquina o hidroxicloroquina puede causar un patrón característico de daño al EPR en la mácula, con un anillo de despigmentación que rodea un área central de EPR preservado, conocido como maculopatía en ojo de buey.' }
    }
],
'11-10': [
    {
        id: 'c11s10q1',
        type: QuestionType.MultipleChoice,
        questionText: { en: 'Central serous chorioretinopathy (CSCR) is characterized by a focal serous detachment of the neurosensory retina. It is strongly associated with:', es: 'La coriorretinopatía serosa central (CRSC) se caracteriza por un desprendimiento seroso focal de la retina neurosensorial. Se asocia fuertemente con:' },
        options: [
            { text: { en: 'High myopia', es: 'Miopía alta' }, isCorrect: false },
            { text: { en: 'Corticosteroid use and stress', es: 'Uso de corticosteroides y estrés' }, isCorrect: true },
            { text: { en: 'Diabetes mellitus', es: 'Diabetes mellitus' }, isCorrect: false },
            { text: { en: 'Smoking', es: 'Tabaquismo' }, isCorrect: false }
        ],
        explanation: { en: 'CSCR is linked to elevated levels of endogenous or exogenous corticosteroids and is often seen in individuals with a type A personality or under high stress.', es: 'La CRSC está relacionada con niveles elevados de corticosteroides endógenos o exógenos y se observa a menudo en individuos con personalidad tipo A o bajo mucho estrés.' }
    }
],
'11-11': [],
'11-12': [],
};

// Function to generate a full quiz with a specific number of questions
const generateFullQuiz = (subModuleId: string, num: number): Question[] => {
  const baseQuestions = allQuestions[subModuleId] || [];
  if (baseQuestions.length === 0) {
      // Return a placeholder or empty array if no questions are defined yet.
      return Array.from({ length: 0 }, (_, i) => ({
        id: `ph-${subModuleId}-${i}`,
        type: QuestionType.TrueFalse,
        questionText: { en: `Placeholder Question ${i + 1} for ${subModuleId}`, es: `Pregunta de marcador de posición ${i + 1} para ${subModuleId}` },
        options: [{ text: { en: 'True', es: 'Verdadero' }, isCorrect: true }, { text: { en: 'False', es: 'Falso' }, isCorrect: false }],
        explanation: { en: 'This is a placeholder.', es: 'Esto es un marcador de posición.' },
      }));
  }
  let fullQuiz: Question[] = [];
  while (fullQuiz.length < num) {
    fullQuiz.push(...shuffleArray(baseQuestions));
  }
  return fullQuiz.slice(0, num).map((q, i) => ({ ...q, id: `${subModuleId}-q${i}`}));
};

// Function to generate a full exam from all subchapters of a module
const generateFullExam = (moduleId: number, num: number): Question[] => {
    const chapterKeys = Object.keys(allQuestions).filter(key => key.startsWith(`${moduleId}-`) && allQuestions[key].length > 0);
    const chapterQuestions = chapterKeys.flatMap(key => allQuestions[key]);
    if(chapterQuestions.length === 0) return [];
    
    let fullExam: Question[] = [];
    while (fullExam.length < num && chapterQuestions.length > 0) {
        fullExam.push(...shuffleArray(chapterQuestions));
    }
    return fullExam.slice(0, num).map((q, i) => ({ ...q, id: `exam-${moduleId}-q${i}`}));
};

// Function to generate all final exams, repeating questions if necessary to meet the desired length
const generateAllFinalExams = (numExams: number, questionsPerExam: number): Question[][] => {
  const allQs = Object.values(allQuestions).flat();

  if (allQs.length === 0) {
    return Array(numExams).fill([]);
  }

  const exams: Question[][] = [];
  for (let i = 0; i < numExams; i++) {
    let examQuestions: Question[] = [];
    // Repeat questions if necessary to meet the desired length
    while (examQuestions.length < questionsPerExam) {
      examQuestions.push(...shuffleArray(allQs));
    }
    
    // Slice to the exact number of questions
    const finalExamSlice = examQuestions.slice(0, questionsPerExam);

    // Map to new objects with unique exam-specific IDs
    const finalExamQuestions = finalExamSlice.map((q, j) => ({
      ...q,
      id: `final-${i}-q${j}`
    }));
    
    exams.push(finalExamQuestions);
  }

  return exams;
};


export const courseModules: Module[] = [
  {
    id: 1,
    title: { en: 'Chapter 1: Optics', es: 'Capítulo 1: Óptica' },
    summary: { en: 'Fundamental principles of optics relevant to ophthalmology.', es: 'Principios fundamentales de la óptica relevantes para la oftalmología.' },
    subModules: [
      { id: '1-1', title: { en: 'Properties of Light', es: 'Propiedades de la Luz' }, summary: { en: 'Wave-particle duality, spectrum, reflection, refraction.', es: 'Dualidad onda-partícula, espectro, reflexión, refracción.' }, quiz: generateFullQuiz('1-1', 50) },
      { id: '1-2', title: { en: 'Refraction', es: 'Refracción' }, summary: { en: "Snell's law, refractive index, critical angle.", es: 'Ley de Snell, índice de refracción, ángulo crítico.' }, quiz: generateFullQuiz('1-2', 50) },
      { id: '1-3', title: { en: 'Prisms', es: 'Prismas' }, summary: { en: 'Light deviation, prism diopters, and clinical applications.', es: 'Desviación de la luz, dioptrías prismáticas y aplicaciones clínicas.' }, quiz: generateFullQuiz('1-3', 50) },
      { id: '1-4', title: { en: 'Vergence', es: 'Vergencia' }, summary: { en: 'Convergence and divergence of light rays.', es: 'Convergencia y divergencia de los rayos de luz.' }, quiz: generateFullQuiz('1-4', 50) },
      { id: '1-5', title: { en: 'Magnification', es: 'Magnificación' }, summary: { en: 'Transverse, axial, and angular magnification.', es: 'Magnificación transversal, axial y angular.' }, quiz: generateFullQuiz('1-5', 50) },
      { id: '1-6', title: { en: 'Mirrors', es: 'Espejos' }, summary: { en: 'Reflection from plane and curved surfaces.', es: 'Reflexión en superficies planas y curvas.' }, quiz: generateFullQuiz('1-6', 50) },
      { id: '1-7', title: { en: 'Eye as Optical System', es: 'El Ojo como Sistema Óptico' }, summary: { en: 'The schematic eye and its optical properties.', es: 'El ojo esquemático y sus propiedades ópticas.' }, quiz: generateFullQuiz('1-7', 50) },
      { id: '1-8', title: { en: 'Prescribing Glasses', es: 'Prescripción de Gafas' }, summary: { en: 'Principles of spectacle correction.', es: 'Principios de la corrección con gafas.' }, quiz: generateFullQuiz('1-8', 50) },
      { id: '1-9', title: { en: 'Contact Lenses (CL)', es: 'Lentes de Contacto (LC)' }, summary: { en: 'Optics and fitting of contact lenses.', es: 'Óptica y adaptación de lentes de contacto.' }, quiz: generateFullQuiz('1-9', 50) },
      { id: '1-10', title: { en: 'Vision Rehabilitation', es: 'Rehabilitación Visual' }, summary: { en: 'Low vision aids and optical principles.', es: 'Ayudas para baja visión y principios ópticos.' }, quiz: generateFullQuiz('1-10', 50) },
      { id: '1-11', title: { en: 'Intraocular Lenses (IOL)', es: 'Lentes Intraoculares (LIO)' }, summary: { en: 'IOL power calculation and optics.', es: 'Cálculo de potencia y óptica de las LIO.' }, quiz: generateFullQuiz('1-11', 50) },
      { id: '1-12', title: { en: 'Ophthalmic Instruments', es: 'Instrumentos Oftálmicos' }, summary: { en: 'Optical principles of clinical instruments.', es: 'Principios ópticos de los instrumentos clínicos.' }, quiz: generateFullQuiz('1-12', 50) },
      { id: '1-13', title: { en: 'Equations', es: 'Ecuaciones' }, summary: { en: 'Key formulas in clinical optics.', es: 'Fórmulas clave en óptica clínica.' }, quiz: generateFullQuiz('1-13', 50) },
      { id: '1-14', title: { en: 'Review Questions', es: 'Preguntas de Repaso' }, summary: { en: 'Review questions from the source text.', es: 'Preguntas de repaso del texto original.' }, quiz: generateFullQuiz('1-14', 50) },
      { id: '1-15', title: { en: 'Suggested Readings', es: 'Lecturas Sugeridas' }, summary: { en: 'Further reading materials.', es: 'Materiales de lectura adicionales.' }, quiz: [] },
    ],
    exam: generateFullExam(1, 200),
  },
  {
    id: 2,
    title: { en: 'Chapter 2: Pharmacology', es: 'Capítulo 2: Farmacología' },
    summary: { en: 'Drugs used in ophthalmology, mechanisms, and toxicity.', es: 'Fármacos en oftalmología, mecanismos y toxicidad.' },
    subModules: [
       { id: '2-1', title: { en: 'Ocular Pharmacology', es: 'Farmacología Ocular' }, summary: { en: 'Pharmacodynamics and pharmacokinetics.', es: 'Farmacodinámica y farmacocinética.' }, quiz: generateFullQuiz('2-1', 50) },
       { id: '2-2', title: { en: 'Routes of Administration', es: 'Vías de Administración' }, summary: { en: 'Topical, systemic, and intraocular drug delivery.', es: 'Administración de fármacos tópica, sistémica e intraocular.' }, quiz: generateFullQuiz('2-2', 50) },
       { id: '2-3', title: { en: 'Anesthetics', es: 'Anestésicos' }, summary: { en: 'Topical and injectable anesthetics in ophthalmology.', es: 'Anestésicos tópicos e inyectables en oftalmología.' }, quiz: generateFullQuiz('2-3', 50) },
       { id: '2-4', title: { en: 'Autonomic System', es: 'Sistema Autonómo' }, summary: { en: 'Cholinergic and adrenergic drugs.', es: 'Fármacos colinérgicos y adrenérgicos.' }, quiz: generateFullQuiz('2-4', 50) },
       { id: '2-5', title: { en: 'Ocular Hypotensive (Glaucoma) Medications', es: 'Medicamentos Hipotensores Oculares (Glaucoma)' }, summary: { en: 'Classes of drugs to lower intraocular pressure.', es: 'Clases de fármacos para reducir la presión intraocular.' }, quiz: generateFullQuiz('2-5', 50) },
       { id: '2-6', title: { en: 'Anti-Inflammatory Drugs', es: 'Medicamentos Antiinflamatorios' }, summary: { en: 'Steroids and NSAIDs.', es: 'Esteroides y AINEs.' }, quiz: generateFullQuiz('2-6', 50) },
       { id: '2-7', title: { en: 'Ocular Decongestants', es: 'Descongestionantes Oculares' }, summary: { en: 'Vasoconstrictors for red eye relief.', es: 'Vasoconstrictores para el alivio del ojo rojo.' }, quiz: generateFullQuiz('2-7', 50) },
       { id: '2-8', title: { en: 'Antiallergic Medications', es: 'Medicamentos Antialérgicos' }, summary: { en: 'Antihistamines and mast cell stabilizers.', es: 'Antihistamínicos y estabilizadores de mastocitos.' }, quiz: generateFullQuiz('2-8', 50) },
       { id: '2-9', title: { en: 'Immunomodulatory Therapy', es: 'Terapia Inmunomoduladora' }, summary: { en: 'Agents for ocular inflammatory diseases.', es: 'Agentes para enfermedades inflamatorias oculares.' }, quiz: generateFullQuiz('2-9', 50) },
       { id: '2-10', title: { en: 'Antineoplastic Drugs', es: 'Fármacos Antineoplásicos' }, summary: { en: 'Chemotherapeutic agents used in ophthalmology.', es: 'Agentes quimioterapéuticos utilizados en oftalmología.' }, quiz: generateFullQuiz('2-10', 50) },
       { id: '2-11', title: { en: 'Anti-Infective Drugs', es: 'Fármacos Antiinfecciosos' }, summary: { en: 'Antibiotics, antivirals, and antifungals.', es: 'Antibióticos, antivirales y antifúngicos.' }, quiz: generateFullQuiz('2-11', 50) },
       { id: '2-12', title: { en: 'MISCELLANEOUS', es: 'MISCELÁNEOS' }, summary: { en: 'Other relevant drugs.', es: 'Otros fármacos relevantes.' }, quiz: generateFullQuiz('2-12', 50) },
       { id: '2-13', title: { en: 'Ocular Toxicology', es: 'Toxicología Ocular' }, summary: { en: 'Drug-induced ocular side effects.', es: 'Efectos secundarios oculares inducidos por fármacos.' }, quiz: generateFullQuiz('2-13', 50) },
       { id: '2-14', title: { en: 'Review Questions', es: 'Preguntas de Repaso' }, summary: { en: 'Review questions from the source text.', es: 'Preguntas de repaso del texto original.' }, quiz: generateFullQuiz('2-14', 50) },
       { id: '2-15', title: { en: 'Suggested Readings', es: 'Lecturas Sugeridas' }, summary: { en: 'Further reading materials.', es: 'Materiales de lectura adicionales.' }, quiz: [] }
    ],
    exam: generateFullExam(2, 200),
  },
  {
    id: 3,
    title: { en: 'Chapter 3: Embryology/Pathology', es: 'Capítulo 3: Embriología/Patología' },
    summary: { en: 'Embryological development of the eye and fundamental pathological processes.', es: 'Desarrollo embriológico del ojo y procesos patológicos fundamentales.' },
    subModules: [
      { id: '3-1', title: { en: 'Embryology', es: 'Embriología' }, summary: { en: 'Development of ocular structures.', es: 'Desarrollo de las estructuras oculares.' }, quiz: generateFullQuiz('3-1', 50) },
      { id: '3-2', title: { en: 'Microbial Studies & Stains', es: 'Estudios Microbianos y Tinciones' }, summary: { en: 'Stains and culture media in ophthalmology.', es: 'Tinciones y medios de cultivo en oftalmología.' }, quiz: generateFullQuiz('3-2', 50) },
      { id: '3-3', title: { en: 'Tissue Fixation', es: 'Fijación de Tejidos' }, summary: { en: 'Methods for preserving tissue samples.', es: 'Métodos para preservar muestras de tejido.' }, quiz: generateFullQuiz('3-3', 50) },
      { id: '3-4', title: { en: 'Inflammatory Responses', es: 'Respuestas Inflamatorias' }, summary: { en: 'Adaptive immune-triggered responses.', es: 'Respuestas inmunes adaptativas.' }, quiz: generateFullQuiz('3-4', 50) },
      { id: '3-5', title: { en: 'Immunoglobulins', es: 'Inmunoglobulinas' }, summary: { en: 'Classes and functions of antibodies.', es: 'Clases y funciones de los anticuerpos.' }, quiz: generateFullQuiz('3-5', 50) },
      { id: '3-6', title: { en: 'Human Leukocyte Antigen (HLA) System', es: 'Sistema de Antígenos Leucocitarios Humanos (HLA)' }, summary: { en: 'HLA associations with ocular diseases.', es: 'Asociaciones de HLA con enfermedades oculares.' }, quiz: generateFullQuiz('3-6', 50) },
      { id: '3-7', title: { en: 'Types of Inflammation', es: 'Tipos de Inflamación' }, summary: { en: 'Acute and chronic inflammatory processes.', es: 'Procesos inflamatorios agudos y crónicos.' }, quiz: generateFullQuiz('3-7', 50) },
      { id: '3-8', title: { en: 'Eyelid Epithelial Changes', es: 'Cambios Epiteliales del Párpado' }, summary: { en: 'Pathological changes in the eyelid epithelium.', es: 'Cambios patológicos en el epitelio del párpado.' }, quiz: generateFullQuiz('3-8', 50) },
      { id: '3-9', title: { en: 'Aging Changes', es: 'Cambios por el Envejecimiento' }, summary: { en: 'Age-related changes in ocular tissues.', es: 'Cambios en los tejidos oculares relacionados con la edad.' }, quiz: generateFullQuiz('3-9', 50) },
      { id: '3-10', title: { en: 'Wound Healing & Complications', es: 'Cicatrización y Complicaciones' }, summary: { en: 'The process of wound healing and potential complications.', es: 'El proceso de cicatrización de heridas y sus posibles complicaciones.' }, quiz: generateFullQuiz('3-10', 50) },
      { id: '3-11', title: { en: 'Ocular Injuries', es: 'Lesiones Oculares' }, summary: { en: 'Pathology of blunt and penetrating trauma.', es: 'Patología del trauma contuso y penetrante.' }, quiz: generateFullQuiz('3-11', 50) },
      { id: '3-12', title: { en: 'Tumors', es: 'Tumores' }, summary: { en: 'Classification and diagnostics of ocular tumors.', es: 'Clasificación y diagnóstico de tumores oculares.' }, quiz: generateFullQuiz('3-12', 50) },
    ],
    exam: generateFullExam(3, 200),
  },
   {
    id: 4,
    title: { en: 'Chapter 4: Neuro-Ophthalmology', es: 'Capítulo 4: Neuro-Oftalmología' },
    summary: { en: 'The visual pathway, eye movements, and neurological disorders affecting vision.', es: 'La vía visual, los movimientos oculares y los trastornos neurológicos que afectan la visión.' },
    subModules: [
        { id: '4-1', title: { en: 'Anatomy of the Visual Pathway', es: 'Anatomía de la Vía Visual' }, summary: { en: 'From the optic nerve to the occipital lobe.', es: 'Desde el nervio óptico hasta el lóbulo occipital.' }, quiz: generateFullQuiz('4-1', 50) },
        { id: '4-2', title: { en: 'Physiology & Testing', es: 'Fisiología y Pruebas' }, summary: { en: 'Color vision, visual fields, and electrophysiology.', es: 'Visión del color, campos visuais y electrofisiología.' }, quiz: generateFullQuiz('4-2', 50) },
        { id: '4-3', title: { en: 'Visual Field Defects', es: 'Defectos del Campo Visual' }, summary: { en: 'Localizing lesions based on VF defects.', es: 'Localización de lesiones según los defectos del campo visual.' }, quiz: generateFullQuiz('4-3', 50) },
        { id: '4-4', title: { en: 'Eye Movement Disorders', es: 'Trastornos del Movimiento Ocular' }, summary: { en: 'Supranuclear control and gaze palsies.', es: 'Control supranuclear y parálisis de la mirada.' }, quiz: generateFullQuiz('4-4', 50) },
        { id: '4-5', title: { en: 'Nystagmus', es: 'Nistagmo' }, summary: { en: 'Types and characteristics of nystagmus.', es: 'Tipos y características del nistagmo.' }, quiz: generateFullQuiz('4-5', 50) },
        { id: '4-6', title: { en: 'Cranial Nerve Palsies', es: 'Parálisis de Pares Craneales' }, summary: { en: 'Palsies of CN III, IV, and VI.', es: 'Parálisis de los pares craneales III, IV y VI.' }, quiz: generateFullQuiz('4-6', 50) },
        { id: '4-7', title: { en: 'Pupils', es: 'Pupilas' }, summary: { en: 'Pupillary pathways and abnormalities.', es: 'Vías pupilares y anomalías.' }, quiz: generateFullQuiz('4-7', 50) },
        { id: '4-8', title: { en: 'Optic Nerve Disorders', es: 'Trastornos del Nervio Óptico' }, summary: { en: 'Optic disc swelling, neuritis, and atrophy.', es: 'Edema de papila, neuritis y atrofia óptica.' }, quiz: generateFullQuiz('4-8', 50) },
        { id: '4-9', title: { en: 'Chiasm Compression', es: 'Compresión del Quiasma' }, summary: { en: 'Causes and clinical findings of chiasmal compression.', es: 'Causas y hallazgos clínicos de la compresión quiasmática.' }, quiz: generateFullQuiz('4-9', 50) },
        { id: '4-10', title: { en: 'Retrochiasmal Disorders', es: 'Trastornos Retroquiasmáticos' }, summary: { en: 'Lesions of the optic tract, LGB, and radiations.', es: 'Lesiones del tracto óptico, CGL y radiaciones.' }, quiz: generateFullQuiz('4-10', 50) },
        { id: '4-11', title: { en: 'Cortical Lesions', es: 'Lesiones Corticales' }, summary: { en: 'Visual neglect, agnosia, and other cortical disorders.', es: 'Negligencia visual, agnosia y otros trastornos corticales.' }, quiz: generateFullQuiz('4-11', 50) },
        { id: '4-12', title: { en: 'Headaches & Vascular Disorders', es: 'Cefaleas y Trastornos Vasculares' }, summary: { en: 'Migraine, aneurysms, and other vascular issues.', es: 'Migraña, aneurismas y otros problemas vasculares.' }, quiz: generateFullQuiz('4-12', 50) },
        { id: '4-13', title: { en: 'Neuro-Ophthalmic Manifestations of AIDS', es: 'Manifestaciones Neuro-Oftalmológicas del SIDA' }, summary: { en: 'Ocular findings in patients with AIDS.', es: 'Hallazgos oculares en pacientes con SIDA.' }, quiz: generateFullQuiz('4-13', 50) },
        { id: '4-14', title: { en: 'Review Questions', es: 'Preguntas de Repaso' }, summary: { en: 'Review questions from the source text.', es: 'Preguntas de repaso del texto original.' }, quiz: generateFullQuiz('4-14', 50) },
    ],
    exam: generateFullExam(4, 200),
  },
  {
    id: 5,
    title: { en: 'Chapter 5: Pediatrics/Strabismus', es: 'Capítulo 5: Pediatría/Estrabismo' },
    summary: { en: 'Pediatric ophthalmology, including strabismus, amblyopia, and congenital disorders.', es: 'Oftalmología pediátrica, incluyendo estrabismo, ambliopía y trastornos congénitos.' },
    subModules: [
        { id: '5-1', title: { en: 'Pediatrics: Anatomy and Physiology', es: 'Pediatría: Anatomía y Fisiología' }, summary: { en: 'Ocular development and visual acuity in children.', es: 'Desarrollo ocular y agudeza visual en niños.' }, quiz: generateFullQuiz('5-1', 50) },
        { id: '5-2', title: { en: 'Pediatrics: Orbital & Craniofacial Disorders', es: 'Pediatría: Trastornos Orbitarios y Craneofaciales' }, summary: { en: 'Congenital anomalies of the orbit and face.', es: 'Anomalías congénitas de la órbita y la cara.' }, quiz: generateFullQuiz('5-2', 50) },
        { id: '5-3', title: { en: 'Pediatrics: Lid and Lacrimal Disorders', es: 'Pediatría: Trastornos de los Párpados y Lagrimales' }, summary: { en: 'Congenital ptosis, epicanthus, and NLDO.', es: 'Ptosis congénita, epicanto y ONL.' }, quiz: generateFullQuiz('5-3', 50) },
        { id: '5-4', title: { en: 'Pediatrics: Conjunctival and Corneal Disorders', es: 'Pediatría: Trastornos Conjuntivales y Corneales' }, summary: { en: 'Ophthalmia neonatorum and congenital cloudy cornea.', es: 'Oftalmía neonatal y córnea opaca congénita.' }, quiz: generateFullQuiz('5-4', 50) },
        { id: '5-5', title: { en: 'Pediatrics: Iris and Lens Disorders', es: 'Pediatría: Trastornos del Iris y del Cristalino' }, summary: { en: 'Aniridia, coloboma, and congenital cataracts.', es: 'Aniridia, coloboma y cataratas congénitas.' }, quiz: generateFullQuiz('5-5', 50) },
        { id: '5-6', title: { en: 'Pediatrics: Glaucoma', es: 'Pediatría: Glaucoma' }, summary: { en: 'Primary congenital glaucoma and associated syndromes.', es: 'Glaucoma congénito primario y síndromes asociados.' }, quiz: generateFullQuiz('5-6', 50) },
        { id: '5-7', title: { en: 'Pediatrics: Uveitis and Retinal Disorders', es: 'Pediatría: Uveítis y Trastornos Retinianos' }, summary: { en: 'JIA, toxoplasmosis, and ROP.', es: 'AIJ, toxoplasmosis y ROP.' }, quiz: generateFullQuiz('5-7', 50) },
        { id: '5-8', title: { en: 'Strabismus: Anatomy and Physiology', es: 'Estrabismo: Anatomía y Fisiología' }, summary: { en: 'Extraocular muscles and binocular vision.', es: 'Músculos extraoculares y visión binocular.' }, quiz: generateFullQuiz('5-8', 50) },
        { id: '5-9', title: { en: 'Strabismus: Ocular Alignment & Deviations', es: 'Estrabismo: Alineación Ocular y Desviaciones' }, summary: { en: 'Esotropia, exotropia, and vertical deviations.', es: 'Esotropía, exotropía y desviaciones verticales.' }, quiz: generateFullQuiz('5-9', 50) },
    ],
    exam: generateFullExam(5, 200),
  },
  {
    id: 6,
    title: { en: 'Chapter 6: Orbit/Lids/Adnexa', es: 'Capítulo 6: Órbita/Párpados/Anejos' },
    summary: { en: 'Anatomy, imaging, and disorders of the orbit, eyelids, and lacrimal system.', es: 'Anatomía, imagenología y trastornos de la órbita, los párpados y el sistema lagrimal.' },
    subModules: [
        { id: '6-1', title: { en: 'Anatomy', es: 'Anatomía' }, summary: { en: 'Osteology, soft tissues, and vascular supply.', es: 'Osteología, tejidos blandos y suministro vascular.' }, quiz: generateFullQuiz('6-1', 50) },
        { id: '6-2', title: { en: 'Imaging', es: 'Imagenología' }, summary: { en: 'CT, MRI, and ultrasound of the orbit.', es: 'TC, RM y ultrasonido de la órbita.' }, quiz: generateFullQuiz('6-2', 50) },
        { id: '6-3', title: { en: 'Orbital Disorders', es: 'Trastornos Orbitarios' }, summary: { en: 'Trauma, inflammation, and tumors.', es: 'Trauma, inflamación y tumores.' }, quiz: generateFullQuiz('6-3', 50) },
        { id: '6-4', title: { en: 'Eyelid Disorders', es: 'Trastornos de los Párpados' }, summary: { en: 'Malposition, inflammation, and tumors.', es: 'Malposición, inflamación y tumores.' }, quiz: generateFullQuiz('6-4', 50) },
        { id: '6-5', title: { en: 'Nasolacrimal System Disorders', es: 'Trastornos del Sistema Nasolagrimal' }, summary: { en: 'Obstructions and infections.', es: 'Obstrucciones e infecciones.' }, quiz: generateFullQuiz('6-5', 50) },
        { id: '6-6', title: { en: 'Orbital Surgery', es: 'Cirugía Orbitaria' }, summary: { en: 'Evisceration, enucleation, and exenteration.', es: 'Evisceración, enucleación y exenteración.' }, quiz: generateFullQuiz('6-6', 50) },
        { id: '6-7', title: { en: 'Review Questions', es: 'Preguntas de Repaso' }, summary: { en: 'Review questions from the source text.', es: 'Preguntas de repaso del texto original.' }, quiz: generateFullQuiz('6-7', 50) },
        { id: '6-8', title: { en: 'Suggested Readings', es: 'Lecturas Sugeridas' }, summary: { en: 'Further reading materials.', es: 'Materiales de lectura adicionales.' }, quiz: [] }
    ],
    exam: generateFullExam(6, 200),
  },
  {
    id: 7,
    title: { en: 'Chapter 7: Cornea/External Disease', es: 'Capítulo 7: Córnea/Enfermedad Externa' },
    summary: { en: 'Disorders of the conjunctiva, cornea, and sclera.', es: 'Trastornos de la conjuntiva, la córnea y la esclera.' },
    subModules: [
        { id: '7-1', title: { en: 'Anatomy & Physiology', es: 'Anatomía y Fisiología' }, summary: { en: 'Layers, transparency, and stem cells.', es: 'Capas, transparencia y células madre.' }, quiz: generateFullQuiz('7-1', 50) },
        { id: '7-2', title: { en: 'Clinical Examination', es: 'Examen Clínico' }, summary: { en: 'Slit lamp techniques, staining, and testing.', es: 'Técnicas de lámpara de hendidura, tinciones y pruebas.' }, quiz: generateFullQuiz('7-2', 50) },
        { id: '7-3', title: { en: 'Congenital Anomalies', es: 'Anomalías Congénitas' }, summary: { en: 'Megalocornea, Peters anomaly, sclerocornea.', es: 'Megalocórnea, anomalía de Peters, esclerocórnea.' }, quiz: generateFullQuiz('7-3', 50) },
        { id: '7-4', title: { en: 'Corneal Dystrophies', es: 'Distrofias Corneales' }, summary: { en: 'Epithelial, stromal, and endothelial dystrophies.', es: 'Distrofias epiteliales, estromales y endoteliales.' }, quiz: generateFullQuiz('7-4', 50) },
        { id: '7-5', title: { en: 'Corneal Degenerations', es: 'Degeneraciones Corneales' }, summary: { en: 'Arcus, band keratopathy, Salzmann\'s.', es: 'Arcus, queratopatía en banda, Salzmann.' }, quiz: generateFullQuiz('7-5', 50) },
        { id: '7-6', title: { en: 'Infectious Keratitis', es: 'Queratitis Infecciosa' }, summary: { en: 'Bacterial, viral, fungal, and protozoan keratitis.', es: 'Queratitis bacteriana, viral, fúngica y protozoaria.' }, quiz: generateFullQuiz('7-6', 50) },
        { id: '7-7', title: { en: 'Non-infectious Keratitis', es: 'Queratitis no Infecciosa' }, summary: { en: 'Immune-mediated, neurotrophic, and exposure.', es: 'Inmunomediada, neurotrófica y por exposición.' }, quiz: generateFullQuiz('7-7', 50) },
        { id: '7-8', title: { en: 'Ectatic Disorders', es: 'Trastornos Ectásicos' }, summary: { en: 'Keratoconus, pellucid marginal degeneration.', es: 'Queratocono, degeneración marginal pelúcida.' }, quiz: generateFullQuiz('7-8', 50) },
        { id: '7-9', title: { en: 'Traumatic Injuries', es: 'Lesiones Traumáticas' }, summary: { en: 'Abrasions, lacerations, and chemical burns.', es: 'Abrasiones, laceraciones y quemaduras químicas.' }, quiz: generateFullQuiz('7-9', 50) },
        { id: '7-10', title: { en: 'Corneal Surgery', es: 'Cirugía Corneal' }, summary: { en: 'Transplantation and refractive surgery.', es: 'Trasplante y cirugía refractiva.' }, quiz: generateFullQuiz('7-10', 50) },
        { id: '7-11', title: { en: 'Conjunctival Disorders', es: 'Trastornos Conjuntivales' }, summary: { en: 'Inflammations, degenerations, and tumors.', es: 'Inflamaciones, degeneraciones y tumores.' }, quiz: generateFullQuiz('7-11', 50) },
        { id: '7-12', title: { en: 'Scleral Disorders', es: 'Trastornos Esclerales' }, summary: { en: 'Episcleritis and scleritis.', es: 'Epiescleritis y escleritis.' }, quiz: generateFullQuiz('7-12', 50) },
        { id: '7-13', title: { en: 'Review Questions', es: 'Preguntas de Repaso' }, summary: { en: 'Review questions from the source text.', es: 'Preguntas de repaso del texto original.' }, quiz: generateFullQuiz('7-13', 50) },
        { id: '7-14', title: { en: 'Suggested Readings', es: 'Lecturas Sugeridas' }, summary: { en: 'Further reading materials.', es: 'Materiales de lectura adicionales.' }, quiz: [] }
    ],
    exam: generateFullExam(7, 200),
  },
  {
    id: 8,
    title: { en: 'Chapter 8: Uveitis', es: 'Capítulo 8: Uveítis' },
    summary: { en: 'Inflammatory disorders of the uveal tract.', es: 'Trastornos inflamatorios del tracto uveal.' },
    subModules: [
        { id: '8-1', title: { en: 'Anatomy and Terminology', es: 'Anatomía y Terminología' }, summary: { en: 'Uveal tract anatomy and basic terms.', es: 'Anatomía del tracto uveal y términos básicos.' }, quiz: generateFullQuiz('8-1', 50) },
        { id: '8-2', title: { en: 'Clinical Examination & Classification', es: 'Examen Clínico y Clasificación' }, summary: { en: 'Signs of inflammation and the SUN classification.', es: 'Signos de inflamación y la clasificación SUN.' }, quiz: generateFullQuiz('8-2', 50) },
        { id: '8-3', title: { en: 'Anterior Uveitis', es: 'Uveítis Anterior' }, summary: { en: 'Granulomatous vs. non-granulomatous forms.', es: 'Formas granulomatosas vs. no granulomatosas.' }, quiz: generateFullQuiz('8-3', 50) },
        { id: '8-4', title: { en: 'Systemic Associations (Anterior)', es: 'Asociaciones Sistémicas (Anterior)' }, summary: { en: 'HLA-B27, JIA, and other systemic diseases.', es: 'HLA-B27, AIJ y otras enfermedades sistémicas.' }, quiz: generateFullQuiz('8-4', 50) },
        { id: '8-5', title: { en: 'Intermediate Uveitis', es: 'Uveítis Intermedia' }, summary: { en: 'Pars planitis and associated conditions.', es: 'Pars planitis y condiciones asociadas.' }, quiz: generateFullQuiz('8-5', 50) },
        { id: '8-6', title: { en: 'Posterior & Panuveitis', es: 'Uveítis Posterior y Panuveítis' }, summary: { en: 'VKH, sympathetic ophthalmia, and others.', es: 'VKH, oftalmía simpática y otras.' }, quiz: generateFullQuiz('8-6', 50) },
        { id: '8-7', title: { en: 'Infectious: Viral', es: 'Infecciosa: Viral' }, summary: { en: 'HSV, VZV (ARN), and CMV retinitis.', es: 'VHS, VVZ (NRA) y retinitis por CMV.' }, quiz: generateFullQuiz('8-7', 50) },
        { id: '8-8', title: { en: 'Infectious: Bacterial & Fungal', es: 'Infecciosa: Bacteriana y Fúngica' }, summary: { en: 'Syphilis, TB, and Candida.', es: 'Sífilis, TB y Candida.' }, quiz: generateFullQuiz('8-8', 50) },
        { id: '8-9', title: { en: 'Infectious: Parasitic', es: 'Infecciosa: Parasitaria' }, summary: { en: 'Toxoplasmosis and toxocariasis.', es: 'Toxoplasmosis y toxocariasis.' }, quiz: generateFullQuiz('8-9', 50) },
        { id: '8-10', title: { en: 'White Dot Syndromes', es: 'Síndromes de Puntos Blancos' }, summary: { en: 'Birdshot, MEWDS, APMPPE, and others.', es: 'Birdshot, MEWDS, APMPPE y otros.' }, quiz: generateFullQuiz('8-10', 50) },
        { id: '8-11', title: { en: 'Masquerade Syndromes', es: 'Síndromes de Enmascaramiento' }, summary: { en: 'Neoplastic and non-neoplastic mimics.', es: 'Imitadores neoplásicos y no neoplásicos.' }, quiz: generateFullQuiz('8-11', 50) },
        { id: '8-12', title: { en: 'Complications & Treatment', es: 'Complicaciones y Tratamiento' }, summary: { en: 'CME, cataract, glaucoma, and therapeutic ladder.', es: 'EMC, catarata, glaucoma y escalera terapéutica.' }, quiz: generateFullQuiz('8-12', 50) },
        { id: '8-13', title: { en: 'Review Questions', es: 'Preguntas de Repaso' }, summary: { en: 'Review questions from the source text.', es: 'Preguntas de repaso del texto original.' }, quiz: [] },
        { id: '8-14', title: { en: 'Suggested Readings', es: 'Lecturas Sugeridas' }, summary: { en: 'Further reading materials.', es: 'Materiales de lectura adicionales.' }, quiz: [] }
    ],
    exam: generateFullExam(8, 200),
  },
  {
    id: 9,
    title: { en: 'Chapter 9: Glaucoma', es: 'Capítulo 9: Glaucoma' },
    summary: { en: 'Pathophysiology, diagnosis, and management of glaucoma.', es: 'Fisiopatología, diagnóstico y manejo del glaucoma.' },
    subModules: [
        { id: '9-1', title: { en: 'Aqueous Humor Dynamics', es: 'Dinámica del Humor Acuoso' }, summary: { en: 'Production and outflow of aqueous humor.', es: 'Producción y salida del humor acuoso.' }, quiz: generateFullQuiz('9-1', 50) },
        { id: '9-2', title: { en: 'Clinical Examination', es: 'Examen Clínico' }, summary: { en: 'Tonometry, gonioscopy, and pachymetry.', es: 'Tonometría, gonioscopia y paquimetría.' }, quiz: generateFullQuiz('9-2', 50) },
        { id: '9-3', title: { en: 'Optic Nerve Head & NFL Evaluation', es: 'Evaluación de la Cabeza del Nervio Óptico y la CFN' }, summary: { en: 'Clinical evaluation and imaging (OCT).', es: 'Evaluación clínica e imagenología (OCT).' }, quiz: generateFullQuiz('9-3', 50) },
        { id: '9-4', title: { en: 'Visual Field Testing', es: 'Pruebas de Campo Visual' }, summary: { en: 'Perimetry and interpreting results.', es: 'Perimetría e interpretación de resultados.' }, quiz: generateFullQuiz('9-4', 50) },
        { id: '9-5', title: { en: 'Primary Open-Angle Glaucoma (POAG)', es: 'Glaucoma Primario de Ángulo Abierto (GPAA)' }, summary: { en: 'Pathophysiology, risk factors, and management.', es: 'Fisiopatología, factores de riesgo y manejo.' }, quiz: generateFullQuiz('9-5', 50) },
        { id: '9-6', title: { en: 'Normal-Tension Glaucoma', es: 'Glaucoma de Tensión Normal' }, summary: { en: 'Diagnosis and management.', es: 'Diagnóstico y manejo.' }, quiz: generateFullQuiz('9-6', 50) },
        { id: '9-7', title: { en: 'Ocular Hypertension', es: 'Hipertensión Ocular' }, summary: { en: 'Risk stratification and treatment decisions.', es: 'Estratificación de riesgos y decisiones de tratamiento.' }, quiz: generateFullQuiz('9-7', 50) },
        { id: '9-8', title: { en: 'Angle-Closure Glaucoma', es: 'Glaucoma de Ángulo Cerrado' }, summary: { en: 'Mechanisms, diagnosis, and treatment.', es: 'Mecanismos, diagnóstico y tratamiento.' }, quiz: generateFullQuiz('9-8', 50) },
        { id: '9-9', title: { en: 'Secondary Open-Angle Glaucomas', es: 'Glaucomas Secundarios de Ángulo Abierto' }, summary: { en: 'Pseudoexfoliation, pigmentary, steroid-induced.', es: 'Pseudoexfoliativo, pigmentario, inducido por esteroides.' }, quiz: generateFullQuiz('9-9', 50) },
        { id: '9-10', title: { en: 'Secondary Angle-Closure Glaucomas', es: 'Glaucomas Secundarios de Ángulo Cerrado' }, summary: { en: 'Neovascular, uveitic, and lens-induced.', es: 'Neovascular, uveítico e inducido por el cristalino.' }, quiz: generateFullQuiz('9-10', 50) },
        { id: '9-11', title: { en: 'Childhood Glaucomas', es: 'Glaucomas Infantiles' }, summary: { en: 'Primary congenital and secondary glaucomas.', es: 'Glaucoma congénito primario y glaucomas secundarios.' }, quiz: generateFullQuiz('9-11', 50) },
        { id: '9-12', title: { en: 'Management', es: 'Manejo' }, summary: { en: 'Medical, laser, and surgical therapies.', es: 'Terapias médicas, con láser y quirúrgicas.' }, quiz: generateFullQuiz('9-12', 50) },
        { id: '9-13', title: { en: 'Review Questions', es: 'Preguntas de Repaso' }, summary: { en: 'Review questions from the source text.', es: 'Preguntas de repaso del texto original.' }, quiz: [] },
        { id: '9-14', title: { en: 'Suggested Readings', es: 'Lecturas Sugeridas' }, summary: { en: 'Further reading materials.', es: 'Materiales de lectura adicionales.' }, quiz: [] }
    ],
    exam: generateFullExam(9, 200),
  },
  {
    id: 10,
    title: { en: 'Chapter 10: Anterior Segment', es: 'Capítulo 10: Segmento Anterior' },
    summary: { en: 'Disorders of the iris, ciliary body, and lens.', es: 'Trastornos del iris, cuerpo ciliar y cristalino.' },
    subModules: [
        { id: '10-1', title: { en: 'Anatomy & Physiology', es: 'Anatomía y Fisiología' }, summary: { en: 'Lens, iris, and ciliary body structure and function.', es: 'Estructura y función del cristalino, iris y cuerpo ciliar.' }, quiz: generateFullQuiz('10-1', 50) },
        { id: '10-2', title: { en: 'Clinical Examination', es: 'Examen Clínico' }, summary: { en: 'Techniques for examining the anterior segment.', es: 'Técnicas para examinar el segmento anterior.' }, quiz: generateFullQuiz('10-2', 50) },
        { id: '10-3', title: { en: 'Congenital Anomalies', es: 'Anomalías Congénitas' }, summary: { en: 'Aniridia, coloboma, and lens abnormalities.', es: 'Aniridia, coloboma y anomalías del cristalino.' }, quiz: generateFullQuiz('10-3', 50) },
        { id: '10-4', title: { en: 'Cataracts', es: 'Cataratas' }, summary: { en: 'Pathophysiology, types, and classification.', es: 'Fisiopatología, tipos y clasificación.' }, quiz: generateFullQuiz('10-4', 50) },
        { id: '10-5', title: { en: 'Cataract Surgery', es: 'Cirugía de Cataratas' }, summary: { en: 'Preoperative evaluation, techniques, and complications.', es: 'Evaluación preoperatoria, técnicas y complicaciones.' }, quiz: generateFullQuiz('10-5', 50) },
        { id: '10-6', title: { en: 'Intraocular Lenses (IOLs)', es: 'Lentes Intraoculares (LIOs)' }, summary: { en: 'Types, power calculations, and complications.', es: 'Tipos, cálculos de poder y complicaciones.' }, quiz: generateFullQuiz('10-6', 50) },
        { id: '10-7', title: { en: 'Ectopia Lentis', es: 'Ectopia Lentis' }, summary: { en: 'Dislocated lenses and associated syndromes.', es: 'Cristalinos dislocados y síndromes asociados.' }, quiz: generateFullQuiz('10-7', 50) },
        { id: '10-8', title: { en: 'Iris Disorders', es: 'Trastornos del Iris' }, summary: { en: 'Inflammation, tumors, and cysts.', es: 'Inflamación, tumores y quistes.' }, quiz: generateFullQuiz('10-8', 50) },
        { id: '10-9', title: { en: 'Ciliary Body Disorders', es: 'Trastornos del Cuerpo Ciliar' }, summary: { en: 'Tumors and dysfunction.', es: 'Tumores y disfunción.' }, quiz: generateFullQuiz('10-9', 50) },
        { id: '10-10', title: { en: 'Review Questions', es: 'Preguntas de Repaso' }, summary: { en: 'Review questions from the source text.', es: 'Preguntas de repaso del texto original.' }, quiz: generateFullQuiz('10-10', 50) },
        { id: '10-11', title: { en: 'Suggested Readings', es: 'Lecturas Sugeridas' }, summary: { en: 'Further reading materials.', es: 'Materiales de lectura adicionales.' }, quiz: [] }
    ],
    exam: generateFullExam(10, 200),
  },
  {
    id: 11,
    title: { en: 'Chapter 11: Posterior Segment', es: 'Capítulo 11: Segmento Posterior' },
    summary: { en: 'Disorders of the vitreous, retina, and choroid.', es: 'Trastornos del vítreo, la retina y la coroides.' },
    subModules: [
        { id: '11-1', title: { en: 'Anatomy & Physiology', es: 'Anatomía y Fisiología' }, summary: { en: 'Vitreous, retina, and choroid structure.', es: 'Estructura del vítreo, retina y coroides.' }, quiz: generateFullQuiz('11-1', 50) },
        { id: '11-2', title: { en: 'Examination & Imaging', es: 'Examen e Imagenología' }, summary: { en: 'Fundoscopy, FA, ICG, and OCT.', es: 'Fundoscopia, AGF, ICG y OCT.' }, quiz: generateFullQuiz('11-2', 50) },
        { id: '11-3', title: { en: 'Diabetic Retinopathy', es: 'Retinopatía Diabética' }, summary: { en: 'NPDR, PDR, and macular edema.', es: 'RDNP, RDP y edema macular.' }, quiz: generateFullQuiz('11-3', 50) },
        { id: '11-4', title: { en: 'Age-Related Macular Degeneration (AMD)', es: 'Degeneración Macular Relacionada con la Edad (DMAE)' }, summary: { en: 'Dry and wet forms, treatment.', es: 'Formas secas y húmedas, tratamiento.' }, quiz: generateFullQuiz('11-4', 50) },
        { id: '11-5', title: { en: 'Retinal Vascular Occlusive Diseases', es: 'Enfermedades Oclusivas Vasculares de la Retina' }, summary: { en: 'Artery and vein occlusions.', es: 'Oclusiones de arteria y vena.' }, quiz: generateFullQuiz('11-5', 50) },
        { id: '11-6', title: { en: 'Retinal Detachment', es: 'Desprendimiento de Retina' }, summary: { en: 'Rhegmatogenous, tractional, and exudative.', es: 'Regmatógeno, traccional y exudativo.' }, quiz: generateFullQuiz('11-6', 50) },
        { id: '11-7', title: { en: 'Hereditary Retinal Dystrophies', es: 'Distrofias Hereditarias de la Retina' }, summary: { en: 'Retinitis pigmentosa, Stargardt, Best disease.', es: 'Retinitis pigmentosa, Stargardt, enfermedad de Best.' }, quiz: generateFullQuiz('11-7', 50) },
        { id: '11-8', title: { en: 'Intraocular Tumors', es: 'Tumores Intraoculares' }, summary: { en: 'Melanoma, metastasis, and other tumors.', es: 'Melanoma, metástasis y otros tumores.' }, quiz: generateFullQuiz('11-8', 50) },
        { id: '11-9', title: { en: 'Retinal Drug Toxicities', es: 'Toxicidades Farmacológicas de la Retina' }, summary: { en: 'Plaquenil, tamoxifen, and others.', es: 'Plaquenil, tamoxifeno y otros.' }, quiz: generateFullQuiz('11-9', 50) },
        { id: '11-10', title: { en: 'Other Retinal Disorders', es: 'Otros Trastornos Retinianos' }, summary: { en: 'CSCR, macular holes, ERM.', es: 'CRSC, agujeros maculares, MEE.' }, quiz: generateFullQuiz('11-10', 50) },
        { id: '11-11', title: { en: 'Review Questions', es: 'Preguntas de Repaso' }, summary: { en: 'Review questions from the source text.', es: 'Preguntas de repaso del texto original.' }, quiz: [] },
        { id: '11-12', title: { en: 'Suggested Readings', es: 'Lecturas Sugeridas' }, summary: { en: 'Further reading materials.', es: 'Materiales de lectura adicionales.' }, quiz: [] }
    ],
    exam: generateFullExam(11, 200),
  },
];

export const finalExams: Question[][] = generateAllFinalExams(4, 600);
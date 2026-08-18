

document.addEventListener("DOMContentLoaded", function () {

  "use strict";


  /* =======================================================
     SURGERY DATA
  ======================================================= */

  const SURGERIES = {

    "general-surgery": {

      name: "General Surgery",

      category: "General Surgery",

      shortTitle: "Expert General Surgical Care",

      heroDescription:
        "Specialist-led evaluation and surgical care for common conditions requiring planned or urgent treatment.",

      definitionEyebrow: "Understanding General Surgery",

      definitionTitle: "What is General Surgery?",

      definition:
        "General surgery is a surgical specialty that deals with a wide range of conditions affecting the abdomen, digestive system, soft tissues and other areas of the body. A surgeon evaluates the condition and recommends the most appropriate treatment based on the patient's individual needs.",

      images: [
        {
          src: "images/surgery/gs.png",
          alt: "General surgery care at Niva Surgery"
        },
        {
          src: "images/surgery/gs1.png",
          alt: "General surgical treatment at Niva Surgery"
        }
      ],

      conditions: [
        {
          title: "Abdominal Conditions",
          text:
            "Surgical evaluation for conditions affecting the abdomen and digestive system."
        },
        {
          title: "Hernia",
          text:
            "Assessment and surgical treatment planning for different types of hernia."
        },
        {
          title: "Appendix Problems",
          text:
            "Evaluation of suspected appendicitis and appropriate surgical management."
        }
      ],

      treatment: {
        eyebrow: "When Treatment May Be Needed",
        title: "When should you consult a surgeon?",
        description:
          "A surgical consultation helps determine whether an operation, another treatment, or observation is appropriate.",
        items: [
          {
            title: "Persistent symptoms",
            text:
              "Symptoms that continue or interfere with daily activities may require specialist evaluation."
          },
          {
            title: "Structural problems",
            text:
              "Conditions such as hernia or other structural abnormalities may require surgical assessment."
          },
          {
            title: "Acute conditions",
            text:
              "Sudden or severe symptoms may require prompt clinical assessment."
          },
          {
            title: "Planned procedures",
            text:
              "A surgeon can explain available treatment options before a planned procedure."
          }
        ]
      },

      procedures: {
        eyebrow: "Surgical Options",
        title: "Treatment is planned around your condition",
        description:
          "The recommended procedure depends on your diagnosis, health history and clinical assessment.",
        items: [
          {
            title: "Hernia Repair",
            text:
              "Surgical repair of selected abdominal wall hernias."
          },
          {
            title: "Appendectomy",
            text:
              "Surgical removal of the appendix when clinically indicated."
          },
          {
            title: "Biopsy Procedures",
            text:
              "Removal of tissue for further clinical examination when required."
          },
          {
            title: "Other General Procedures",
            text:
              "Treatment options are discussed with you after proper evaluation."
          }
        ]
      },

      finance: [
        {
          title: "Insurance Support",
          text:
            "Our team can help you understand the documentation and insurance-related process for planned surgical care."
        },
        {
          title: "Payment Assistance",
          text:
            "Ask our care team about available payment and financing options for eligible procedures."
        }
      ],

      journey: [
        {
          label: "Before Surgery",
          title: "Meet Your Surgeon",
          text:
            "Discuss your symptoms, health history and treatment concerns with the surgical team."
        },
        {
          label: "Evaluation",
          title: "Diagnosis & Assessment",
          text:
            "Your condition is assessed and relevant investigations are reviewed."
        },
        {
          label: "Planning",
          title: "Treatment Plan",
          text:
            "Your surgeon explains the recommended procedure and preparation."
        },
        {
          label: "Treatment Day",
          title: "Your Surgery",
          text:
            "The planned procedure is performed according to the appropriate clinical protocols."
        },
        {
          label: "After Surgery",
          title: "Recovery",
          text:
            "You receive post-operative guidance and recovery instructions."
        },
        {
          label: "Follow-up",
          title: "Continued Care",
          text:
            "Follow-up helps your surgical team review your recovery and next steps."
        }
      ],

      trust: {
        title: "Surgical care focused on you",
        description:
          "Niva Surgery focuses on clear communication, appropriate treatment planning and patient support throughout the surgical journey.",
        items: [
          {
            title: "Specialist-led care",
            text:
              "Your condition is reviewed by the appropriate surgical specialist."
          },
          {
            title: "Clear treatment planning",
            text:
              "Treatment options and the next steps are explained before proceeding."
          },
          {
            title: "Patient safety",
            text:
              "Clinical decisions are made with attention to patient safety and individual needs."
          },
          {
            title: "Follow-up support",
            text:
              "Post-treatment guidance continues through the recovery journey."
          }
        ]
      },

      faqs: [
        {
          question: "How do I book a consultation with a general surgeon?",
          answer:
            "You can request a surgical consultation through Niva Surgery. The care team can help connect you with the appropriate surgical specialist."
        },
        {
          question: "Will I need surgery?",
          answer:
            "Not every surgical condition requires an operation. Your surgeon will assess your symptoms, medical history and investigations before recommending treatment."
        },
        {
          question: "What happens during the first consultation?",
          answer:
            "Your surgeon discusses your symptoms, medical history and relevant reports and explains the treatment options that may be appropriate."
        },
        {
          question: "What should I bring to my consultation?",
          answer:
            "Bring relevant medical reports, previous prescriptions, scan reports and information about your current medicines if available."
        },
        {
          question: "How long is recovery after surgery?",
          answer:
            "Recovery varies according to the procedure and the patient's health. Your surgeon will explain the expected recovery period for your specific treatment."
        }
      ]

    },

    // varicose veins


    "varicose-veins": {

  name: "Varicose Veins",

  category: "Varicose Veins",

  shortTitle: "Specialist Care for Varicose Veins",

  heroDescription:
    "Personalized care for varicose veins, from diagnosis and treatment planning to recovery.",

  definitionEyebrow: "Understanding Varicose Veins",

  definitionTitle: "What are Varicose Veins?",

  definition:
    "Varicose veins are enlarged, twisted veins that commonly appear on the legs. They may cause visible veins, heaviness, aching, swelling or discomfort. A specialist evaluation helps understand the condition and decide the most suitable treatment.",

  images: [
    {
      src: "images/surgery/var1.png",
      alt: "Varicose vein consultation at Niva Surgery"
    },
    {
      src: "images/surgery/var2.png",
      alt: "Varicose vein treatment at Niva Surgery"
    }
  ],

  conditions: [
    {
      title: "Visible Veins",
      text:
        "Enlarged or twisted veins that become visible under the skin, commonly on the legs."
    },
    {
      title: "Leg Pain & Heaviness",
      text:
        "Aching, heaviness or discomfort in the legs, especially after standing for long periods."
    },
    {
      title: "Leg Swelling",
      text:
        "Swelling around the legs or ankles may occur with some types of vein problems."
    }
  ],

  treatment: {
    eyebrow: "When Treatment May Be Needed",

    title: "When should you consult a specialist?",

    description:
      "A specialist consultation helps assess your veins and determine whether observation, non-surgical care or a procedure may be appropriate.",

    items: [
      {
        title: "Visible enlarged veins",
        text:
          "Prominent or twisted veins that continue to develop may need specialist assessment."
      },
      {
        title: "Persistent leg discomfort",
        text:
          "Aching, heaviness or tiredness in the legs may require evaluation."
      },
      {
        title: "Swelling or skin changes",
        text:
          "Persistent swelling or changes around the affected area should be assessed."
      },
      {
        title: "Symptoms affecting daily life",
        text:
          "When vein-related symptoms interfere with walking, standing or daily activities, treatment options can be discussed."
      }
    ]
  },

  procedures: {
    eyebrow: "Treatment Options",

    title: "Treatment planned around your veins",

    description:
      "Treatment depends on the severity of the vein problem, your symptoms and your specialist's clinical assessment.",

    items: [
      {
        title: "Vein Assessment",
        text:
          "Your symptoms and visible veins are evaluated to understand the condition."
      },
      {
        title: "Ultrasound Evaluation",
        text:
          "A vein ultrasound may be recommended to assess blood flow and affected veins."
      },
      {
        title: "Minimally Invasive Treatment",
        text:
          "Suitable patients may be considered for minimally invasive procedures to treat affected veins."
      },
      {
        title: "Personalized Treatment Plan",
        text:
          "Your specialist explains the appropriate treatment and recovery plan based on your condition."
      }
    ]
  },

  finance: [
    {
      title: "Insurance Support",
      text:
        "Our care team can help you understand the documentation and insurance-related process for eligible surgical care."
    },
    {
      title: "Payment Assistance",
      text:
        "Ask our care team about available payment and financing options for eligible procedures."
    }
  ],

  journey: [
    {
      label: "Step 01",
      title: "Meet Your Specialist",
      text:
        "Discuss your symptoms, concerns and medical history with the specialist."
    },
    {
      label: "Step 02",
      title: "Vein Assessment",
      text:
        "Your legs and affected veins are assessed and relevant investigations may be recommended."
    },
    {
      label: "Step 03",
      title: "Treatment Planning",
      text:
        "Your specialist explains the suitable treatment options and preparation."
    },
    {
      label: "Step 04",
      title: "Treatment",
      text:
        "The planned treatment is performed according to the appropriate clinical protocols."
    },
    {
      label: "Step 05",
      title: "Recovery",
      text:
        "You receive guidance to support your recovery and return to normal activities."
    },
    {
      label: "Step 06",
      title: "Follow-up",
      text:
        "Your specialist reviews your recovery and provides further care guidance."
    }
  ],

  trust: {

    title: "Varicose vein care focused on you",

    description:
      "Niva Surgery focuses on clear communication, appropriate treatment planning and patient support throughout your vein care journey.",

    items: [
      {
        title: "Specialist-led care",
        text:
          "Your vein condition is evaluated by the appropriate specialist."
      },
      {
        title: "Clear treatment planning",
        text:
          "Treatment options and the next steps are explained clearly before proceeding."
      },
      {
        title: "Patient safety",
        text:
          "Clinical decisions are made with attention to your safety and individual needs."
      },
      {
        title: "Recovery support",
        text:
          "Post-treatment guidance and follow-up support continue throughout your recovery."
      }
    ]
  },

  faqs: [
    {
      question: "What are varicose veins?",

      answer:
        "Varicose veins are enlarged and twisted veins, usually seen on the legs. They may cause visible veins, aching, heaviness or swelling."
    },
    {
      question: "Do all varicose veins require treatment?",

      answer:
        "No. Treatment depends on your symptoms, the severity of the condition and the specialist's assessment."
    },
    {
      question: "How do I book a varicose vein consultation?",

      answer:
        "You can request a consultation through Niva Surgery. Our care team can help connect you with the appropriate specialist."
    },
    {
      question: "What happens during the first consultation?",

      answer:
        "The specialist discusses your symptoms, examines the affected veins and may recommend further evaluation such as a vein ultrasound."
    },
    {
      question: "How long is recovery after varicose vein treatment?",

      answer:
        "Recovery depends on the treatment performed and your individual condition. Your specialist will explain the expected recovery and activity guidance."
    }
  ]

},

    // gyno 

    "gynecomastia": {

  name: "Gynecomastia",

  category: "Gynecomastia",

  shortTitle: "Specialist Care for Gynecomastia",

  heroDescription:
     "Personalized care for gynecomastia, from consultation and treatment planning to recovery.",

  definitionEyebrow: "Understanding Gynecomastia",

  definitionTitle: "What is Gynecomastia?",

  definition:
    "Gynecomastia is the enlargement of male breast tissue, which can affect one or both sides of the chest. It may be related to hormonal changes, certain medicines, weight changes or other underlying conditions. A specialist evaluation helps identify the possible cause and determine whether treatment is appropriate.",

  images: [
    {
      src: "images/surgery/gyno1.png",
      alt: "Gynecomastia treatment consultation at Niva Surgery"
    },
    {
      src: "images/surgery/gyno2.png",
      alt: "Gynecomastia surgical care at Niva Surgery"
    }
  ],

  conditions: [
    {
      title: "Chest Enlargement",
      text:
        "Evaluation of enlarged male breast tissue affecting one or both sides of the chest."
    },
    {
      title: "Hormonal Changes",
      text:
        "Assessment of possible hormonal or other underlying factors associated with gynecomastia."
    },
    {
      title: "Persistent Breast Tissue",
      text:
        "Specialist evaluation when enlarged breast tissue remains persistent or causes discomfort or concern."
    }
  ],

  treatment: {
    eyebrow: "When Treatment May Be Needed",

    title: "When should you consult a specialist?",

    description:
      "A specialist consultation helps determine the possible cause of gynecomastia and whether observation, medical evaluation or surgical treatment may be appropriate.",

    items: [
      {
        title: "Persistent enlargement",
        text:
          "Breast enlargement that continues over time may require specialist assessment."
      },
      {
        title: "Chest discomfort",
        text:
          "Pain, tenderness or discomfort may be evaluated to understand the underlying cause."
      },
      {
        title: "Uneven chest appearance",
        text:
          "One-sided or uneven enlargement can be assessed by a specialist."
      },
      {
        title: "Personal concern",
        text:
          "If chest enlargement affects confidence or daily life, treatment options can be discussed."
      }
    ]
  },

  procedures: {
    eyebrow: "Treatment Options",

    title: "Treatment planned around your needs",

    description:
      "Treatment depends on the underlying cause, the amount of breast tissue and your individual clinical assessment.",

    items: [
      {
        title: "Specialist Evaluation",
        text:
          "Your condition and medical history are reviewed to understand the possible cause."
      },
      {
        title: "Medical Assessment",
        text:
          "Relevant clinical evaluation may be recommended when an underlying cause needs to be investigated."
      },
      {
        title: "Gynecomastia Surgery",
        text:
          "Surgical treatment may be considered when persistent excess breast tissue requires correction."
      },
      {
        title: "Personalized Treatment Plan",
        text:
          "Your specialist explains the appropriate treatment approach based on your individual condition."
      }
    ]
  },

  finance: [
    {
      title: "Insurance Support",
      text:
        "Our care team can help you understand the documentation and insurance-related process for eligible surgical care."
    },
    {
      title: "Payment Assistance",
      text:
        "Ask our care team about available payment and financing options for eligible procedures."
    }
  ],

  journey: [
    {
      label: "Step 01",
      title: "Meet Your Specialist",
      text:
        "Discuss your concerns, medical history and treatment expectations with the specialist."
    },
    {
      label: "Step 02",
      title: "Evaluation",
      text:
        "Your chest condition is assessed and relevant clinical information is reviewed."
    },
    {
      label: "Step 03",
      title: "Treatment Planning",
      text:
        "Your specialist explains the appropriate treatment options and preparation."
    },
    {
      label: "Step 04",
      title: "Treatment",
      text:
        "The planned treatment is performed according to the appropriate clinical protocols."
    },
    {
      label: "Step 05",
      title: "Recovery",
      text:
        "You receive post-treatment guidance and instructions to support your recovery."
    },
    {
      label: "Step 06",
      title: "Follow-up",
      text:
        "Your specialist reviews your recovery and provides guidance for continued care."
    }
  ],

  trust: {

    title: "Gynecomastia care focused on you",

    description:
      "Niva Surgery focuses on clear communication, appropriate treatment planning and patient support throughout your gynecomastia treatment journey.",

    items: [
      {
        title: "Specialist-led care",
        text:
          "Your condition is evaluated by the appropriate specialist before treatment is planned."
      },
      {
        title: "Clear treatment planning",
        text:
          "Treatment options and expected next steps are explained clearly before proceeding."
      },
      {
        title: "Patient safety",
        text:
          "Clinical decisions are made with attention to patient safety and individual needs."
      },
      {
        title: "Recovery support",
        text:
          "Post-treatment guidance and follow-up support continue throughout your recovery."
      }
    ]
  },

  faqs: [
    {
      question: "What is gynecomastia?",

      answer:
        "Gynecomastia is enlargement of male breast tissue that may affect one or both sides of the chest. A specialist evaluation can help determine the possible cause and appropriate treatment."
    },
    {
      question: "Does every case of gynecomastia require surgery?",

      answer:
        "No. Treatment depends on the cause, duration and severity of the condition. A specialist will assess your condition before recommending an appropriate approach."
    },
    {
      question: "How do I book a gynecomastia consultation?",

      answer:
        "You can request a consultation through Niva Surgery. Our care team can help connect you with the appropriate specialist."
    },
    {
      question: "What happens during the first consultation?",

      answer:
        "The specialist discusses your concerns and medical history, examines the chest and explains whether further evaluation or treatment may be appropriate."
    },
    {
      question: "How long does recovery take after gynecomastia surgery?",

      answer:
        "Recovery varies depending on the procedure and individual factors. Your specialist will explain the expected recovery period and post-treatment instructions for your case."
    }
  ]

},

"breast-surgery": {

  name: "Breast Surgery",

  category: "Breast & General Surgery",

  shortTitle: "Breast Surgical Evaluation & Treatment",

  heroDescription:
    "Evaluation and surgical treatment planning for breast lumps, benign breast conditions and other conditions requiring surgical assessment.",

  definitionEyebrow: "Understanding Breast Conditions",

  definitionTitle: "What are Breast Conditions?",

  definition:
    "Breast conditions can range from benign lumps and cysts to conditions that require further investigation or surgical treatment. A surgeon can assess breast symptoms, review relevant investigations and discuss the most appropriate treatment options.",

  images: [
    {
      src: "images/surgery/bs.png",
      alt: "Breast surgery care at Niva Surgery"
    },
    {
      src: "images/surgery/breast2.png",
      alt: "Breast surgical consultation at Niva Surgery"
    }
  ],

  conditions: [
    {
      title: "Breast Lumps",
      text:
        "A breast lump may have several causes and should be evaluated by a qualified healthcare professional."
    },
    {
      title: "Benign Breast Conditions",
      text:
        "Some breast conditions are non-cancerous but may still require monitoring or treatment depending on symptoms."
    },
    {
      title: "Breast Pain",
      text:
        "Persistent or unexplained breast discomfort should be discussed with a healthcare professional."
    }
  ],

  treatment: {
    eyebrow: "When To Seek Surgical Advice",
    title: "When should breast conditions be evaluated?",

    description:
      "A surgeon can evaluate breast symptoms and relevant investigations to determine whether observation, further testing or surgical treatment may be appropriate.",

    items: [
      {
        title: "New breast lump",
        text:
          "A newly noticed or persistent lump should be clinically evaluated."
      },
      {
        title: "Persistent breast symptoms",
        text:
          "Ongoing pain, swelling or other breast changes should be discussed with a healthcare professional."
      },
      {
        title: "Abnormal investigation",
        text:
          "An abnormal imaging or biopsy result may require specialist surgical evaluation."
      },
      {
        title: "Rapid or concerning changes",
        text:
          "Sudden or significant breast changes require prompt medical assessment."
      }
    ]
  },

  procedures: {
    eyebrow: "Breast Surgical Care",

    title: "Breast surgery options",

    description:
      "Your surgeon will recommend treatment based on your symptoms, examination findings and relevant investigations.",

    items: [
      {
        title: "Breast Lump Excision",
        text:
          "Selected breast lumps may be surgically removed when clinically indicated."
      },
      {
        title: "Surgical Evaluation",
        text:
          "Your surgeon reviews your symptoms, examination and investigation reports before recommending treatment."
      },
      {
        title: "Individual Treatment Planning",
        text:
          "The recommended procedure and expected recovery are explained according to your condition."
      }
    ]
  },

  finance: [
    {
      title: "Insurance Support",
      text:
        "Our care team can guide you through the documentation required for planned surgical treatment."
    },
    {
      title: "Payment & Financing",
      text:
        "Ask our team about available payment and financing options for eligible procedures."
    }
  ],

  journey: [
    {
      label: "Consultation",
      title: "Meet Your Surgeon",
      text:
        "Discuss your breast symptoms, medical history and previous reports with your surgical specialist."
    },
    {
      label: "Evaluation",
      title: "Review Your Reports",
      text:
        "Your clinical examination and relevant imaging or laboratory reports are reviewed."
    },
    {
      label: "Planning",
      title: "Treatment Decision",
      text:
        "The recommended treatment approach and any required procedure are explained."
    },
    {
      label: "Treatment",
      title: "Breast Surgery",
      text:
        "The planned surgical procedure is performed according to your individual treatment plan."
    },
    {
      label: "Recovery",
      title: "Post-operative Care",
      text:
        "You receive instructions for wound care, recovery and returning to normal activities."
    },
    {
      label: "Follow-up",
      title: "Recovery Review",
      text:
        "Your surgeon reviews your recovery and discusses any further care required."
    }
  ],

  trust: {
    title: "Breast care made easier to understand",

    description:
      "Our approach focuses on careful evaluation, clear communication and individualized surgical planning.",

    items: [
      {
        title: "Condition-focused evaluation",
        text:
          "Your symptoms, examination findings and investigations are considered before treatment is recommended."
      },
      {
        title: "Individual treatment planning",
        text:
          "Treatment options are discussed according to your specific condition and clinical needs."
      },
      {
        title: "Clear preparation",
        text:
          "You receive guidance about preparing for your planned procedure."
      },
      {
        title: "Recovery support",
        text:
          "Post-operative guidance helps you understand the recovery process and follow-up care."
      }
    ]
  },

  faqs: [
    {
      question: "Does every breast lump require surgery?",
      answer:
        "No. Treatment depends on the cause of the lump, clinical findings, investigations and symptoms. Your surgeon will recommend the appropriate next step."
    },
    {
      question: "What should I do if I notice a new breast lump?",
      answer:
        "A new or persistent breast lump should be evaluated by a qualified healthcare professional."
    },
    {
      question: "Can benign breast lumps be removed?",
      answer:
        "Some benign breast lumps may be removed when clinically appropriate. Your surgeon will discuss whether surgery is suitable for your condition."
    },
    {
      question: "Will I need breast imaging before surgery?",
      answer:
        "Depending on your symptoms and clinical assessment, your surgeon may recommend appropriate breast imaging or other investigations before deciding on treatment."
    },
    {
      question: "What is recovery like after breast surgery?",
      answer:
        "Recovery varies depending on the type of procedure and individual health factors. Your surgeon will provide specific post-operative instructions."
    }
  ]

},


"appendix-surgery": {

  name: "Appendix Surgery",

  category: "General & Laparoscopic Surgery",

  shortTitle: "Appendix & Appendicitis Surgical Care",

  heroDescription:
    "Evaluation and surgical treatment planning for appendicitis and other conditions affecting the appendix.",

  definitionEyebrow: "Understanding Appendix Problems",

  definitionTitle: "What is Appendicitis?",

  definition:
    "Appendicitis occurs when the appendix becomes inflamed and may require prompt medical assessment. Symptoms can vary between patients. When surgery is recommended, a surgeon will assess the condition and discuss the appropriate surgical approach.",

  images: [
    {
      src: "images/surgery/app.png",
      alt: "Appendix surgery care at Niva Surgery"
    },
    {
      src: "images/surgery/app.png",
      alt: "Appendix surgical consultation at Niva Surgery"
    }
  ],

  conditions: [
    {
      title: "Appendicitis",
      text:
        "Inflammation of the appendix can cause abdominal pain and requires timely medical evaluation."
    },
    {
      title: "Right Lower Abdominal Pain",
      text:
        "Appendix-related problems may cause pain that develops or becomes more noticeable in the lower right abdomen."
    },
    {
      title: "Associated Symptoms",
      text:
        "Appendicitis may be associated with symptoms such as nausea, vomiting, fever or loss of appetite."
    }
  ],

  treatment: {
    eyebrow: "When To Seek Surgical Advice",

    title: "When should appendix problems be evaluated?",

    description:
      "Suspected appendicitis requires medical assessment. A surgeon can evaluate your symptoms and investigations to determine the appropriate treatment.",

    items: [
      {
        title: "Persistent abdominal pain",
        text:
          "Ongoing or worsening abdominal pain should be assessed promptly."
      },
      {
        title: "Right lower abdominal pain",
        text:
          "Pain in the lower right abdomen may require evaluation for appendicitis."
      },
      {
        title: "Fever or vomiting",
        text:
          "Fever, nausea or vomiting together with abdominal pain should be medically assessed."
      },
      {
        title: "Sudden or severe symptoms",
        text:
          "Severe or rapidly worsening abdominal symptoms require prompt medical attention."
      }
    ]
  },

  procedures: {
    eyebrow: "Appendix Treatment",

    title: "Appendix surgery options",

    description:
      "Your surgeon will recommend treatment based on your symptoms, examination, investigations and clinical assessment.",

    items: [
      {
        title: "Laparoscopic Appendectomy",
        text:
          "A minimally invasive surgical approach used to remove the appendix in selected patients."
      },
      {
        title: "Surgical Evaluation",
        text:
          "Your surgeon assesses your symptoms and investigations before recommending the appropriate treatment."
      },
      {
        title: "Individual Recovery Planning",
        text:
          "Preparation and recovery guidance are explained according to your procedure and clinical condition."
      }
    ]
  },

  finance: [
    {
      title: "Insurance Support",
      text:
        "Our care team can guide you through the documentation required for planned or eligible surgical treatment."
    },
    {
      title: "Payment & Financing",
      text:
        "Ask our team about available payment and financing options for eligible procedures."
    }
  ],

  journey: [
    {
      label: "Consultation",
      title: "Meet Your Surgeon",
      text:
        "Discuss abdominal symptoms, medical history and previous reports with your surgical specialist."
    },
    {
      label: "Diagnosis",
      title: "Review Your Reports",
      text:
        "Your examination and relevant laboratory or imaging investigations are reviewed."
    },
    {
      label: "Planning",
      title: "Treatment Decision",
      text:
        "The recommended treatment and surgical approach are explained based on your condition."
    },
    {
      label: "Treatment",
      title: "Appendix Surgery",
      text:
        "The planned appendectomy is performed according to your treatment plan."
    },
    {
      label: "Recovery",
      title: "Post-operative Care",
      text:
        "You receive instructions for wound care, recovery and returning to normal activities."
    },
    {
      label: "Follow-up",
      title: "Recovery Review",
      text:
        "Your surgeon reviews your recovery and provides further guidance when required."
    }
  ],

  trust: {
    title: "Appendix care made easier to understand",

    description:
      "Our approach focuses on timely evaluation, clear treatment planning and supportive recovery care.",

    items: [
      {
        title: "Prompt clinical evaluation",
        text:
          "Abdominal symptoms and investigations are assessed before treatment is recommended."
      },
      {
        title: "Minimally invasive options",
        text:
          "Laparoscopic approaches can be discussed when clinically appropriate."
      },
      {
        title: "Clear preparation",
        text:
          "You receive guidance about the planned procedure and preparation requirements."
      },
      {
        title: "Recovery support",
        text:
          "Post-operative instructions help you understand wound care, activity and follow-up."
      }
    ]
  },

  faqs: [
    {
      question: "What is appendicitis?",
      answer:
        "Appendicitis is inflammation of the appendix and can require prompt medical assessment and treatment."
    },
    {
      question: "What are common symptoms of appendicitis?",
      answer:
        "Symptoms can include abdominal pain, nausea, vomiting, fever and loss of appetite. Symptoms vary between individuals and should be medically assessed."
    },
    {
      question: "Does appendicitis always require surgery?",
      answer:
        "Treatment depends on the individual clinical situation. Your surgeon will assess your condition and recommend the appropriate treatment."
    },
    {
      question: "Can appendix surgery be laparoscopic?",
      answer:
        "Laparoscopic appendectomy is a commonly used surgical approach for selected patients. Your surgeon will determine whether it is appropriate for you."
    },
    {
      question: "What is recovery like after appendix surgery?",
      answer:
        "Recovery varies depending on the procedure and individual health factors. Your surgeon will provide specific post-operative instructions."
    }
  ]

},

    /* =====================================================
       LAPAROSCOPIC SURGERY
    ===================================================== */

    "laparoscopic-surgery": {

      name: "Laparoscopic Surgery",

      category: "Minimally Invasive Surgery",

      shortTitle: "Minimally Invasive Surgical Care",

      heroDescription:
        "Specialist evaluation for conditions where minimally invasive surgical approaches may be appropriate.",

      definitionEyebrow: "Understanding Laparoscopic Surgery",

      definitionTitle: "What is Laparoscopic Surgery?",

      definition:
        "Laparoscopic surgery is a minimally invasive surgical approach in which specially designed instruments and a camera are used through small incisions. Whether this approach is suitable depends on the patient's condition and the surgeon's clinical assessment.",

      images: [
        {
          src: "images/surgery/lap.png",
          alt: "Laparoscopic surgical care at Niva Surgery"
        },
        {
          src: "images/surgery/lap.png",
          alt: "Minimally invasive surgery at Niva Surgery"
        }
      ],

      conditions: [
        {
          title: "Minimally Invasive Approach",
          text:
            "Some procedures can be performed through smaller surgical access points."
        },
        {
          title: "Abdominal Procedures",
          text:
            "Laparoscopic techniques are commonly considered for selected abdominal procedures."
        },
        {
          title: "Individual Assessment",
          text:
            "Suitability depends on the diagnosis, medical history and surgeon's assessment."
        }
      ],

      treatment: {
        eyebrow: "Treatment Planning",
        title: "Is laparoscopic surgery suitable for you?",
        description:
          "Your surgeon determines the safest and most appropriate surgical approach after evaluation.",
        items: [
          {
            title: "Clinical evaluation",
            text:
              "Your symptoms and medical history are reviewed before deciding on treatment."
          },
          {
            title: "Diagnostic review",
            text:
              "Relevant investigations and imaging may be reviewed during treatment planning."
          },
          {
            title: "Procedure selection",
            text:
              "The surgical approach is selected according to your condition and clinical needs."
          },
          {
            title: "Recovery planning",
            text:
              "Your team explains preparation and expected recovery before treatment."
          }
        ]
      },

      procedures: {
        eyebrow: "Surgical Options",
        title: "Minimally invasive procedures",
        description:
          "The exact procedure depends on your diagnosis and surgical assessment.",
        items: [
          {
            title: "Laparoscopic Hernia Repair",
            text:
              "A minimally invasive approach may be considered for selected hernia cases."
          },
          {
            title: "Laparoscopic Gallbladder Surgery",
            text:
              "A commonly used minimally invasive approach for selected gallbladder conditions."
          },
          {
            title: "Other Laparoscopic Procedures",
            text:
              "Your surgeon will explain whether a laparoscopic approach is appropriate."
          }
        ]
      },

      finance: [
        {
          title: "Insurance Support",
          text:
            "Ask our care team about insurance documentation and the process for planned surgical treatment."
        },
        {
          title: "Payment Options",
          text:
            "Payment and financing options may be available depending on the procedure and eligibility."
        }
      ],

      journey: [
        {
          label: "Consultation",
          title: "Meet Your Surgeon",
          text:
            "Discuss your condition and understand whether minimally invasive surgery may be suitable."
        },
        {
          label: "Evaluation",
          title: "Review & Diagnosis",
          text:
            "Your medical history, symptoms and relevant investigations are assessed."
        },
        {
          label: "Planning",
          title: "Choose the Approach",
          text:
            "Your surgeon explains the recommended surgical approach and preparation."
        },
        {
          label: "Treatment",
          title: "Your Procedure",
          text:
            "The planned procedure is carried out using the selected surgical approach."
        },
        {
          label: "Recovery",
          title: "Post-operative Care",
          text:
            "You receive recovery guidance and instructions after the procedure."
        },
        {
          label: "Follow-up",
          title: "Review",
          text:
            "Your surgical team reviews your progress during follow-up care."
        }
      ],

      trust: {
        title: "Thoughtful surgical planning",
        description:
          "Every surgical approach should be selected according to the patient's condition rather than a one-size-fits-all method.",
        items: [
          {
            title: "Individual assessment",
            text:
              "The surgical approach is selected after evaluating your condition."
          },
          {
            title: "Clear explanation",
            text:
              "Your surgeon explains the recommended procedure and expected care."
          },
          {
            title: "Safety-focused care",
            text:
              "Treatment planning takes your health and clinical requirements into account."
          },
          {
            title: "Recovery guidance",
            text:
              "Post-operative instructions help you understand the recovery process."
          }
        ]
      },

      faqs: [
        {
          question: "What is laparoscopic surgery?",
          answer:
            "Laparoscopic surgery is a minimally invasive surgical approach using a camera and specialised instruments through small incisions."
        },
        {
          question: "Is laparoscopic surgery suitable for everyone?",
          answer:
            "No. The appropriate surgical approach depends on the condition, medical history and surgeon's assessment."
        },
        {
          question: "What happens during the consultation?",
          answer:
            "Your surgeon reviews your symptoms, medical history and investigations and discusses the available treatment options."
        },
        {
          question: "How long is recovery?",
          answer:
            "Recovery varies by procedure and patient. Your surgeon will explain the expected recovery for your specific treatment."
        },
        {
          question: "Can I ask about open surgery as well?",
          answer:
            "Yes. Your surgeon can explain the available approaches and why one may be recommended for your particular condition."
        }
      ]

    },


    /* =====================================================
       HERNIA SURGERY
    ===================================================== */

    "hernia-surgery": {

      name: "Hernia Surgery",

      category: "General Surgery",

      shortTitle: "Hernia Evaluation & Surgical Care",

      heroDescription:
        "Specialist evaluation and treatment planning for abdominal wall hernias and related conditions.",

      definitionEyebrow: "Understanding Hernia",

      definitionTitle: "What is a Hernia?",

      definition:
        "A hernia occurs when an internal part of the body pushes through a weakened area of the surrounding muscle or tissue. Hernias can occur in different locations and may cause a visible bulge, discomfort or pain. A surgical consultation helps determine the appropriate treatment.",

      images: [
        {
          src: "images/surgery/hernia1.png",
          alt: "Hernia surgical care at Niva Surgery"
        },
        {
          src: "images/surgery/hernia2.png",
          alt: "Hernia treatment consultation at Niva Surgery"
        }
      ],

      conditions: [
        {
          title: "Visible Bulge",
          text:
            "A swelling or bulge may become noticeable in the abdomen or groin."
        },
        {
          title: "Discomfort",
          text:
            "Some people experience pressure, discomfort or pain, especially with activity."
        },
        {
          title: "Changes Over Time",
          text:
            "A hernia may change in size or symptoms and should be assessed by a surgeon."
        }
      ],

      treatment: {
        eyebrow: "When To See A Surgeon",
        title: "When should a hernia be evaluated?",
        description:
          "A surgical assessment helps determine the type of hernia and whether treatment is required.",
        items: [
          {
            title: "Persistent bulge",
            text:
              "A persistent or increasing swelling should be clinically assessed."
          },
          {
            title: "Pain or discomfort",
            text:
              "Pain or discomfort associated with a hernia warrants medical evaluation."
          },
          {
            title: "Activity-related symptoms",
            text:
              "Symptoms that become noticeable during lifting, coughing or activity should be discussed with a surgeon."
          },
          {
            title: "Sudden changes",
            text:
              "Sudden severe symptoms require prompt medical attention."
          }
        ]
      },

      procedures: {
        eyebrow: "Hernia Treatment",
        title: "Hernia repair options",
        description:
          "The appropriate surgical approach depends on the type, location and characteristics of the hernia.",
        items: [
          {
            title: "Open Hernia Repair",
            text:
              "A surgical approach using an incision over the affected area."
          },
          {
            title: "Laparoscopic Hernia Repair",
            text:
              "A minimally invasive approach may be suitable for selected patients."
          },
          {
            title: "Individual Treatment Planning",
            text:
              "Your surgeon will recommend the appropriate approach after evaluation."
          }
        ]
      },

      finance: [
        {
          title: "Insurance Assistance",
          text:
            "Our team can guide you regarding documentation and the insurance process for planned hernia treatment."
        },
        {
          title: "EMI & Payment Support",
          text:
            "Ask the care team about available payment or financing options for eligible treatment."
        }
      ],

      journey: [
        {
          label: "Step 01",
          title: "Surgical Consultation",
          text:
            "Discuss the bulge, discomfort and other symptoms with a surgical specialist."
        },
        {
          label: "Step 02",
          title: "Diagnosis",
          text:
            "The surgeon evaluates the hernia and reviews relevant investigations when needed."
        },
        {
          label: "Step 03",
          title: "Treatment Planning",
          text:
            "The recommended repair method and preparation are explained clearly."
        },
        {
          label: "Step 04",
          title: "Hernia Repair",
          text:
            "The planned surgical procedure is performed according to the treatment plan."
        },
        {
          label: "Step 05",
          title: "Recovery",
          text:
            "You receive post-operative instructions and guidance for recovery."
        },
        {
          label: "Step 06",
          title: "Follow-up",
          text:
            "Your surgeon reviews healing and recovery during follow-up."
        }
      ],

      trust: {
        title: "Hernia care with clear guidance",
        description:
          "From diagnosis to recovery, the goal is to help you understand your condition and treatment options.",
        items: [
          {
            title: "Specialist evaluation",
            text:
              "Your symptoms and condition are reviewed before treatment is recommended."
          },
          {
            title: "Treatment choice",
            text:
              "The surgical approach is selected according to your individual condition."
          },
          {
            title: "Clear communication",
            text:
              "The procedure and recovery process are explained before treatment."
          },
          {
            title: "Follow-up care",
            text:
              "Post-surgery recovery is supported through appropriate follow-up."
          }
        ]
      },

      faqs: [
        {
          question: "What is a hernia?",
          answer:
            "A hernia occurs when an internal part of the body pushes through a weakened area of surrounding muscle or tissue."
        },
        {
          question: "Does every hernia require surgery?",
          answer:
            "Treatment depends on the type of hernia, symptoms and clinical assessment. Your surgeon will advise you on the appropriate approach."
        },
        {
          question: "What are common symptoms of a hernia?",
          answer:
            "A visible bulge, discomfort, pressure or pain can occur depending on the type and location of the hernia."
        },
        {
          question: "Can hernia surgery be done laparoscopically?",
          answer:
            "A laparoscopic approach may be suitable for selected patients. Your surgeon will determine the appropriate method after evaluation."
        },
        {
          question: "How long does recovery take?",
          answer:
            "Recovery varies according to the procedure and individual health. Your surgeon will provide procedure-specific recovery guidance."
        }
      ]

    },


    /* =====================================================
       GALLBLADDER SURGERY
    ===================================================== */

    "gallbladder-surgery": {

      name: "Gallbladder Surgery",

      category: "General & Laparoscopic Surgery",

      shortTitle: "Gallbladder & Gallstone Surgical Care",

      heroDescription:
        "Evaluation and surgical treatment planning for gallstones and gallbladder-related conditions.",

      definitionEyebrow: "Understanding Gallbladder Problems",

      definitionTitle: "What is Gallbladder Disease?",

      definition:
        "The gallbladder stores bile that helps the body digest fats. Gallstones and other gallbladder problems can cause abdominal discomfort and digestive symptoms. When symptoms or complications require treatment, a surgeon can assess the condition and discuss appropriate options.",

      images: [
        {
          src: "images/surgery/gul1.png",
          alt: "Gallbladder surgery care at Niva Surgery"
        },
        {
          src: "images/surgery/gul2.png",
          alt: "Gallbladder surgical consultation at Niva Surgery"
        }
      ],

      conditions: [
        {
          title: "Gallstones",
          text:
            "Gallstones may be present without symptoms or may cause discomfort and other problems."
        },
        {
          title: "Abdominal Pain",
          text:
            "Gallbladder-related problems can cause pain in the upper abdomen."
        },
        {
          title: "Digestive Symptoms",
          text:
            "Some patients may experience nausea, bloating or discomfort after meals."
        }
      ],

      treatment: {
        eyebrow: "When To Seek Surgical Advice",
        title: "When should gallbladder problems be evaluated?",
        description:
          "A surgeon can assess your symptoms and investigations to determine the appropriate next step.",
        items: [
          {
            title: "Repeated abdominal pain",
            text:
              "Recurring pain should be evaluated to understand its cause."
          },
          {
            title: "Known gallstones",
            text:
              "Patients with symptomatic gallstones may benefit from surgical evaluation."
          },
          {
            title: "Digestive symptoms",
            text:
              "Persistent digestive discomfort should be discussed with a healthcare professional."
          },
          {
            title: "Acute symptoms",
            text:
              "Sudden or severe symptoms require prompt medical assessment."
          }
        ]
      },

      procedures: {
        eyebrow: "Gallbladder Treatment",
        title: "Gallbladder surgery options",
        description:
          "Your surgeon will recommend treatment based on your symptoms, investigations and clinical assessment.",
        items: [
          {
            title: "Laparoscopic Cholecystectomy",
            text:
              "A minimally invasive surgical approach used for selected gallbladder conditions."
          },
          {
            title: "Surgical Evaluation",
            text:
              "Your surgeon reviews your condition before recommending treatment."
          },
          {
            title: "Individual Recovery Planning",
            text:
              "Preparation and recovery guidance are explained according to your procedure."
          }
        ]
      },

      finance: [
        {
          title: "Insurance Support",
          text:
            "Our care team can guide you through the documentation required for planned surgical treatment."
        },
        {
          title: "Payment & Financing",
          text:
            "Ask our team about available payment and financing options for eligible procedures."
        }
      ],

      journey: [
        {
          label: "Consultation",
          title: "Meet Your Surgeon",
          text:
            "Discuss abdominal symptoms and previous reports with your surgical specialist."
        },
        {
          label: "Diagnosis",
          title: "Review Your Reports",
          text:
            "Your relevant investigations and imaging are reviewed."
        },
        {
          label: "Planning",
          title: "Treatment Decision",
          text:
            "The recommended treatment and surgical approach are explained."
        },
        {
          label: "Treatment",
          title: "Gallbladder Surgery",
          text:
            "The planned procedure is performed according to your treatment plan."
        },
        {
          label: "Recovery",
          title: "Post-operative Care",
          text:
            "You receive instructions for recovery and returning to normal activities."
        },
        {
          label: "Follow-up",
          title: "Recovery Review",
          text:
            "Your surgeon reviews your recovery during follow-up."
        }
      ],

      trust: {
        title: "Gallbladder care made easier to understand",
        description:
          "Our approach focuses on explaining the condition, treatment options and recovery process clearly.",
        items: [
          {
            title: "Condition-focused evaluation",
            text:
              "Symptoms and investigations are considered before treatment is recommended."
          },
          {
            title: "Minimally invasive options",
            text:
              "Appropriate minimally invasive approaches can be discussed when clinically suitable."
          },
          {
            title: "Clear preparation",
            text:
              "You receive instructions about preparing for your planned procedure."
          },
          {
            title: "Recovery support",
            text:
              "Post-operative guidance helps you understand the recovery journey."
          }
        ]
      },

      faqs: [
        {
          question: "What causes gallstones?",
          answer:
            "Gallstones form from substances in bile. Their causes and significance vary between individuals and should be assessed clinically when symptoms occur."
        },
        {
          question: "Do all gallstones require surgery?",
          answer:
            "Not necessarily. Treatment depends on symptoms, complications and clinical assessment."
        },
        {
          question: "What is gallbladder removal surgery?",
          answer:
            "Gallbladder removal, also called cholecystectomy, is a procedure in which the gallbladder is surgically removed."
        },
        {
          question: "Can gallbladder surgery be laparoscopic?",
          answer:
            "Laparoscopic surgery is commonly considered for selected patients. Your surgeon will determine whether it is appropriate for you."
        },
        {
          question: "What is recovery like?",
          answer:
            "Recovery varies between patients and depends on the procedure and overall health. Your surgeon will provide specific instructions."
        }
      ]

    },


    /* =====================================================
       PILES & FISSURE
    ===================================================== */

"piles-surgery": {

  name: "Piles, Fistula & Fissure",

  category: "Proctology / General Surgery",

  shortTitle: "Specialist Care for Piles, Fistula & Fissure",

  heroDescription:
    "Confidential care for piles, anal fistula and fissure, from diagnosis and treatment planning to recovery.",

  definitionEyebrow: "Understanding Piles, Fistula & Fissure",

  definitionTitle: "What are Piles, Fistula and Fissure?",

  definition:
    "Piles are swollen blood vessels in or around the anal canal. An anal fissure is a small tear in the lining of the anus, while an anal fistula is an abnormal tunnel that can develop between the anal canal and nearby skin. These conditions may cause pain, bleeding, swelling, discharge or discomfort and may require medical or surgical treatment depending on the condition.",

  images: [
    {
      src: "images/surgery/p1.png",
      alt: "Piles fistula and fissure consultation at Niva Surgery"
    },
    {
      src: "images/surgery/p2.png",
      alt: "Piles fistula and fissure treatment at Niva Surgery"
    }
  ],

  conditions: [
    {
      title: "Piles",
      text:
        "Swollen blood vessels around the anal canal that may cause bleeding, itching, swelling or discomfort."
    },
    {
      title: "Anal Fissure",
      text:
        "A small tear in the anal lining that can cause sharp pain and bleeding, especially during bowel movements."
    },
    {
      title: "Anal Fistula",
      text:
        "An abnormal tunnel near the anus that may cause recurring swelling, pain or discharge."
    }
  ],

  treatment: {
    eyebrow: "When To Seek Specialist Advice",

    title: "When should you consult a surgeon?",

    description:
      "Persistent or recurring symptoms should be evaluated to identify the condition and choose the appropriate treatment.",

    items: [
      {
        title: "Bleeding",
        text:
          "Bleeding during or after bowel movements should be evaluated, especially when it keeps returning."
      },
      {
        title: "Pain or discomfort",
        text:
          "Persistent or severe pain around the anal area may require specialist assessment."
      },
      {
        title: "Swelling or lump",
        text:
          "A recurring lump, swelling or tenderness around the anus should be checked."
      },
      {
        title: "Discharge or recurring symptoms",
        text:
          "Persistent discharge or repeated episodes of swelling and pain may require evaluation for an anal fistula."
      }
    ]
  },

  procedures: {
    eyebrow: "Treatment Options",

    title: "Treatment depends on your condition",

    description:
      "Not every patient needs surgery. Your surgeon will assess the condition and recommend the most suitable treatment.",

    items: [
      {
        title: "Medical Treatment",
        text:
          "Some piles and fissures may improve with medicines, dietary changes and appropriate lifestyle measures."
      },
      {
        title: "Piles Treatment",
        text:
          "Depending on the severity, piles may be treated with medication, procedures or surgery."
      },
      {
        title: "Fissure Treatment",
        text:
          "Treatment is selected according to the severity and duration of the fissure."
      },
      {
        title: "Fistula Treatment",
        text:
          "An anal fistula may require a surgical procedure to treat the abnormal tract."
      }
    ]
  },

  finance: [
    {
      title: "Insurance Guidance",
      text:
        "Ask our care team about insurance documentation and support for eligible procedures."
    },
    {
      title: "Payment Options",
      text:
        "Available payment and financing options can be discussed with our care team."
    }
  ],

  journey: [
    {
      label: "Step 01",
      title: "Private Consultation",
      text:
        "Discuss your symptoms and concerns confidentially with the surgical team."
    },
    {
      label: "Step 02",
      title: "Diagnosis & Assessment",
      text:
        "Your symptoms, medical history and condition are assessed to understand the cause."
    },
    {
      label: "Step 03",
      title: "Treatment Planning",
      text:
        "Your surgeon explains the suitable medical, procedural or surgical options."
    },
    {
      label: "Step 04",
      title: "Treatment",
      text:
        "The recommended treatment is provided according to your condition."
    },
    {
      label: "Step 05",
      title: "Recovery",
      text:
        "You receive clear guidance and instructions to support your recovery."
    },
    {
      label: "Step 06",
      title: "Follow-up",
      text:
        "Your symptoms and recovery are reviewed when follow-up care is required."
    }
  ],

  trust: {

    title: "Confidential care focused on you",

    description:
      "Niva Surgery provides a comfortable and private environment for discussing sensitive conditions with clear treatment guidance.",

    items: [
      {
        title: "Confidential consultation",
        text:
          "Your concerns can be discussed privately with the appropriate surgical specialist."
      },
      {
        title: "Accurate assessment",
        text:
          "Your symptoms are evaluated carefully before treatment is recommended."
      },
      {
        title: "Clear treatment options",
        text:
          "Medical, procedural and surgical options are explained based on your condition."
      },
      {
        title: "Recovery support",
        text:
          "You receive guidance and follow-up support throughout your recovery."
      }
    ]
  },

  faqs: [
    {
      question: "What are piles?",

      answer:
        "Piles, also called hemorrhoids, are swollen blood vessels in or around the anal canal. They may cause bleeding, itching, swelling or discomfort."
    },

    {
      question: "What is an anal fissure?",

      answer:
        "An anal fissure is a small tear in the lining of the anus. It can cause sharp pain and bleeding, particularly during bowel movements."
    },

    {
      question: "What is an anal fistula?",

      answer:
        "An anal fistula is an abnormal tunnel that develops between the anal canal and nearby skin. It may cause recurring swelling, pain or discharge."
    },

    {
      question: "Do piles, fistula and fissure always require surgery?",

      answer:
        "No. Treatment depends on the type, severity and duration of the condition. Some cases may improve with non-surgical treatment, while others may require a procedure or surgery."
    },

    {
      question: "When should I see a surgeon?",

      answer:
        "Persistent bleeding, pain, swelling, discharge or recurring symptoms should be evaluated by a healthcare professional."
    },

    {
      question: "Is the consultation confidential?",

      answer:
        "Yes. Sensitive concerns can be discussed privately with the surgical team in a professional and respectful environment."
    }
  ]

},
    /* =====================================================
       FRACTURE SURGERY
    ===================================================== */

    "fracture-surgery": {

      name: "Fracture Surgery",

      category: "Orthopaedic Surgery",

      shortTitle: "Orthopaedic Fracture Evaluation & Surgical Care",

      heroDescription:
        "Orthopaedic assessment and treatment planning for fractures affecting bones and joints.",

      definitionEyebrow: "Understanding Fractures",

      definitionTitle: "What is a Fracture?",

      definition:
        "A fracture is a break or crack in a bone. Treatment depends on the location and type of fracture, the alignment of the bone and the patient's overall condition. Some fractures can be treated without surgery, while others may require surgical fixation.",

      images: [
        {
          src: "images/surgery/fracture1.png",
          alt: "Fracture surgery and orthopaedic care at Niva Surgery"
        },
        {
          src: "images/surgery/fracture2.png",
          alt: "Orthopaedic fracture treatment at Niva Surgery"
        }
      ],

      conditions: [
        {
          title: "Broken Bone",
          text:
            "A fracture may occur after a fall, accident, sports injury or other trauma."
        },
        {
          title: "Pain & Swelling",
          text:
            "Pain, swelling and difficulty using the affected area are common after a fracture."
        },
        {
          title: "Movement Difficulty",
          text:
            "Some fractures can affect normal movement or weight-bearing."
        }
      ],

      treatment: {
        eyebrow: "Fracture Assessment",
        title: "When might fracture surgery be needed?",
        description:
          "The need for surgery depends on the type, location and stability of the fracture.",
        items: [
          {
            title: "Displaced fracture",
            text:
              "Some fractures where the bone alignment is significantly affected may require surgical assessment."
          },
          {
            title: "Unstable fracture",
            text:
              "Some unstable fractures may require fixation to support healing."
          },
          {
            title: "Complex injury",
            text:
              "Complex fractures may need specialist orthopaedic management."
          },
          {
            title: "Recovery concerns",
            text:
              "Treatment is planned to support safe recovery and restoration of function."
          }
        ]
      },

      procedures: {
        eyebrow: "Orthopaedic Treatment",
        title: "Fracture treatment options",
        description:
          "Your orthopaedic surgeon determines the appropriate treatment after reviewing the fracture.",
        items: [
          {
            title: "Fracture Fixation",
            text:
              "Selected fractures may require surgical fixation to maintain appropriate alignment."
          },
          {
            title: "Bone & Joint Evaluation",
            text:
              "Associated bone, joint and soft-tissue concerns may be assessed."
          },
          {
            title: "Recovery Planning",
            text:
              "Rehabilitation and follow-up are planned according to the injury."
          }
        ]
      },

      finance: [
        {
          title: "Insurance Assistance",
          text:
            "Our team can guide you regarding documents and insurance-related processes for eligible treatment."
        },
        {
          title: "Payment Support",
          text:
            "Ask the care team about available payment and financing options."
        }
      ],

      journey: [
        {
          label: "Step 01",
          title: "Orthopaedic Consultation",
          text:
            "Your injury and symptoms are discussed with the orthopaedic team."
        },
        {
          label: "Step 02",
          title: "Imaging & Assessment",
          text:
            "Relevant imaging and clinical findings are reviewed."
        },
        {
          label: "Step 03",
          title: "Treatment Planning",
          text:
            "The surgeon explains whether surgical or non-surgical treatment is appropriate."
        },
        {
          label: "Step 04",
          title: "Fracture Treatment",
          text:
            "The planned treatment is carried out according to your injury."
        },
        {
          label: "Step 05",
          title: "Recovery",
          text:
            "Post-treatment care and rehabilitation guidance are provided."
        },
        {
          label: "Step 06",
          title: "Follow-up",
          text:
            "Healing and recovery are reviewed during follow-up."
        }
      ],

      trust: {
        title: "Focused orthopaedic care",
        description:
          "Fracture treatment is planned around the injury, bone alignment and the patient's recovery needs.",
        items: [
          {
            title: "Specialist evaluation",
            text:
              "Your injury is reviewed by the appropriate orthopaedic specialist."
          },
          {
            title: "Treatment planning",
            text:
              "Surgical and non-surgical options can be discussed where appropriate."
          },
          {
            title: "Recovery guidance",
            text:
              "You receive instructions for recovery and rehabilitation."
          },
          {
            title: "Follow-up",
            text:
              "Healing is monitored through appropriate follow-up."
          }
        ]
      },

      faqs: [
        {
          question: "Does every fracture need surgery?",
          answer:
            "No. Some fractures can be treated without surgery. The appropriate treatment depends on the type and location of the fracture and clinical assessment."
        },
        {
          question: "How is a fracture diagnosed?",
          answer:
            "A clinical examination and appropriate imaging are commonly used to assess a fracture."
        },
        {
          question: "What happens during fracture surgery?",
          answer:
            "When surgery is required, the surgeon uses an appropriate method to stabilise and align the fracture."
        },
        {
          question: "How long does fracture recovery take?",
          answer:
            "Recovery depends on the bone involved, fracture type, treatment and individual healing."
        },
        {
          question: "Will physiotherapy be needed?",
          answer:
            "Rehabilitation may be recommended depending on the injury and treatment."
        }
      ]

    },


    /* =====================================================
       ORTHOPEDIC SURGERY
    ===================================================== */

    "orthopedic-surgery": {

      name: "Orthopedic Surgery",

      category: "Orthopaedic Surgery",

      shortTitle: "Bone, Joint & Orthopaedic Surgical Care",

      heroDescription:
        "Specialist orthopaedic evaluation and treatment planning for bone, joint, ligament and related conditions.",

      definitionEyebrow: "Understanding Orthopaedic Care",

      definitionTitle: "What is Orthopedic Surgery?",

      definition:
        "Orthopedic surgery focuses on conditions affecting bones, joints, ligaments, tendons and related structures. Treatment may include non-surgical management, rehabilitation or surgery depending on the condition.",

      images: [
        {
          src: "images/surgery/surgeryorthopedic.png",
          alt: "Orthopedic surgery care at Niva Surgery"
        },
        {
          src: "images/surgery/surgeryorthopedic1.png",
          alt: "Bone and joint surgical care at Niva Surgery"
        }
      ],

      conditions: [
        {
          title: "Joint Problems",
          text:
            "Pain and reduced movement can occur due to different joint conditions."
        },
        {
          title: "Ligament Injuries",
          text:
            "Certain injuries may require specialist assessment and treatment planning."
        },
        {
          title: "Bone Conditions",
          text:
            "Fractures and other bone conditions may require orthopaedic care."
        }
      ],

      treatment: {
        eyebrow: "Orthopaedic Evaluation",
        title: "When should you see an orthopaedic surgeon?",
        description:
          "Persistent pain, injury or reduced function may require specialist assessment.",
        items: [
          {
            title: "Persistent joint pain",
            text:
              "Pain that continues despite routine measures may require evaluation."
          },
          {
            title: "Restricted movement",
            text:
              "Difficulty moving a joint can have several causes and should be assessed."
          },
          {
            title: "Sports or trauma injuries",
            text:
              "Injuries may require specialist evaluation depending on their severity."
          },
          {
            title: "Fractures",
            text:
              "Complex or unstable fractures may require orthopaedic treatment."
          }
        ]
      },

      procedures: {
        eyebrow: "Treatment Options",
        title: "Orthopaedic procedures",
        description:
          "The appropriate procedure depends on the condition and individual clinical assessment.",
        items: [
          {
            title: "Fracture Fixation",
            text:
              "Surgical stabilisation may be recommended for selected fractures."
          },
          {
            title: "Joint Procedures",
            text:
              "Selected joint conditions may require surgical intervention."
          },
          {
            title: "Ligament Procedures",
            text:
              "Certain ligament injuries may require surgical treatment."
          },
          {
            title: "Joint Replacement",
            text:
              "Joint replacement may be considered for selected advanced joint conditions."
          }
        ]
      },

      finance: [
        {
          title: "Insurance Support",
          text:
            "Our team can guide you through the documentation and insurance process."
        },
        {
          title: "Payment & Financing",
          text:
            "Ask the care team about payment and financing options available for eligible procedures."
        }
      ],

      journey: [
        {
          label: "Consultation",
          title: "Meet Your Specialist",
          text:
            "Discuss your pain, injury or mobility concerns."
        },
        {
          label: "Assessment",
          title: "Clinical Evaluation",
          text:
            "Your symptoms and relevant imaging are reviewed."
        },
        {
          label: "Planning",
          title: "Treatment Plan",
          text:
            "Your specialist explains appropriate treatment options."
        },
        {
          label: "Treatment",
          title: "Procedure",
          text:
            "The selected procedure is performed according to the treatment plan."
        },
        {
          label: "Recovery",
          title: "Rehabilitation",
          text:
            "You receive recovery and rehabilitation guidance."
        },
        {
          label: "Follow-up",
          title: "Progress Review",
          text:
            "Your recovery and function are reviewed during follow-up."
        }
      ],

      trust: {
        title: "Orthopaedic care with a recovery focus",
        description:
          "Treatment planning considers your condition, function and long-term recovery goals.",
        items: [
          {
            title: "Specialist evaluation",
            text:
              "Your condition is assessed by an appropriate orthopaedic specialist."
          },
          {
            title: "Treatment choices",
            text:
              "Available treatment options are explained before a decision is made."
          },
          {
            title: "Recovery planning",
            text:
              "Rehabilitation and recovery are considered as part of treatment planning."
          },
          {
            title: "Ongoing review",
            text:
              "Follow-up helps assess your progress after treatment."
          }
        ]
      },

      faqs: [
        {
          question: "What does an orthopaedic surgeon treat?",
          answer:
            "Orthopaedic surgeons treat conditions involving bones, joints, ligaments, tendons and related musculoskeletal structures."
        },
        {
          question: "When should I see an orthopaedic surgeon?",
          answer:
            "Persistent pain, significant injury, reduced movement or complex fractures may require specialist evaluation."
        },
        {
          question: "Will I always need surgery?",
          answer:
            "No. Treatment can include non-surgical management, rehabilitation or surgery depending on the condition."
        },
        {
          question: "How long does orthopaedic recovery take?",
          answer:
            "Recovery varies considerably according to the condition and treatment."
        },
        {
          question: "Will physiotherapy be part of treatment?",
          answer:
            "Rehabilitation may be recommended depending on the condition and procedure."
        }
      ]

    },


    /* =====================================================
       ONCOLOGY SURGERY
    ===================================================== */

    "oncology-surgery": {

      name: "Oncology Surgery",

      category: "Surgical Oncology",

      shortTitle: "Specialist Surgical Oncology Care",

      heroDescription:
        "Surgical evaluation and treatment planning for selected tumors and cancer-related conditions.",

      definitionEyebrow: "Understanding Surgical Oncology",

      definitionTitle: "What is Oncology Surgery?",

      definition:
        "Oncology surgery is the surgical treatment of selected cancers and tumors. Treatment decisions are individualised and may involve surgery alongside other forms of cancer care depending on the diagnosis.",

      images: [
        {
          src: "images/surgery/surgeryonco.png",
          alt: "Oncology surgery care at Niva Surgery"
        },
        {
          src: "images/surgery/surgeryonco1.png",
          alt: "Cancer surgical treatment at Niva Surgery"
        }
      ],

      conditions: [
        {
          title: "Tumor Evaluation",
          text:
            "A surgical specialist may assess tumors that require surgical consideration."
        },
        {
          title: "Treatment Planning",
          text:
            "The treatment approach depends on the diagnosis and clinical findings."
        },
        {
          title: "Multidisciplinary Care",
          text:
            "Cancer treatment may involve more than one medical specialty."
        }
      ],

      treatment: {
        eyebrow: "Specialist Assessment",
        title: "When is surgical oncology considered?",
        description:
          "Surgery is considered only after appropriate evaluation and treatment planning.",
        items: [
          {
            title: "Tumor requiring surgery",
            text:
              "Some tumors may be treated surgically depending on their location and characteristics."
          },
          {
            title: "Diagnostic procedures",
            text:
              "Selected cases may require tissue diagnosis or other surgical assessment."
          },
          {
            title: "Treatment planning",
            text:
              "The surgical plan is developed according to the diagnosis."
          },
          {
            title: "Follow-up",
            text:
              "Continued clinical follow-up is an important part of cancer care."
          }
        ]
      },

      procedures: {
        eyebrow: "Surgical Oncology",
        title: "Individualised surgical treatment",
        description:
          "The procedure depends entirely on the cancer or tumor and the patient's clinical condition.",
        items: [
          {
            title: "Tumor Removal",
            text:
              "Surgical removal may be considered for selected tumors."
          },
          {
            title: "Biopsy Procedures",
            text:
              "Tissue may be obtained for diagnostic evaluation when clinically required."
          },
          {
            title: "Cancer Surgery Planning",
            text:
              "Your surgical team explains the recommended treatment approach."
          }
        ]
      },

      finance: [
        {
          title: "Insurance Guidance",
          text:
            "Our team can help you understand the documentation involved in the insurance process."
        },
        {
          title: "Financial Assistance",
          text:
            "Discuss available payment and financing options with the care team."
        }
      ],

      journey: [
        {
          label: "Consultation",
          title: "Meet Your Specialist",
          text:
            "Discuss the diagnosis, reports and treatment concerns."
        },
        {
          label: "Assessment",
          title: "Review The Diagnosis",
          text:
            "Relevant reports and investigations are reviewed."
        },
        {
          label: "Planning",
          title: "Build The Treatment Plan",
          text:
            "Your surgical team explains the recommended approach."
        },
        {
          label: "Treatment",
          title: "Surgical Procedure",
          text:
            "The planned surgery is performed according to the treatment plan."
        },
        {
          label: "Recovery",
          title: "Post-operative Care",
          text:
            "You receive appropriate recovery and follow-up guidance."
        },
        {
          label: "Follow-up",
          title: "Continued Care",
          text:
            "Your clinical team reviews your recovery and ongoing care."
        }
      ],

      trust: {
        title: "Care built around your diagnosis",
        description:
          "Cancer care requires careful evaluation, clear communication and individualised treatment planning.",
        items: [
          {
            title: "Specialist evaluation",
            text:
              "Your diagnosis and treatment options are reviewed by the appropriate specialist."
          },
          {
            title: "Individual planning",
            text:
              "Treatment is planned around the patient's specific diagnosis."
          },
          {
            title: "Clear communication",
            text:
              "The treatment plan and next steps are explained clearly."
          },
          {
            title: "Follow-up",
            text:
              "Ongoing follow-up forms an important part of care."
          }
        ]
      },

      faqs: [
        {
          question: "What is surgical oncology?",
          answer:
            "Surgical oncology involves the use of surgery to diagnose or treat selected tumors and cancers."
        },
        {
          question: "Does every cancer require surgery?",
          answer:
            "No. Treatment depends on the type, location and stage of the cancer and may involve different treatment approaches."
        },
        {
          question: "What happens during a surgical oncology consultation?",
          answer:
            "Your diagnosis, reports, medical history and available treatment options are reviewed."
        },
        {
          question: "Will other specialists be involved?",
          answer:
            "Cancer treatment may involve multiple specialties depending on the diagnosis and treatment plan."
        },
        {
          question: "How is recovery planned?",
          answer:
            "Recovery guidance depends on the procedure and the patient's individual clinical condition."
        }
      ]

    },


    /* =====================================================
       OBSTETRICS & GYNECOLOGY
    ===================================================== */

    "obstetrics-gynecology": {

      name: "Obstetrics & Gynecology",

      category: "Women's Surgical Care",

      shortTitle: "Specialist Women's Surgical Care",

      heroDescription:
        "Patient-focused gynecological and women's surgical care with individual treatment planning.",

      definitionEyebrow: "Understanding Women's Surgical Care",

      definitionTitle: "What is Obstetrics & Gynecology?",

      definition:
        "Obstetrics and gynecology is the medical specialty focused on women's reproductive health, pregnancy and conditions affecting the female reproductive system. Some gynecological conditions may require surgical treatment depending on the diagnosis.",

      images: [
        {
          src: "images/surgery/surgeryobg.png",
          alt: "Obstetrics and gynecology care at Niva Surgery"
        },
        {
          src: "images/surgery/surgeryobg1.png",
          alt: "Women's surgical care at Niva Surgery"
        }
      ],

      conditions: [
        {
          title: "Gynecological Conditions",
          text:
            "Different conditions affecting the reproductive system may require specialist evaluation."
        },
        {
          title: "Pelvic Conditions",
          text:
            "Pelvic symptoms may have several causes and should be assessed appropriately."
        },
        {
          title: "Surgical Conditions",
          text:
            "Some gynecological conditions may require planned surgical treatment."
        }
      ],

      treatment: {
        eyebrow: "Specialist Evaluation",
        title: "When may gynecological surgery be considered?",
        description:
          "Surgery is recommended only when clinically appropriate after proper evaluation.",
        items: [
          {
            title: "Persistent symptoms",
            text:
              "Ongoing symptoms may require specialist assessment."
          },
          {
            title: "Structural conditions",
            text:
              "Certain structural conditions may require surgical treatment."
          },
          {
            title: "Treatment-resistant conditions",
            text:
              "Some conditions may require surgery when other treatment options are not suitable."
          },
          {
            title: "Planned procedures",
            text:
              "Your specialist explains the reason, options and preparation for planned surgery."
          }
        ]
      },

      procedures: {
        eyebrow: "Women's Surgical Care",
        title: "Gynecological procedures",
        description:
          "The appropriate procedure depends on the diagnosis and individual clinical assessment.",
        items: [
          {
            title: "Hysterectomy",
            text:
              "Surgical removal of the uterus when clinically indicated."
          },
          {
            title: "Gynecological Procedures",
            text:
              "Selected gynecological conditions may require surgical treatment."
          },
          {
            title: "Minimally Invasive Options",
            text:
              "Minimally invasive approaches may be considered for selected procedures."
          }
        ]
      },

      finance: [
        {
          title: "Insurance Support",
          text:
            "Our care team can guide you regarding documentation and the insurance process."
        },
        {
          title: "Payment Options",
          text:
            "Ask the care team about available payment and financing options."
        }
      ],

      journey: [
        {
          label: "Consultation",
          title: "Meet Your Specialist",
          text:
            "Discuss your concerns privately with the appropriate specialist."
        },
        {
          label: "Assessment",
          title: "Understand Your Condition",
          text:
            "Your symptoms and relevant reports are reviewed."
        },
        {
          label: "Planning",
          title: "Treatment Plan",
          text:
            "Your specialist explains available treatment options."
        },
        {
          label: "Treatment",
          title: "Planned Procedure",
          text:
            "The recommended procedure is performed according to the treatment plan."
        },
        {
          label: "Recovery",
          title: "Recovery Support",
          text:
            "You receive post-operative guidance and follow-up instructions."
        },
        {
          label: "Follow-up",
          title: "Continued Care",
          text:
            "Your recovery and ongoing needs are reviewed during follow-up."
        }
      ],

      trust: {
        title: "Respectful and patient-focused women's care",
        description:
          "We aim to provide clear communication, appropriate treatment planning and a comfortable patient experience.",
        items: [
          {
            title: "Private consultation",
            text:
              "Your concerns can be discussed in a respectful and comfortable setting."
          },
          {
            title: "Specialist evaluation",
            text:
              "Your condition is reviewed before treatment is recommended."
          },
          {
            title: "Clear options",
            text:
              "Treatment choices and preparation are explained clearly."
          },
          {
            title: "Follow-up care",
            text:
              "Recovery and follow-up remain part of the surgical journey."
          }
        ]
      },

      faqs: [
        {
          question: "When might gynecological surgery be needed?",
          answer:
            "Surgery may be considered for selected gynecological conditions after specialist evaluation."
        },
        {
          question: "Will I always need surgery?",
          answer:
            "No. Treatment depends on the diagnosis and may include medical or non-surgical options."
        },
        {
          question: "What happens during the first consultation?",
          answer:
            "Your specialist discusses your symptoms, medical history and relevant reports before explaining treatment options."
        },
        {
          question: "Can minimally invasive surgery be an option?",
          answer:
            "Minimally invasive approaches may be suitable for selected procedures depending on the clinical situation."
        },
        {
          question: "How long is recovery?",
          answer:
            "Recovery depends on the procedure and individual health. Your specialist will provide specific guidance."
        }
      ]

    },



  };


  /* =======================================================
     DEFAULT / RELATED DATA
  ======================================================= */

  const DEFAULT_SURGERY_ID = "general-surgery";

  const FALLBACK_IMAGE = "images/surgery/surgerygeneral.png";


  /* =======================================================
     GET CURRENT SURGERY
  ======================================================= */

  function getSurgeryId() {

    const params = new URLSearchParams(window.location.search);

    let id = params.get("id");

    if (id) {
      return normalizeId(id);
    }

    const hash = window.location.hash.replace("#", "");

    if (hash) {
      return normalizeId(hash);
    }

    return DEFAULT_SURGERY_ID;
  }


  function normalizeId(value) {

    return String(value || "")
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-");

  }


  const surgeryId = getSurgeryId();

  const surgery =
    SURGERIES[surgeryId] ||
    SURGERIES[DEFAULT_SURGERY_ID];


  /* =======================================================
     BASIC HELPERS
  ======================================================= */

  function escapeHTML(value) {

    return String(value ?? "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");

  }


  function setText(id, value) {

    const element = document.getElementById(id);

    if (!element) return;

    element.textContent = value || "";

  }


  function setHTML(id, value) {

    const element = document.getElementById(id);

    if (!element) return;

    element.innerHTML = value || "";

  }


  function setMeta(id, value) {

    const element = document.getElementById(id);

    if (!element) return;

    element.setAttribute("content", value || "");

  }


  /* =======================================================
     SEO
  ======================================================= */

  function buildSEO() {

    const title =
      `${surgery.name} in Bengaluru | Niva Surgery`;

    const description =
      `${surgery.name} at Niva Surgery in Bengaluru. Explore surgical consultation, treatment options, patient journey, recovery guidance and FAQs.`;

    const canonical =
      `${window.location.origin}${window.location.pathname}?id=${encodeURIComponent(surgeryId)}`;


    document.title = title;

    setMeta("surgeryMetaDescription", description);

    setMeta("surgeryOgTitle", title);

    setMeta(
      "surgeryOgDescription",
      description
    );

    setMeta(
      "surgeryOgUrl",
      canonical
    );


    const firstImage =
      surgery.images &&
      surgery.images.length
        ? surgery.images[0].src
        : FALLBACK_IMAGE;


    setMeta(
      "surgeryOgImage",
      new URL(firstImage, window.location.href).href
    );


    const canonicalElement =
      document.getElementById("surgeryCanonical");

    if (canonicalElement) {
      canonicalElement.href = canonical;
    }


    setSurgerySchema(
      title,
      description,
      canonical,
      firstImage
    );

  }


  function setSurgerySchema(
    title,
    description,
    canonical,
    image
  ) {

    const existing =
      document.getElementById(
        "nivaSurgeryStructuredData"
      );

    if (existing) {
      existing.remove();
    }


    const schema = {

      "@context": "https://schema.org",

      "@type": "Medicalpngage",

      "@id": `${canonical}#medical-page`,

      "name": title,

      "url": canonical,

      "description": description,

      "inLanguage": "en-IN",

      "about": {
        "@type": "MedicalProcedure",
        "name": surgery.name,
        "description": surgery.definition
      },

      "publisher": {
        "@type": "MedicalOrganization",
        "name": "Niva Surgery",
        "url": "https://www.nivasurgery.com/"
      },

      "image": new URL(
        image,
        window.location.href
      ).href

    };


    const script =
      document.createElement("script");

    script.id =
      "nivaSurgeryStructuredData";

    script.type =
      "application/ld+json";

    script.textContent =
      JSON.stringify(schema);

    document.head.appendChild(script);

  }


  /* =======================================================
     HERO
  ======================================================= */

  let heroTimer = null;

  let heroIndex = 0;


  function renderHero() {

    const slider =
      document.getElementById(
        "surgeryHeroSlider"
      );

    const dots =
      document.getElementById(
        "surgerySliderDots"
      );

    if (!slider || !dots) return;


    const images =
      surgery.images &&
      surgery.images.length
        ? surgery.images
        : [
            {
              src: FALLBACK_IMAGE,
              alt: surgery.name
            },
            {
              src: FALLBACK_IMAGE,
              alt: surgery.name
            }
          ];


    slider.innerHTML = "";

    dots.innerHTML = "";


    images.slice(0, 2).forEach(
      function (image, index) {

        const slide =
          document.createElement("div");

        slide.className =
          "surgery-hero-slide" +
          (index === 0 ? " active" : "");


        slide.innerHTML = `

          <img
            src="${escapeHTML(image.src || FALLBACK_IMAGE)}"
            alt="${escapeHTML(image.alt || surgery.name)}"
            width="1200"
            height="700"
            ${index === 0 ? 'fetchpriority="high"' : 'loading="lazy"'}
          >

          <div class="surgery-slide-content">

            <span class="surgery-slide-kicker">
              ${escapeHTML(surgery.category)}
            </span>

            <h2 class="surgery-slide-title">
              ${escapeHTML(surgery.name)}
            </h2>

            <p class="surgery-slide-text">
              ${escapeHTML(surgery.heroDescription)}
            </p>

          </div>

        `;


        slider.appendChild(slide);


        const dot =
          document.createElement("button");

        dot.type = "button";

        dot.className =
          "surgery-slider-dot" +
          (index === 0 ? " active" : "");

        dot.setAttribute(
          "aria-label",
          `Show surgery image ${index + 1}`
        );


        dot.addEventListener(
          "click",
          function () {

            showHeroSlide(index);

            startHeroSlider();

          }
        );


        dots.appendChild(dot);

      }
    );


    setText(
      "surgeryHeroTitle",
      surgery.name
    );

    setText(
      "surgeryHeroDescription",
      surgery.heroDescription
    );


    startHeroSlider();

  }


  function showHeroSlide(index) {

    const slides =
      document.querySelectorAll(
        ".surgery-hero-slide"
      );

    const dots =
      document.querySelectorAll(
        ".surgery-slider-dot"
      );


    if (!slides.length) return;


    heroIndex =
      (index + slides.length) %
      slides.length;


    slides.forEach(
      function (slide, i) {

        slide.classList.toggle(
          "active",
          i === heroIndex
        );

      }
    );


    dots.forEach(
      function (dot, i) {

        dot.classList.toggle(
          "active",
          i === heroIndex
        );

      }
    );

  }


  function startHeroSlider() {

    clearInterval(heroTimer);


    const slides =
      document.querySelectorAll(
        ".surgery-hero-slide"
      );


    if (slides.length < 2) return;


    heroTimer =
      setInterval(
        function () {

          showHeroSlide(
            heroIndex + 1
          );

        },
        5000
      );

  }


  /* =======================================================
     DEFINITION
  ======================================================= */

  function renderDefinition() {

    setText(
      "definitionEyebrow",
      surgery.definitionEyebrow
    );

    setText(
      "definitionTitle",
      surgery.definitionTitle
    );


    setHTML(
      "definitionContent",
      `<p>${escapeHTML(surgery.definition)}</p>`
    );


    const grid =
      document.getElementById(
        "conditionGrid"
      );

    if (!grid) return;


    grid.innerHTML =
      (surgery.conditions || [])
        .map(
          function (item) {

            return `

              <article class="condition-item">

                <h3>
                  ${escapeHTML(item.title)}
                </h3>

                <p>
                  ${escapeHTML(item.text)}
                </p>

              </article>

            `;

          }
        )
        .join("");

  }


  /* =======================================================
     TREATMENT
  ======================================================= */

  function renderTreatment() {

    const data =
      surgery.treatment;

    if (!data) return;


    setText(
      "treatmentEyebrow",
      data.eyebrow
    );

    setText(
      "treatmentTitle",
      data.title
    );

    setText(
      "treatmentDescription",
      data.description
    );


    const grid =
      document.getElementById(
        "treatmentGrid"
      );

    if (!grid) return;


    grid.innerHTML =
      (data.items || [])
        .map(
          function (item) {

            return `

              <article class="treatment-item">

                <h3>
                  ${escapeHTML(item.title)}
                </h3>

                <p>
                  ${escapeHTML(item.text)}
                </p>

              </article>

            `;

          }
        )
        .join("");

  }


  /* =======================================================
     PROCEDURES
  ======================================================= */

  function renderProcedures() {

    const data =
      surgery.procedures;

    if (!data) return;


    setText(
      "procedureEyebrow",
      data.eyebrow
    );

    setText(
      "procedureTitle",
      data.title
    );

    setText(
      "procedureDescription",
      data.description
    );


    const list =
      document.getElementById(
        "procedureList"
      );

    if (!list) return;


    list.innerHTML =
      (data.items || [])
        .map(
          function (item) {

            return `

              <article class="procedure-item">

                <div>

                  <h3>
                    ${escapeHTML(item.title)}
                  </h3>

                  <p>
                    ${escapeHTML(item.text)}
                  </p>

                </div>

                <i class="fa-solid fa-arrow-right"
                   aria-hidden="true">
                </i>

              </article>

            `;

          }
        )
        .join("");

  }


  /* =======================================================
     FINANCE SLIDER
  ======================================================= */

  let financeTimer = null;

  let financeIndex = 0;


  function renderFinance() {

    const track =
      document.getElementById(
        "financeTrack"
      );

    const dots =
      document.getElementById(
        "financeDots"
      );

    if (!track || !dots) return;


    const items =
      surgery.finance || [];


    track.innerHTML = "";

    dots.innerHTML = "";


    items.forEach(
      function (item, index) {

        const card =
          document.createElement("article");

        card.className =
          "finance-card";


        card.innerHTML = `

          <h3>
            ${escapeHTML(item.title)}
          </h3>

          <p>
            ${escapeHTML(item.text)}
          </p>

        `;


        track.appendChild(card);


        const dot =
          document.createElement("button");

        dot.type = "button";

        dot.className =
          "finance-dot" +
          (index === 0 ? " active" : "");

        dot.setAttribute(
          "aria-label",
          `Show payment option ${index + 1}`
        );


        dot.addEventListener(
          "click",
          function () {

            showFinanceSlide(index);

            startFinanceSlider();

          }
        );


        dots.appendChild(dot);

      }
    );


    showFinanceSlide(0);

    startFinanceSlider();

  }


  function showFinanceSlide(index) {

    const cards =
      document.querySelectorAll(
        ".finance-card"
      );

    const dots =
      document.querySelectorAll(
        ".finance-dot"
      );


    if (!cards.length) return;


    financeIndex =
      (index + cards.length) %
      cards.length;


    const cardWidth =
      cards[0].getBoundingClientRect().width;


    const gap = 16;


    const offset =
      financeIndex *
      (cardWidth + gap);


    const track =
      document.getElementById(
        "financeTrack"
      );


    if (track) {

      track.style.transform =
        `translateX(-${offset}px)`;

    }


    dots.forEach(
      function (dot, i) {

        dot.classList.toggle(
          "active",
          i === financeIndex
        );

      }
    );

  }


  function startFinanceSlider() {

    clearInterval(financeTimer);


    const cards =
      document.querySelectorAll(
        ".finance-card"
      );


    if (cards.length < 2) return;


    financeTimer =
      setInterval(
        function () {

          showFinanceSlide(
            financeIndex + 1
          );

        },
        4500
      );

  }


  /* =======================================================
     JOURNEY
  ======================================================= */

  function renderJourney() {

    setText(
      "journeyEyebrow",
      "Your Surgical Journey"
    );

    setText(
      "journeyTitle",
      "We guide you through every step"
    );

    setText(
      "journeyDescription",
      "From consultation to recovery, your treatment journey is planned around your condition and individual needs."
    );


    const list =
      document.getElementById(
        "journeyList"
      );

    if (!list) return;


    list.innerHTML =
      (surgery.journey || [])
        .map(
          function (item, index) {

            const number =
              String(index + 1)
                .padStart(2, "0");


            return `

              <article class="journey-item">

                <div class="journey-number">
                  ${number}
                </div>

                <div>

                  <h3>
                    ${escapeHTML(item.title)}
                  </h3>

                  <p>
                    ${escapeHTML(item.text)}
                  </p>

                </div>

              </article>

            `;

          }
        )
        .join("");

  }


  /* =======================================================
     TRUST
  ======================================================= */

  function renderTrust() {

    const data =
      surgery.trust;

    if (!data) return;


    setText(
      "trustTitle",
      data.title
    );

    setText(
      "trustDescription",
      data.description
    );


    const grid =
      document.getElementById(
        "trustGrid"
      );

    if (!grid) return;


    grid.innerHTML =
      (data.items || [])
        .map(
          function (item) {

            return `

              <article class="trust-item">

                <h3>
                  ${escapeHTML(item.title)}
                </h3>

                <p>
                  ${escapeHTML(item.text)}
                </p>

              </article>

            `;

          }
        )
        .join("");

  }


  /* =======================================================
     FAQ
  ======================================================= */

  function renderFAQ() {

    setText(
      "faqTitle",
      `${surgery.name} – Frequently Asked Questions`
    );

    setText(
      "faqDescription",
      `Find answers to common questions about ${surgery.name.toLowerCase()}, consultation, treatment and recovery.`
    );


    const list =
      document.getElementById(
        "surgeryFaqList"
      );

    if (!list) return;


    list.innerHTML =
      (surgery.faqs || [])
        .map(
          function (faq, index) {

            const number =
              String(index + 1)
                .padStart(2, "0");


            return `

              <article class="surgery-faq-item">

                <button
                  type="button"
                  class="surgery-faq-question"
                  aria-expanded="false"
                >

                  <span>
                    ${number}
                  </span>

                  <strong>
                    ${escapeHTML(faq.question)}
                  </strong>

                  <span class="surgery-faq-toggle">
                    +
                  </span>

                </button>


                <div class="surgery-faq-answer">

                  <p>
                    ${escapeHTML(faq.answer)}
                  </p>

                </div>

              </article>

            `;

          }
        )
        .join("");

  }


  function initialiseFAQ() {

    const list =
      document.getElementById(
        "surgeryFaqList"
      );

    if (!list) return;


    list.addEventListener(
      "click",
      function (event) {

        const question =
          event.target.closest(
            ".surgery-faq-question"
          );


        if (!question) return;


        const item =
          question.closest(
            ".surgery-faq-item"
          );


        if (!item) return;


        const isOpen =
          item.classList.contains(
            "active"
          );


        list
          .querySelectorAll(
            ".surgery-faq-item.active"
          )
          .forEach(
            function (openItem) {

              openItem.classList.remove(
                "active"
              );


              const openButton =
                openItem.querySelector(
                  ".surgery-faq-question"
                );


              const openToggle =
                openItem.querySelector(
                  ".surgery-faq-toggle"
                );


              if (openButton) {

                openButton.setAttribute(
                  "aria-expanded",
                  "false"
                );

              }


              if (openToggle) {

                openToggle.textContent =
                  "+";

              }

            }
          );


        if (!isOpen) {

          item.classList.add(
            "active"
          );


          question.setAttribute(
            "aria-expanded",
            "true"
          );


          const toggle =
            item.querySelector(
              ".surgery-faq-toggle"
            );


          if (toggle) {

            toggle.textContent =
              "−";

          }

        }

      }
    );

  }


  /* =======================================================
     RELATED SURGERIES
  ======================================================= */

  function renderRelatedSurgeries() {

    const grid =
      document.getElementById(
        "relatedSurgeryGrid"
      );

    if (!grid) return;


    const related =
      Object.entries(SURGERIES)
        .filter(
          function ([id]) {

            return id !== surgeryId;

          }
        )
        .slice(0, 3);


    grid.innerHTML =
      related
        .map(
          function ([id, item]) {

            const image =
              item.images &&
              item.images.length
                ? item.images[0].src
                : FALLBACK_IMAGE;


            return `

              <a
                href="surgery-details.html?id=${encodeURIComponent(id)}"
                class="related-surgery-card"
              >

                <img
                  src="${escapeHTML(image)}"
                  alt="${escapeHTML(item.name)}"
                  class="related-surgery-image"
                  loading="lazy"
                  width="600"
                  height="400"
                >

                <div class="related-surgery-content">

                  <h3>
                    ${escapeHTML(item.name)}
                  </h3>

                  <p>
                    ${escapeHTML(item.shortTitle)}
                  </p>

                </div>

              </a>

            `;

          }
        )
        .join("");

  }


  /* =======================================================
     FINAL CTA
  ======================================================= */

  function renderCTA() {

    setText(
      "ctaEyebrow",
      "Ready to take the next step?"
    );

    setText(
      "ctaTitle",
      `Speak with a surgical care team`
    );

    setText(
      "ctaDescription",
      `Request a consultation for ${surgery.name} and discuss your condition with the appropriate care team.`
    );

  }


function initialiseConsultationForm() {

  const form =
    document.getElementById(
      "surgeryConsultationForm"
    );

  if (!form) return;


  const nameInput =
    document.getElementById(
      "patientName"
    );

  const mobileInput =
    document.getElementById(
      "patientMobile"
    );


  /* =======================================================
     MOBILE NUMBER INPUT
  ======================================================= */

  if (mobileInput) {

    mobileInput.addEventListener(
      "input",
      function () {

        this.value =
          this.value
            .replace(/\D/g, "")
            .slice(0, 10);

      }
    );

  }


  /* =======================================================
     CONSULTATION SUBMISSION
  ======================================================= */

  form.addEventListener(
    "submit",
    async function (event) {

      event.preventDefault();


      const name =
        nameInput
          ? nameInput.value.trim()
          : "";


      const mobile =
        mobileInput
          ? mobileInput.value.trim()
          : "";


      /* =====================================================
         VALIDATION
      ===================================================== */

      if (name.length < 2) {

        showFormMessage(
          "Please enter your name.",
          "error"
        );

        if (nameInput) {
          nameInput.focus();
        }

        return;
      }


      if (!/^[6-9]\d{9}$/.test(mobile)) {

        showFormMessage(
          "Please enter a valid 10-digit mobile number.",
          "error"
        );

        if (mobileInput) {
          mobileInput.focus();
        }

        return;
      }


      /* =====================================================
         BUTTON
      ===================================================== */

      const submitButton =
        form.querySelector(
          ".consultation-submit"
        );


      const submitText =
        submitButton
          ? submitButton.querySelector("span")
          : null;


      const originalText =
        submitText
          ? submitText.textContent
          : "Request Consultation";


      if (submitButton) {
        submitButton.disabled = true;
      }


      if (submitText) {
        submitText.textContent =
          "Submitting...";
      }


      /* =====================================================
         SURGERY-SPECIFIC BOOKING DATA
      ===================================================== */

      const bookingData = {

        name: name,

        mobile_no: mobile,

        email: "",

        service: surgery.name,

        message:
          `Surgical consultation request for ${surgery.name}`,

        address: ""

      };


      console.log(
        "SURGERY CONSULTATION:",
        bookingData
      );


      /* =====================================================
         SEND TO EXISTING FLASK API
      ===================================================== */

      try {

        const response =
          await fetch(
            `${API_BASE_URL}/api/web-leads`,
            {
              method: "POST",

              headers: {
                "Content-Type":
                  "application/json"
              },

              body:
                JSON.stringify(
                  bookingData
                )
            }
          );


        const data =
          await response
            .json()
            .catch(() => null);


        console.log(
          "SURGERY BOOKING RESPONSE:",
          data
        );


        /* ===================================================
           SERVER ERROR
        =================================================== */

        if (!response.ok) {

          throw new Error(
            data?.error ||
            `Server returned HTTP ${response.status}`
          );

        }


        /* ===================================================
           APPLICATION ERROR
        =================================================== */

        if (
          !data ||
          data.success !== true
        ) {

          throw new Error(
            data?.error ||
            "Consultation request could not be completed."
          );

        }


        /* ===================================================
           SUCCESS
        =================================================== */

/* =====================================================
   SUCCESS
===================================================== */

console.log(
  "SURGERY CONSULTATION SUBMITTED"
);

showFormMessage(
  `Thank you. Your ${surgery.name} consultation request has been received.`,
  "success"
);

if (submitButton) {
  submitButton.disabled = false;
  submitButton.classList.add("submitted");
}

if (submitText) {
  submitText.textContent = "✓ Request Sent";
}

/* Return button to normal after 3 seconds */

setTimeout(() => {

  if (submitButton) {
    submitButton.disabled = false;
    submitButton.classList.remove("submitted");
  }

  if (submitText) {
    submitText.textContent = "Request Consultation";
  }

}, 3000);

        /* Clear form */

        if (nameInput) {
          nameInput.value = "";
        }

        if (mobileInput) {
          mobileInput.value = "";
        }


      } catch (error) {

        console.error(
          "SURGERY CONSULTATION ERROR:",
          error
        );


        showFormMessage(
          "Unable to submit your request right now. Please try again.",
          "error"
        );

      } finally {

        if (submitButton) {
          submitButton.disabled = false;
        }

        if (submitText) {
          submitText.textContent =
            originalText;
        }

      }

    }
  );

}


  function showFormMessage(
    message,
    type
  ) {

    let messageElement =
      document.getElementById(
        "surgeryFormMessage"
      );


    if (!messageElement) {

      messageElement =
        document.createElement("div");

      messageElement.id =
        "surgeryFormMessage";

      messageElement.style.marginTop =
        "10px";

      messageElement.style.fontSize =
        "11px";

      messageElement.style.lineHeight =
        "1.5";


      const form =
        document.getElementById(
          "surgeryConsultationForm"
        );


      if (form) {

        form.appendChild(
          messageElement
        );

      }

    }


    messageElement.textContent =
      message;


    messageElement.style.color =
      type === "error"
        ? "#c43d3d"
        : "#168487";

  }


  /* =======================================================
     FINAL CTA BUTTON
  ======================================================= */

  function initialiseCTA() {

    const button =
      document.getElementById(
        "finalConsultationButton"
      );

    if (!button) return;


    button.addEventListener(
      "click",
      function () {

        const form =
          document.getElementById(
            "surgeryConsultationForm"
          );


        if (form) {

          form.scrollIntoView({
            behavior: "smooth",
            block: "center"
          });


          setTimeout(
            function () {

              const nameInput =
                document.getElementById(
                  "patientName"
                );


              if (nameInput) {

                nameInput.focus();

              }

            },
            500
          );

        }

      }
    );

  }


  /* =======================================================
     HANDLE IMAGE ERRORS
  ======================================================= */

  function initialiseImageFallback() {

    document.addEventListener(
      "error",
      function (event) {

        const image =
          event.target;


        if (
          image &&
          image.tagName === "IMG" &&
          !image.dataset.fallback
        ) {

          image.dataset.fallback =
            "true";

          image.src =
            FALLBACK_IMAGE;

        }

      },
      true
    );

  }


  /* =======================================================
     PAUSE HERO WHEN MOUSE IS OVER IT
  ======================================================= */

  function initialiseHeroHover() {

    const hero =
      document.getElementById(
        "surgeryHeroSlider"
      );

    if (!hero) return;


    hero.addEventListener(
      "mouseenter",
      function () {

        clearInterval(heroTimer);

      }
    );


    hero.addEventListener(
      "mouseleave",
      function () {

        startHeroSlider();

      }
    );

  }


  /* =======================================================
     RESIZE FINANCE SLIDER
  ======================================================= */

  let resizeTimer = null;


  window.addEventListener(
    "resize",
    function () {

      clearTimeout(resizeTimer);


      resizeTimer =
        setTimeout(
          function () {

            showFinanceSlide(
              financeIndex
            );

          },
          150
        );

    }
  );


  /* =======================================================
     UPDATE URL TITLE STATE
  ======================================================= */

  function initialiseHistoryState() {

    window.addEventListener(
      "popstate",
      function () {

        window.location.reload();

      }
    );

  }


  /* =======================================================
     INITIALISE PAGE
  ======================================================= */

  function initialisePage() {

    buildSEO();

    renderHero();

    renderDefinition();

    renderTreatment();

    renderProcedures();

    renderFinance();

    renderJourney();

    renderTrust();

    renderFAQ();

    renderRelatedSurgeries();

    renderCTA();

    initialiseFAQ();

    initialiseConsultationForm();

    initialiseCTA();

    initialiseImageFallback();

    initialiseHeroHover();

    initialiseHistoryState();

  }


  initialisePage();


});


function showConsultationSuccess() {

  const popup = document.createElement("div");

  popup.className = "consultation-success-popup";

  popup.innerHTML = `
    <div class="consultation-success-box">

      <button
        type="button"
        class="consultation-success-close"
        onclick="this.closest('.consultation-success-popup').remove()"
        aria-label="Close"
      >
        ×
      </button>

      <div class="consultation-success-icon">
        ✓
      </div>

      <h3>Request Submitted</h3>

      <p>
        Thank you. Your consultation request has been received.
        Our team will contact you shortly.
      </p>

      <button
        type="button"
        class="consultation-success-button"
        onclick="this.closest('.consultation-success-popup').remove()"
      >
        Done
      </button>

    </div>
  `;

  document.body.appendChild(popup);
}


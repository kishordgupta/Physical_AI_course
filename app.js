const courseData = {
  "title": "Applied Physical AI and Data Science for Cyber-Physical Systems",
  "subtitle": "8-Module Learner Course Website",
  "tagline": "A student-facing course site for learning how data, AI models, sensors, and physical systems work together to solve real-world problems.",
  "description": "This course introduces physical AI as a data-centered field. Students learn how intelligent systems collect information from the physical world, transform data into evidence, make decisions, and produce actions or recommendations. The course connects cyber-physical systems, data science, machine learning, responsible AI, deployment constraints, and community impact through a scaffolded capstone project.",
  "alignment": [
    "Mathematics and Statistics",
    "Programming",
    "Modeling",
    "Data Curation",
    "Ethics",
    "Communication"
  ],
  "facilities": "Course activities may be supported by CAU computing resources for data science, AI, computer vision, simulation, and model experimentation. Available infrastructure includes CPU and GPU systems with NVIDIA A100, H100, RTX 6000 Ada, TITAN V, Quadro 5000, and RTX 2080 Ti GPUs, along with large-memory configurations that support machine learning and multimodal analysis workflows.",
  "courseOutcomes": [
    "Explain how physical AI and cyber-physical systems use sensors, data, models, feedback, and physical action.",
    "Acquire, clean, document, analyze, and visualize structured and unstructured data from physical and community sources.",
    "Use Python-based workflows to conduct exploratory analysis, build baseline models, and interpret results.",
    "Evaluate model performance, system constraints, failure modes, and deployment trade-offs in real physical environments.",
    "Assess privacy, bias, fairness, safety, and social-impact concerns in data-driven physical AI systems.",
    "Communicate a complete data science and physical AI project through a report, presentation, portfolio artifact, and reproducible workflow."
  ],
  "modules": [
    {
      "number": 1,
      "title": "Foundations of Physical AI and Data-Driven Decision-Making",
      "overview": "Physical AI systems use data from the physical world to perceive conditions, make decisions, and take action. Examples include autonomous robots, smart transportation systems, environmental sensors, healthcare devices, drones, and intelligent infrastructure. In this module, you will examine how sensors, data pipelines, AI models, actuators, and feedback loops work together within a cyber-physical system. You will also explore how community and industry data can help identify real-world problems that may benefit from a physical AI solution.",
      "purpose": "The purpose of this module is to establish a foundation for studying physical AI as a data-centered discipline. You will develop the vocabulary and analytical perspective needed to examine how intelligent systems collect data, transform it into information, and use that information to support physical actions or recommendations.",
      "objectives": [
        "Define physical AI, cyber-physical systems, sensors, actuators, feedback loops, and data-driven decision-making.",
        "Explain how real-world data supports intelligent system behavior in robotics, transportation, environmental monitoring, healthcare technology, cybersecurity, and infrastructure.",
        "Map a basic physical AI pipeline that shows how data move from collection to decision-making and action.",
        "Identify one ethical, privacy, safety, or community concern connected to a proposed physical AI system."
      ],
      "outcomes": [
        "Differentiate among artificial intelligence, physical AI, and cyber-physical systems.",
        "Identify the sensors, data, models, actuators, and feedback loops within a physical AI application.",
        "Construct a basic system diagram showing how data move from collection to physical action.",
        "Classify common physical-world data as structured, unstructured, quantitative, or categorical.",
        "Explain one ethical or community concern associated with a data-driven physical AI system."
      ],
      "readings": [
        {
          "title": "Course Notes: Physical AI and Cyber-Physical Systems",
          "focus": "Core vocabulary, system components, sensing, actuation, feedback, and decision workflows."
        },
        {
          "title": "AUC Data Science and Analytics Framework Overview",
          "focus": "Six competency areas: Mathematics and Statistics, Programming, Modeling, Data Curation, Ethics, and Communication."
        },
        {
          "title": "Mastercard Inclusive Growth Score Platform Overview",
          "focus": "Using community indicators to frame data-driven questions about place, economy, access, and community vitality."
        },
        {
          "title": "Short Case Reading: Smart Mobility and Sensor-Based Decision-Making",
          "focus": "How data can support or distort real-world resource decisions."
        }
      ],
      "assignment": {
        "title": "Physical AI Problem and System Concept Map",
        "purpose": "Introduce physical AI as a system that collects data from the physical world, analyzes the information, makes a decision, and produces an action or recommendation.",
        "tasks": [
          "Select one real-world physical AI problem such as smart transportation, environmental monitoring, healthcare sensing, infrastructure inspection, robotics, campus safety, or accessibility.",
          "Write a 500\u2013700 word problem brief explaining the problem, who is affected, why data are needed, what conditions must be measured, and what decision the system should support.",
          "Create a system concept map with these stages: Physical environment \u2192 Sensor or data source \u2192 Data preparation \u2192 AI model or decision method \u2192 Action or recommendation \u2192 Feedback.",
          "List at least five proposed variables and one measurable data question.",
          "Identify one ethical or social-impact concern."
        ],
        "deliverables": [
          "One PDF with problem brief",
          "One-page system concept map",
          "Five proposed variables",
          "One measurable data question",
          "One ethical or social-impact concern"
        ]
      },
      "assessment": {
        "format": "Foundational quiz and applied concept-map assignment",
        "details": [
          "The quiz checks vocabulary, system components, data types, and the stages of a data-driven decision process.",
          "The applied assignment assesses the clarity of the selected problem, the logic of the system diagram, the proposed data sources, and the ethical or community context.",
          "Successful work uses accurate terminology and shows a reasonable connection between physical conditions, data, model decisions, and system actions."
        ]
      },
      "rubric": [
        {
          "criterion": "Clear and relevant problem definition",
          "points": 20
        },
        {
          "criterion": "Complete and accurate system concept map",
          "points": 30
        },
        {
          "criterion": "Appropriate data sources and variables",
          "points": 20
        },
        {
          "criterion": "Ethical and community context",
          "points": 15
        },
        {
          "criterion": "Organization and communication",
          "points": 15
        }
      ],
      "summary": "Physical AI combines data, computation, and physical action. A system observes conditions through sensors or other data sources, processes information, makes a decision, and produces an action or recommendation. Feedback allows the system to monitor results and adjust behavior. This module established the foundation for examining physical AI as both a technical and social system.",
      "nextSteps": "In Module 2, you will move from the system idea to the data needed to investigate it. Begin identifying possible sensor, public, operational, and community datasets related to your selected problem. Keep your Module 1 problem statement and concept map because they will guide your data search and become part of the final capstone project.",
      "competency": [
        "Modeling",
        "Data Curation",
        "Ethics",
        "Communication"
      ]
    },
    {
      "number": 2,
      "title": "Data Sources, Sensors, and Inclusive Growth Indicators",
      "overview": "The performance of a physical AI system depends on the quality, relevance, and context of its data. In this module, you will examine data produced by sensors, public agencies, community organizations, open-data networks, and the Mastercard Inclusive Growth Score platform. These sources may include CSV files, environmental measurements, transportation records, images, location information, infrastructure data, and neighborhood-level indicators.",
      "purpose": "The purpose of this module is to help you locate, evaluate, and organize data that can support a meaningful physical AI investigation. You will learn that data selection is not neutral; it influences the questions that can be answered, the communities represented, and the reliability of a proposed solution.",
      "objectives": [
        "Distinguish among sensor data, administrative data, open data, and community indicator data.",
        "Evaluate datasets based on relevance, completeness, geographic resolution, timeliness, provenance, and potential bias.",
        "Interpret selected community indicators in relation to growth, access, equity, or resilience.",
        "Develop a focused and measurable research question supported by available data."
      ],
      "outcomes": [
        "Distinguish among sensor data, administrative data, open data, and community indicator data.",
        "Evaluate a dataset based on relevance, completeness, geographic resolution, timeliness, provenance, and possible bias.",
        "Interpret selected community indicators within the context of growth, access, equity, or resilience.",
        "Differentiate a census tract identifier from a quantitative measurement.",
        "Develop a focused, measurable question that can be investigated using physical-world and community data.",
        "Create a data inventory describing the source, format, variables, time period, and intended use of each selected dataset."
      ],
      "readings": [
        {
          "title": "Course Notes: Data Sources for Physical AI",
          "focus": "Sensor logs, images, telemetry, public datasets, community indicators, and metadata."
        },
        {
          "title": "Data Dictionary and Data Inventory Template",
          "focus": "How to describe variables, units, source, scale, format, and missingness."
        },
        {
          "title": "Mastercard IGS Exploration Guide",
          "focus": "Using neighborhood-level indicators to frame community vitality and access questions."
        },
        {
          "title": "Reading: Geographic Scale and Data Interpretation",
          "focus": "Why census tracts, ZIP codes, counties, and cities can lead to different conclusions."
        }
      ],
      "assignment": {
        "title": "Data Source Audit and Community Data Profile",
        "purpose": "Develop the ability to locate, evaluate, document, and interpret data before analysis begins.",
        "tasks": [
          "Select at least two datasets: one community, economic, or inclusive-growth dataset and one physical-world or operational dataset related to your project.",
          "Create a data inventory with source, date, geographic level, unit of observation, file format, number of records, variables, missing-data concerns, possible bias, and relevance.",
          "Build a data dictionary containing at least 10 variables.",
          "Interpret at least three community indicators and explain why each matters for the selected problem.",
          "Revise the Module 1 question so it is specific, measurable, and answerable with the selected data."
        ],
        "deliverables": [
          "Two- to three-page community and data profile",
          "Completed data inventory table",
          "Data dictionary with at least 10 variables",
          "Revised research question",
          "Short limitations statement",
          "Original data files or access instructions"
        ]
      },
      "assessment": {
        "format": "Data-source interpretation quiz and data profile assignment",
        "details": [
          "The quiz checks whether you can distinguish quantitative variables from identifiers, interpret community indicators, recognize geographic and temporal scales, and identify basic data-quality concerns.",
          "The assignment assesses the relevance and quality of selected data, the accuracy of your documentation, your interpretation of indicators, and your recognition of gaps or bias.",
          "Strong submissions explain what the data can and cannot support."
        ]
      },
      "rubric": [
        {
          "criterion": "Relevance and quality of selected data sources",
          "points": 20
        },
        {
          "criterion": "Data inventory and metadata documentation",
          "points": 20
        },
        {
          "criterion": "Interpretation of community indicators",
          "points": 25
        },
        {
          "criterion": "Focus and measurability of research question",
          "points": 20
        },
        {
          "criterion": "Limitations, organization, and documentation",
          "points": 15
        }
      ],
      "summary": "Data do not become useful simply because they are available. Before analysis, you must determine what each dataset measures, how it was collected, which population or location it represents, and whether it is appropriate for the proposed question. This module introduced sensor data, operational data, community indicators, open-data sources, geographic scale, missing records, measurement definitions, and data provenance.",
      "nextSteps": "Before beginning Module 3, download or organize the selected datasets and preserve an unchanged copy of each original file. Create a project folder with separate locations for raw data, cleaned data, notebooks, visualizations, and documentation. Confirm that the variables needed to investigate your question are available.",
      "competency": [
        "Data Literacy",
        "Data Curation",
        "Ethics",
        "Communication"
      ]
    },
    {
      "number": 3,
      "title": "Data Cleaning, Exploratory Analysis, and Visualization",
      "overview": "Raw data are rarely ready for immediate analysis. Sensor logs, community datasets, and system records may contain missing values, duplicate observations, inconsistent labels, incorrect data types, outliers, or formatting problems. In this module, you will use Python-based tools to inspect, clean, summarize, and visualize data.",
      "purpose": "The purpose of this module is to develop a repeatable process for preparing data and generating initial evidence. Cleaning and visualization decisions directly affect the accuracy of later models, so each transformation must be appropriate, documented, and reproducible.",
      "objectives": [
        "Import and inspect a CSV dataset using a Python notebook.",
        "Detect common data-quality problems such as missing values, duplicates, inconsistent labels, and incorrect data types.",
        "Apply documented cleaning steps that prepare data for analysis.",
        "Create descriptive statistics and visualizations that support evidence-based interpretation."
      ],
      "outcomes": [
        "Import and inspect a CSV dataset using a Python notebook.",
        "Identify variable names, data types, units, missing values, duplicate records, and inconsistent categories.",
        "Apply appropriate methods for handling missing data, duplicates, formatting errors, and unusual observations.",
        "Calculate measures such as counts, percentages, means, medians, ranges, and standard deviations.",
        "Select an appropriate chart for a given variable structure or analytical question.",
        "Create and interpret bar charts, histograms, scatterplots, line charts, and basic maps.",
        "Document data-cleaning decisions so another person can reproduce the workflow."
      ],
      "readings": [
        {
          "title": "Course Notes: Python Notebook Workflow",
          "focus": "Importing data, using cells, writing Markdown explanations, and exporting notebooks."
        },
        {
          "title": "pandas Quick Reference",
          "focus": "Reading CSV files, inspecting variables, handling missing values, grouping, and summarizing."
        },
        {
          "title": "Visualization Design Guide",
          "focus": "Matching chart types to data types and analytical questions."
        },
        {
          "title": "Data Cleaning Checklist",
          "focus": "Duplicates, data types, date fields, missing values, category labels, impossible values, and units."
        }
      ],
      "assignment": {
        "title": "Data Cleaning, Exploratory Analysis, and Visualization",
        "purpose": "Develop a reproducible workflow for preparing raw data and identifying meaningful patterns.",
        "tasks": [
          "Load the selected dataset using pandas and inspect rows, columns, data types, missing values, and duplicate records.",
          "Perform and document at least four cleaning operations such as removing duplicates, correcting data types, standardizing labels, resolving geographic identifiers, handling missing values, or converting dates.",
          "Calculate descriptive statistics including counts, proportions, means, medians, ranges, standard deviations, or grouped summaries.",
          "Create at least four purposeful visualizations: one distribution chart, one comparison chart, one relationship or trend chart, and one additional project-specific chart.",
          "Write interpretations for each chart and identify three findings and two limitations."
        ],
        "deliverables": [
          "Jupyter Notebook file",
          "PDF or HTML notebook export",
          "Cleaned CSV dataset",
          "One-page data-quality summary",
          "Brief statement with three findings and two limitations"
        ]
      },
      "assessment": {
        "format": "Technical knowledge check and reproducible notebook assignment",
        "details": [
          "The knowledge check focuses on data types, missing values, chart selection, and interpretation of descriptive statistics.",
          "The notebook assignment assesses accurate data loading, cleaning, statistical summaries, visualization quality, and reproducibility.",
          "Strong submissions explain why each cleaning action was taken rather than simply showing code."
        ]
      },
      "rubric": [
        {
          "criterion": "Accurate data loading and initial inspection",
          "points": 15
        },
        {
          "criterion": "Appropriate and documented cleaning process",
          "points": 25
        },
        {
          "criterion": "Descriptive analysis",
          "points": 15
        },
        {
          "criterion": "Visualization quality and appropriateness",
          "points": 25
        },
        {
          "criterion": "Interpretation and reproducibility",
          "points": 20
        }
      ],
      "summary": "Raw data often contain missing values, inconsistent labels, duplicate observations, invalid measurements, and formatting problems. These issues must be identified and addressed before reliable modeling can begin. Exploratory data analysis provides an initial view of distributions, trends, differences, and relationships. Visualizations reveal patterns that may not be visible in a table, but each chart must match the data structure and analytical question.",
      "nextSteps": "Use the exploratory findings to identify a possible modeling target and relevant features. Consider whether your project involves prediction, classification, grouping, anomaly detection, or another analytical task. Retain both the original and cleaned datasets because they will support Module 4 and the final capstone portfolio.",
      "competency": [
        "Programming",
        "Mathematics and Statistics",
        "Data Curation",
        "Communication"
      ]
    },
    {
      "number": 4,
      "title": "Machine Learning for Physical AI",
      "overview": "Machine learning allows physical AI systems to recognize patterns, make predictions, classify observations, and support decisions. In this module, you will study supervised and unsupervised learning methods, including regression, classification, clustering, and anomaly detection. You will examine how a problem is translated into a modeling task and how data are divided for training, validation, and testing.",
      "purpose": "The purpose of this module is to help you build and evaluate machine learning models for physical AI applications. You will learn to treat a model as one part of a larger decision system rather than as an isolated technical product.",
      "objectives": [
        "Connect physical AI problems to appropriate machine learning tasks.",
        "Identify features, target variables, observations, labels, and possible sources of leakage.",
        "Build and compare baseline machine learning models.",
        "Evaluate model performance using metrics that match the task and the real-world cost of errors."
      ],
      "outcomes": [
        "Determine whether a problem is best approached through regression, classification, clustering, or another analytical method.",
        "Identify features, target variables, observations, labels, and possible sources of leakage.",
        "Divide data into training, validation, and test sets using a defensible strategy.",
        "Train and compare at least two baseline machine learning models.",
        "Calculate and interpret metrics such as accuracy, precision, recall, F1 score, mean absolute error, and root mean squared error.",
        "Use a confusion matrix or residual plot to identify model strengths and weaknesses.",
        "Explain how a model error could affect the behavior or safety of a physical system."
      ],
      "readings": [
        {
          "title": "Course Notes: Model Formulation",
          "focus": "Regression, classification, clustering, anomaly detection, features, labels, and targets."
        },
        {
          "title": "scikit-learn Workflow Guide",
          "focus": "Splitting data, fitting models, predicting, evaluating, and comparing models."
        },
        {
          "title": "Metrics and Error Analysis Guide",
          "focus": "Accuracy, precision, recall, F1 score, MAE, RMSE, confusion matrices, and residual plots."
        },
        {
          "title": "Model Card Template",
          "focus": "Intended use, data, performance, limitations, risks, and inappropriate uses."
        }
      ],
      "assignment": {
        "title": "Machine Learning Baseline and Model Evaluation",
        "purpose": "Introduce model development and evaluation for a physical AI problem.",
        "tasks": [
          "Choose one modeling track: classification, regression, clustering, or anomaly detection.",
          "Define the modeling objective and identify target and feature variables.",
          "Create a training and testing strategy that avoids leakage.",
          "Build a simple baseline model and at least one comparison model.",
          "Report appropriate evaluation metrics and create an error-analysis visualization.",
          "Explain the meaning of false positives, false negatives, prediction errors, or cluster errors in the physical setting.",
          "Prepare a short model card describing intended use, data used, performance, limitations, and inappropriate uses."
        ],
        "deliverables": [
          "Reproducible modeling notebook",
          "Two-page model evaluation memo",
          "Model comparison table",
          "Confusion matrix, residual plot, cluster visualization, or anomaly plot",
          "Short model card"
        ]
      },
      "assessment": {
        "format": "Model-interpretation quiz and model evaluation assignment",
        "details": [
          "The quiz checks model types, feature-target logic, data splitting, metrics, and error interpretation.",
          "The assignment assesses the model formulation, baseline construction, validation strategy, metrics, error analysis, and real-world interpretation.",
          "Strong submissions explain whether the model is ready for further development and why."
        ]
      },
      "rubric": [
        {
          "criterion": "Correct modeling formulation",
          "points": 15
        },
        {
          "criterion": "Baseline and comparison models",
          "points": 25
        },
        {
          "criterion": "Training and validation strategy",
          "points": 20
        },
        {
          "criterion": "Metrics and error analysis",
          "points": 25
        },
        {
          "criterion": "Interpretation and reproducibility",
          "points": 15
        }
      ],
      "summary": "Machine learning models identify patterns in data, but their usefulness depends on how well the modeling task represents the real problem. Model development requires a clear target, relevant features, a defensible data split, an appropriate baseline, and evaluation metrics that match the intended application. A high overall score does not automatically mean a model is ready for deployment because error patterns, leakage, overfitting, class imbalance, and the real-world cost of mistakes must be examined.",
      "nextSteps": "Review the observations that your model handled well and those that produced errors. Determine whether image, time-series, audio, location, or additional sensor information could improve the analysis. Prepare any relevant visual or sequential data for Module 5 and confirm that timestamps, labels, file names, and sensor identifiers are consistent.",
      "competency": [
        "Mathematics and Statistics",
        "Programming",
        "Modeling",
        "Communication"
      ]
    },
    {
      "number": 5,
      "title": "Computer Vision, Time-Series, and Multimodal AI",
      "overview": "Physical AI systems often process data that change across space and time. Cameras produce images and video, sensors produce ordered measurements, microphones produce audio signals, and lidar systems produce spatial point data. In this module, you will examine computer vision, time-series analysis, and multimodal learning.",
      "purpose": "The purpose of this module is to develop your ability to work with data beyond traditional spreadsheets. You will investigate how temporal, visual, and multimodal information can support perception and decision-making in robotics, transportation, healthcare, infrastructure, and environmental monitoring.",
      "objectives": [
        "Explain how images, video, signals, and time-series observations are represented computationally.",
        "Prepare image or signal data through appropriate preprocessing methods.",
        "Extract meaningful visual or temporal features from a physical-world dataset.",
        "Evaluate failure cases caused by noise, lighting, occlusion, missing timestamps, or sensor disagreement."
      ],
      "outcomes": [
        "Explain how images, video, and time-series observations are represented computationally.",
        "Prepare image or signal data through resizing, normalization, filtering, segmentation, or windowing.",
        "Extract meaningful visual or temporal features from a physical-world dataset.",
        "Build or evaluate a basic model for object recognition, event detection, classification, or forecasting.",
        "Align data from multiple sensors using timestamps, sampling rates, or shared identifiers.",
        "Compare early, intermediate, and late approaches to multimodal data fusion.",
        "Interpret failure cases caused by poor lighting, noise, occlusion, sensor disagreement, or changing environmental conditions."
      ],
      "readings": [
        {
          "title": "Course Notes: Computer Vision Basics",
          "focus": "Pixels, channels, resizing, normalization, segmentation, and object recognition."
        },
        {
          "title": "Course Notes: Time-Series Data",
          "focus": "Timestamps, sampling rates, windows, trends, seasonality, missing periods, and event detection."
        },
        {
          "title": "Multimodal Fusion Guide",
          "focus": "Early fusion, intermediate fusion, late fusion, and sensor alignment."
        },
        {
          "title": "Failure-Case Analysis Template",
          "focus": "Documenting successful cases, failure cases, data quality issues, and system implications."
        }
      ],
      "assignment": {
        "title": "Physical AI Perception and Multimodal Analysis",
        "purpose": "Examine data that change across space or time and evaluate how data quality affects physical AI perception.",
        "tasks": [
          "Select one track: computer vision, time-series analysis, or multimodal analysis.",
          "Describe the data modality and preprocessing pipeline.",
          "Apply at least one analytical or AI method.",
          "Create at least three visual results and summarize performance or patterns.",
          "Identify two successful cases and two failure cases.",
          "Discuss noise, lighting, occlusion, missing timestamps, sensor disagreement, or another data-quality problem."
        ],
        "deliverables": [
          "Jupyter Notebook",
          "Three- to five-slide technical brief",
          "Failure-case table",
          "500-word interpretation",
          "Processed sample data or access instructions"
        ]
      },
      "assessment": {
        "format": "Physical AI perception analysis assignment",
        "details": [
          "The assignment assesses preparation of image, signal, time-series, or multimodal data.",
          "You will be evaluated on method selection, performance interpretation, visual results, and failure-case analysis.",
          "Strong submissions explain not only average performance but also when and why the system fails."
        ]
      },
      "rubric": [
        {
          "criterion": "Appropriate preparation of image, signal, or time-series data",
          "points": 20
        },
        {
          "criterion": "Selection and implementation of analytical method",
          "points": 25
        },
        {
          "criterion": "Evaluation and interpretation of results",
          "points": 20
        },
        {
          "criterion": "Failure-case and data-quality analysis",
          "points": 20
        },
        {
          "criterion": "Technical communication",
          "points": 15
        }
      ],
      "summary": "Physical AI systems often work with data that have spatial, visual, or temporal structure. Image data may be affected by lighting and occlusion, while time-series data may contain noise, irregular intervals, or missing periods. Multimodal systems combine information from several sensors, but the data must be properly aligned before they can be interpreted together. Failure-case analysis is essential for understanding whether a system can operate reliably outside a controlled environment.",
      "nextSteps": "Consider how the model would operate on an actual device or within a real environment. Identify the hardware required to collect and process the data, the expected data rate, the acceptable response time, and whether network connectivity can be assumed. Bring your model performance results and failure cases into Module 6.",
      "competency": [
        "Programming",
        "Modeling",
        "Data Curation",
        "Communication"
      ]
    },
    {
      "number": 6,
      "title": "Edge AI, Deployment, and System Constraints",
      "overview": "A model that performs well in a notebook may not perform equally well when deployed on a robot, embedded controller, mobile device, or remote sensor. Physical AI systems operate under constraints involving latency, memory, energy use, network availability, hardware capacity, environmental conditions, security, and reliability.",
      "purpose": "The purpose of this module is to connect model development with real-world implementation. You will evaluate whether a physical AI solution can operate within practical technical limits and identify monitoring and safety mechanisms required after deployment.",
      "objectives": [
        "Compare cloud, edge, and hybrid AI deployment approaches.",
        "Analyze latency, throughput, memory, power, network, privacy, and reliability requirements.",
        "Develop a deployment architecture diagram for a physical AI system.",
        "Design monitoring, failure-detection, fallback, and human-oversight procedures."
      ],
      "outcomes": [
        "Compare the benefits and limitations of cloud, edge, and hybrid processing.",
        "Calculate or interpret latency, throughput, memory use, energy consumption, and availability requirements.",
        "Recommend an appropriate deployment environment for a defined physical AI application.",
        "Identify how model size, sensor rate, communication delay, and hardware capacity affect system performance.",
        "Analyze potential system failures involving sensors, software, communication networks, models, or actuators.",
        "Design a monitoring plan that addresses model drift, data drift, system health, and abnormal behavior.",
        "Propose fallback procedures or human-oversight mechanisms for high-risk system failures."
      ],
      "readings": [
        {
          "title": "Course Notes: Edge, Cloud, and Hybrid AI",
          "focus": "Where inference happens and why deployment architecture matters."
        },
        {
          "title": "Latency and Constraints Worksheet",
          "focus": "Estimating end-to-end response time and practical system limits."
        },
        {
          "title": "CAU Computing Facilities Summary",
          "focus": "How high-performance CPU, GPU, and memory resources can support AI model development and testing."
        },
        {
          "title": "Monitoring and Fallback Planning Guide",
          "focus": "Detecting failures, tracking drift, and designing safe responses."
        }
      ],
      "assignment": {
        "title": "Edge AI Deployment and System Constraints Plan",
        "purpose": "Move the project from a notebook environment to a realistic physical deployment setting.",
        "tasks": [
          "Choose a deployment approach: edge, cloud, or hybrid.",
          "Create an architecture diagram showing Sensor \u2192 Local processing \u2192 Model inference \u2192 Decision \u2192 Actuator or interface \u2192 Data storage \u2192 Monitoring.",
          "Develop a constraints matrix addressing input frequency, latency, model size, memory, power, network dependence, privacy, environmental conditions, security risks, availability, and human oversight.",
          "Estimate end-to-end latency by considering sensor collection, data transfer, preprocessing, inference, and actuation time.",
          "Identify at least four failure modes and describe detection and fallback procedures."
        ],
        "deliverables": [
          "Three-page deployment brief",
          "System architecture diagram",
          "Constraints and trade-off matrix",
          "End-to-end latency estimate",
          "Failure-mode and fallback table",
          "Monitoring plan with at least five operational metrics"
        ]
      },
      "assessment": {
        "format": "Deployment trade-off activity and deployment plan assignment",
        "details": [
          "The activity checks your ability to compare cloud, edge, and hybrid decisions.",
          "The assignment assesses whether the design is realistic given hardware, memory, energy, network, privacy, latency, and reliability requirements.",
          "Strong submissions include safe fallback processes and an appropriate role for human oversight."
        ]
      },
      "rubric": [
        {
          "criterion": "Deployment architecture",
          "points": 20
        },
        {
          "criterion": "Constraints and trade-off analysis",
          "points": 20
        },
        {
          "criterion": "Quantitative performance estimates",
          "points": 20
        },
        {
          "criterion": "Monitoring, reliability, and fallback plan",
          "points": 25
        },
        {
          "criterion": "Clarity and technical justification",
          "points": 15
        }
      ],
      "summary": "A model that performs well during development may not operate successfully on a robot, mobile device, embedded controller, or remote sensor. Real systems face limits involving processing speed, memory, battery life, network access, environmental conditions, and hardware reliability. Edge processing can reduce latency and protect sensitive data, while cloud processing can provide greater computing capacity. Hybrid systems combine both approaches.",
      "nextSteps": "Use the deployment plan to identify everyone who may interact with or be affected by the system. Consider whose data will be collected, who will receive system alerts, who can override automated decisions, and who is responsible when the system fails. Carry the architecture diagram, monitoring plan, and failure analysis into Module 7.",
      "competency": [
        "Modeling",
        "Programming",
        "Ethics",
        "Communication"
      ]
    },
    {
      "number": 7,
      "title": "Responsible Physical AI and Social Impact",
      "overview": "Physical AI systems can directly affect people, neighborhoods, workplaces, and access to essential resources. A technically accurate system may still produce harmful outcomes if its data exclude certain groups, its design assumptions are incomplete, or its decisions are applied without sufficient context.",
      "purpose": "The purpose of this module is to help you evaluate physical AI as a sociotechnical system. You will learn to identify who benefits, who carries risk, whose data are represented, and what safeguards are needed before a system is deployed.",
      "objectives": [
        "Identify ethical, social, political, economic, privacy, and safety concerns in physical AI systems.",
        "Analyze possible bias across data collection, modeling, deployment, and monitoring.",
        "Evaluate how a system may affect different stakeholders and communities.",
        "Develop mitigation and accountability recommendations for responsible deployment."
      ],
      "outcomes": [
        "Identify possible sources of historical, sampling, measurement, labeling, algorithmic, and deployment bias.",
        "Analyze how a physical AI system may affect different stakeholder groups.",
        "Evaluate privacy and security risks associated with sensor, image, location, biometric, or community data.",
        "Interpret model performance across relevant groups rather than relying only on an overall average.",
        "Distinguish between technical performance, fairness, safety, and social acceptability.",
        "Develop mitigation strategies involving data improvements, model changes, access controls, human review, or community engagement.",
        "Write a concise impact statement explaining benefits, risks, limitations, and accountability measures."
      ],
      "readings": [
        {
          "title": "Course Notes: Responsible Physical AI",
          "focus": "Fairness, privacy, safety, transparency, accountability, and community impact."
        },
        {
          "title": "Bias Across the Data Lifecycle",
          "focus": "Problem framing, sensor placement, sampling, measurement, labels, thresholds, and deployment."
        },
        {
          "title": "Privacy and Security Checklist",
          "focus": "Sensitive data, location data, images, retention, access control, consent, and unauthorized use."
        },
        {
          "title": "Impact Assessment Template",
          "focus": "Stakeholders, benefits, harms, unequal outcomes, mitigation, and accountability."
        }
      ],
      "assignment": {
        "title": "Responsible Physical AI Impact Audit",
        "purpose": "Evaluate the ethical and social consequences of the proposed system.",
        "tasks": [
          "Create a stakeholder map identifying direct users, people represented in the data, people affected by decisions, community organizations, system operators, decision-makers, and overlooked groups.",
          "Evaluate possible bias in problem selection, sensor placement, sampling, measurement, labeling, missing data, model selection, thresholds, deployment, and human interpretation.",
          "Address privacy and security concerns involving personal information, location data, images, retention, access control, consent, surveillance, and breach consequences.",
          "Identify potential benefits, harms, unintended consequences, and groups that may experience different outcomes.",
          "Recommend safeguards involving better data collection, privacy protection, human review, community participation, appeals, monitoring, documentation, or system retirement."
        ],
        "deliverables": [
          "Four- to five-page impact assessment",
          "Stakeholder map",
          "One-page risk register",
          "Bias and fairness checklist",
          "Privacy and security statement",
          "200-word public-facing impact statement"
        ]
      },
      "assessment": {
        "format": "Responsible-AI scenario analysis and impact audit",
        "details": [
          "The scenario analysis checks your ability to recognize ethical, privacy, fairness, safety, and social-impact concerns.",
          "The impact audit evaluates risks across the full lifecycle from problem selection to deployment and retirement.",
          "Strong submissions identify practical safeguards rather than only listing abstract concerns."
        ]
      },
      "rubric": [
        {
          "criterion": "Stakeholder and social-context analysis",
          "points": 20
        },
        {
          "criterion": "Bias and fairness analysis",
          "points": 20
        },
        {
          "criterion": "Privacy and security analysis",
          "points": 15
        },
        {
          "criterion": "Benefits, harms, and unequal outcomes",
          "points": 15
        },
        {
          "criterion": "Mitigation and accountability plan",
          "points": 20
        },
        {
          "criterion": "Clarity and communication",
          "points": 10
        }
      ],
      "summary": "Responsible physical AI requires more than strong technical performance. A system may be accurate on average while still creating unequal risks, invading privacy, limiting access, or producing harmful outcomes for specific groups. Ethical analysis must examine the entire system, including its goals, assumptions, data sources, deployment environment, decision authority, and accountability structure.",
      "nextSteps": "Integrate the impact audit into the capstone project. Revise the system design where needed to address the risks identified in the stakeholder analysis and risk register. Before Module 8, confirm that the notebook runs, review all charts and metrics, finalize the model card and architecture diagram, add limitations and safeguards, and rehearse the presentation.",
      "competency": [
        "Ethics",
        "Modeling",
        "Data Curation",
        "Communication"
      ]
    },
    {
      "number": 8,
      "title": "Final Examination and Capstone Project Presentation",
      "overview": "The final module brings together the complete physical AI and data science lifecycle. You will demonstrate how a real-world problem can be translated into a data question, supported with appropriate data, examined through analysis or modeling, and communicated as a responsible physical AI proposal.",
      "purpose": "The purpose of this module is to demonstrate integrated mastery of the course. You will connect physical AI, data curation, programming, analysis, modeling, deployment, ethics, and communication in one coherent project and defend the choices made throughout the process.",
      "objectives": [
        "Synthesize the major physical AI and data science concepts developed across the course.",
        "Demonstrate individual mastery through a cumulative final examination.",
        "Communicate a complete capstone project to technical and nontechnical audiences.",
        "Reflect on project limitations, ethical responsibilities, and opportunities for future improvement."
      ],
      "outcomes": [
        "Demonstrate individual mastery of physical AI, data science, modeling, deployment, and responsible AI concepts.",
        "Present a clearly defined real-world problem and explain why it is suitable for data-driven investigation.",
        "Describe the data sources, preparation methods, analytical workflow, model, and evaluation metrics used in the capstone project.",
        "Interpret project findings without overstating what the data or model can support.",
        "Explain system limitations, ethical concerns, deployment risks, and proposed safeguards.",
        "Communicate results through visualizations, an oral presentation, a written report, and a reproducible project artifact.",
        "Respond to questions using evidence from the data and acknowledge areas of uncertainty.",
        "Reflect on how the project could be improved, extended, or responsibly implemented in a real environment."
      ],
      "readings": [
        {
          "title": "Capstone Portfolio Checklist",
          "focus": "Required report sections, notebook, cleaned data, data dictionary, model card, risk register, and slides."
        },
        {
          "title": "Final Exam Review Guide",
          "focus": "Physical AI, data curation, visualization, modeling, deployment, and responsible AI."
        },
        {
          "title": "Presentation Design Guide",
          "focus": "Clear problem framing, evidence-based visuals, model interpretation, limitations, and recommendations."
        },
        {
          "title": "Project Reflection Template",
          "focus": "What worked, what was limited, what changed, and what should happen next."
        }
      ],
      "assignment": {
        "title": "Final Capstone Project and Presentation",
        "purpose": "Demonstrate the complete physical AI and data science project lifecycle.",
        "tasks": [
          "Prepare a final report that defines the problem, stakeholders, data sources, cleaning process, exploratory findings, model, evaluation, deployment plan, ethical risks, and conclusions.",
          "Submit a reproducible notebook or code repository, cleaned data or access documentation, data dictionary, system architecture diagram, model card, risk register, presentation slides, and individual reflection.",
          "Deliver an 8- to 10-minute presentation explaining the problem, data, methods, findings, limitations, deployment plan, and social impact.",
          "Respond to questions using evidence from the analysis and acknowledge uncertainty where appropriate.",
          "Complete the cumulative final examination."
        ],
        "deliverables": [
          "8- to 12-page final report",
          "Executive summary",
          "Reproducible notebook or code repository",
          "Cleaned data or access instructions",
          "Data dictionary",
          "System architecture diagram",
          "Model card",
          "Risk register",
          "Presentation slides",
          "Individual reflection",
          "Final examination"
        ]
      },
      "assessment": {
        "format": "Final examination and capstone project portfolio",
        "details": [
          "The final examination assesses individual ability to interpret physical AI system diagrams, identify data-quality concerns, select visualizations and analytical methods, interpret metrics, analyze deployment trade-offs, and recognize ethical concerns.",
          "The capstone portfolio assesses the complete project lifecycle, including problem framing, data curation, exploratory analysis, modeling, deployment planning, responsible AI, and communication.",
          "The oral presentation evaluates your ability to explain technical work clearly to a mixed audience."
        ]
      },
      "rubric": [
        {
          "criterion": "Problem definition and disciplinary context",
          "points": 20
        },
        {
          "criterion": "Data acquisition, documentation, and preparation",
          "points": 25
        },
        {
          "criterion": "Exploratory analysis and visualization",
          "points": 25
        },
        {
          "criterion": "Modeling and evaluation",
          "points": 40
        },
        {
          "criterion": "Physical system and deployment plan",
          "points": 20
        },
        {
          "criterion": "Ethics and social-impact analysis",
          "points": 25
        },
        {
          "criterion": "Written and oral communication",
          "points": 30
        },
        {
          "criterion": "Reproducibility and project organization",
          "points": 15
        }
      ],
      "summary": "The capstone brings together the complete physical AI and data science lifecycle. You began with a real-world problem, identified relevant data, prepared and explored the data, developed and evaluated a model, examined deployment requirements, and assessed ethical and social consequences. The final project should demonstrate that a physical AI solution is a complete system involving data, software, hardware, people, decisions, risks, communication, and accountability.",
      "nextSteps": "After completing the course, preserve the project as part of your professional portfolio. Organize the code, report, data documentation, and presentation so that another person can review the work. Create a concise project description for a r\u00e9sum\u00e9, graduate-school application, research statement, or professional profile. Identify one realistic extension such as collecting additional data, improving the model, testing on edge hardware, conducting a community pilot, or preparing the project for publication or competition.",
      "competency": [
        "Mathematics and Statistics",
        "Programming",
        "Modeling",
        "Data Curation",
        "Ethics",
        "Communication"
      ]
    }
  ]
};


const state = { current: 'home' };
const sections = [
  ['overview', 'Overview'],
  ['purpose', 'Purpose'],
  ['objectives', 'Objectives'],
  ['outcomes', 'SLOs'],
  ['readings', 'Readings'],
  ['assignment', 'Assignment'],
  ['assessment', 'Assessment'],
  ['rubric', 'Rubric'],
  ['summary', 'Summary'],
  ['next', 'Next Steps']
];

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function list(items) {
  return `<ul>${items.map(item => `<li>${escapeHtml(item)}</li>`).join('')}</ul>`;
}

function readingList(items) {
  return items.map(item => `
    <div class="reading">
      <strong>${escapeHtml(item.title)}</strong>
      <p>${escapeHtml(item.focus)}</p>
    </div>
  `).join('');
}

function rubricTable(rows) {
  return `
    <table>
      <thead><tr><th>Criterion</th><th>Points</th></tr></thead>
      <tbody>${rows.map(row => `<tr><td>${escapeHtml(row.criterion)}</td><td>${escapeHtml(row.points)}</td></tr>`).join('')}</tbody>
    </table>
  `;
}

function moduleButton(module) {
  const active = state.current === module.number ? 'active' : '';
  return `<button class="module-btn ${active}" data-module="${module.number}">Module ${module.number}<small>${escapeHtml(module.title)}</small></button>`;
}

function renderNav(filter = '') {
  const q = filter.toLowerCase().trim();
  const nav = document.getElementById('moduleNav');
  const modules = courseData.modules.filter(m => {
    const blob = `${m.title} ${m.overview} ${m.purpose} ${m.objectives.join(' ')} ${m.outcomes.join(' ')}`.toLowerCase();
    return !q || blob.includes(q);
  });
  nav.innerHTML = modules.length ? modules.map(moduleButton).join('') : '<p class="notice" style="padding: 8px 12px;">No module matched your search.</p>';
  nav.querySelectorAll('[data-module]').forEach(btn => {
    btn.addEventListener('click', () => renderModule(Number(btn.dataset.module)));
  });
}

function renderHome() {
  state.current = 'home';
  renderNav(document.getElementById('searchBox').value);
  document.getElementById('courseTitle').textContent = courseData.title;
  document.getElementById('courseSubtitle').textContent = courseData.tagline;
  const content = document.getElementById('content');
  content.innerHTML = `
    <section class="card">
      <div class="card-body">
        <h2>Course Overview</h2>
        <p>${escapeHtml(courseData.description)}</p>
        <div class="course-grid">
          <div class="metric"><strong>8</strong>Modules</div>
          <div class="metric"><strong>6</strong>DSA competency areas</div>
          <div class="metric"><strong>1</strong>Scaffolded capstone project</div>
        </div>
        <h3>Course Learning Outcomes</h3>
        ${list(courseData.courseOutcomes)}
        <h3>Data Science Alignment</h3>
        <div class="competency">${courseData.alignment.map(a => `<span class="tag dark">${escapeHtml(a)}</span>`).join('')}</div>
        <h3>Course Facilities Note</h3>
        <p>${escapeHtml(courseData.facilities)}</p>
      </div>
    </section>
    <section class="card">
      <div class="card-body">
        <h2>Module Sequence</h2>
        <table>
          <thead><tr><th>Module</th><th>Title</th><th>Main Product</th></tr></thead>
          <tbody>
            ${courseData.modules.map(m => `<tr><td>${m.number}</td><td>${escapeHtml(m.title)}</td><td>${escapeHtml(m.assignment.title)}</td></tr>`).join('')}
          </tbody>
        </table>
      </div>
    </section>
  `;
  content.focus();
}

function renderModule(num) {
  const m = courseData.modules.find(item => item.number === num);
  if (!m) return renderHome();
  state.current = num;
  renderNav(document.getElementById('searchBox').value);
  document.getElementById('courseTitle').textContent = `Module ${m.number}: ${m.title}`;
  document.getElementById('courseSubtitle').textContent = 'Learner-facing overview, purpose, objectives, outcomes, readings, assignment, assessment, rubric, summary, and next steps.';
  const checked = localStorage.getItem(`module-${m.number}-complete`) === 'true' ? 'checked' : '';
  const prev = m.number > 1 ? m.number - 1 : null;
  const next = m.number < courseData.modules.length ? m.number + 1 : null;
  const content = document.getElementById('content');
  content.innerHTML = `
    <article class="card">
      <div class="module-hero">
        <h2>Module ${m.number}: ${escapeHtml(m.title)}</h2>
        <div class="competency">${m.competency.map(c => `<span class="tag">${escapeHtml(c)}</span>`).join('')}</div>
        <div class="section-jump">
          ${sections.map(([id, label]) => `<a href="#${id}">${label}</a>`).join('')}
        </div>
        <label class="progress-row"><input type="checkbox" id="completeBox" ${checked} /> Mark this module complete</label>
      </div>
      <div class="card-body">
        <section id="overview"><h3>Module Overview</h3><p>${escapeHtml(m.overview)}</p></section>
        <section id="purpose"><h3>Module Purpose</h3><p>${escapeHtml(m.purpose)}</p></section>
        <section id="objectives"><h3>Module Objectives</h3>${list(m.objectives)}</section>
        <section id="outcomes"><h3>Module Student Learning Outcomes</h3>${list(m.outcomes)}</section>
        <section id="readings"><h3>Reading Materials</h3>${readingList(m.readings)}</section>
        <section id="assignment"><h3>Assignment: ${escapeHtml(m.assignment.title)}</h3>
          <div class="info-box"><strong>Purpose:</strong> ${escapeHtml(m.assignment.purpose)}</div>
          <h4>Tasks</h4>${list(m.assignment.tasks)}
          <h4>Required Deliverables</h4>${list(m.assignment.deliverables)}
        </section>
        <section id="assessment"><h3>Module Assessment</h3>
          <p><strong>Format:</strong> ${escapeHtml(m.assessment.format)}</p>
          ${list(m.assessment.details)}
        </section>
        <section id="rubric"><h3>Rubric</h3>${rubricTable(m.rubric)}</section>
        <section id="summary"><h3>Module Summary</h3><p>${escapeHtml(m.summary)}</p></section>
        <section id="next"><h3>Next Steps</h3><p>${escapeHtml(m.nextSteps)}</p></section>
        <div class="bottom-nav">
          <button id="prevBtn">${prev ? `← Module ${prev}` : '← Course Home'}</button>
          <button id="nextBtn">${next ? `Module ${next} →` : 'Course Home →'}</button>
        </div>
      </div>
    </article>
  `;
  document.getElementById('completeBox').addEventListener('change', (event) => {
    localStorage.setItem(`module-${m.number}-complete`, event.target.checked ? 'true' : 'false');
  });
  document.getElementById('prevBtn').addEventListener('click', () => prev ? renderModule(prev) : renderHome());
  document.getElementById('nextBtn').addEventListener('click', () => next ? renderModule(next) : renderHome());
  content.focus();
}

document.addEventListener('DOMContentLoaded', () => {
  renderHome();
  document.getElementById('overviewBtn').addEventListener('click', renderHome);
  document.getElementById('printBtn').addEventListener('click', () => window.print());
  document.getElementById('searchBox').addEventListener('input', (event) => renderNav(event.target.value));
});

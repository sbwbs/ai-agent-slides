import { Session } from '../types/slides';

export const sessions: Session[] = [
  // Session 0: Title & Overview
  {
    id: 0,
    title: "Introduction",
    slides: [
      {
        id: 0,
        type: 'title',
        title: 'LLMs and AI Agents',
        subtitle: 'Past, Present, and Future',
        content: 'My Journey and Insights',
        icon: 'Sparkles'
      },
      {
        id: 1,
        type: 'bullets',
        title: 'About Me',
        subtitle: 'Wonbae Suh',
        bullets: [
          'Background: King\'s College London (History & War Studies, technology & cybersecurity focus)',
          'Deep experience in generative AI, LLM systems, RAG pipelines, and AI agents',
          'Career built on first-principles thinking, self-education, and hands-on experimentation',
          'Professional Identity: Forward Deployment Engineer → AI Solution Architect trajectory',
          'Known for translating complex AI systems into practical, deployable solutions for enterprise use',
          'Focus: Design, debug, and deploy AI agent systems end-to-end'
        ],
        highlight: 'Bridging customer needs → technical implementation',
        icon: 'User'
      },
      {
        id: 2,
        type: 'two-column',
        title: 'About Sendbird & My Role',
        leftContent: 'Sendbird Overview',
        leftBullets: [
          'Originally: Global chat API platform for messaging, calls, and support',
          'Today: AI Agent Platform for enterprises',
          'Reasoning-capable, tool-integrated AI agents',
          'Production-grade agent orchestration',
          'Key Customers: Coupang, Hanssem, Fursys/Sidiz, Woowa Brothers'
        ],
        rightContent: 'My Role as FDE',
        rightBullets: [
          'Own customer deployments: POC → production',
          'Build Actionbooks & integrate customer APIs',
          'Analyze logs & ensure real-world reliability',
          'Collaborate with PMs, engineering, and customer dev teams',
          'Act as field engineer AND AI architect'
        ],
        icon: 'Building2'
      },
      {
        id: 3,
        type: 'section',
        title: 'Session Overview',
        sessionNumber: 0,
        sessionTitle: 'What We\'ll Cover Today',
        icon: 'Presentation'
      },
      {
        id: 4,
        type: 'bullets',
        title: 'Our Journey Today',
        bullets: [
          'Foundations & Early Journey: Core concepts of AI/LLMs and how I got started',
          'Experimentation & Applied Work: Building AI agents, workflow design, and my project at SendBird',
          'LLMs Today – Tech & Impact: How LLMs work, new protocols (MCP, A2A), and their impact on education and work',
          'Future & Key Takeaways: The agentic ecosystem ahead, and lessons on continuous learning'
        ],
        icon: 'MapIcon'
      }
    ]
  },

  // Session 1: Foundations
  {
    id: 1,
    title: "Foundations of AI and LLMs",
    slides: [
      {
        id: 5,
        type: 'section',
        title: 'Foundations of AI and LLMs',
        sessionNumber: 1,
        sessionTitle: 'Core Principles',
        icon: 'Brain'
      },
      {
        id: 6,
        type: 'bullets',
        title: 'AI in a Nutshell',
        bullets: [
          'Artificial Intelligence: Machines mimicking cognitive functions like learning and problem-solving',
          'Machine Learning (ML): A subset that uses data to improve at tasks without explicit programming',
          'Deep Learning: Uses neural networks inspired by the brain to find patterns in large data'
        ],
        highlight: 'AI → ML → Deep Learning: Each is a subset of the previous',
        icon: 'Layers'
      },
      {
        id: 7,
        type: 'bullets',
        title: 'What is a Generative AI/LLM?',
        bullets: [
          'Generative AI: Models that create new content (text, images, etc.) resembling training data',
          'Large Language Model (LLM): Trained on massive text datasets to predict the next word',
          'Enables human-like text generation – essentially a super-advanced autocomplete',
          'Has learned grammar, facts, and reasoning patterns from billions of words'
        ],
        icon: 'MessagesSquare'
      },
      {
        id: 8,
        type: 'two-column',
        title: 'Scale and Capability',
        leftContent: 'Why LLMs Are Powerful',
        leftBullets: [
          'Sheer scale of training data (billions of words)',
          'Capture nuances of language implicitly',
          'Answer questions, write essays, hold conversations',
          'Almost human-like interaction'
        ],
        rightContent: 'Important Limitations',
        rightBullets: [
          'Lack true understanding',
          'Don\'t "know" facts like humans do',
          'Statistically generate likely answers',
          'Can produce hallucinations (incorrect/nonsensical outputs)'
        ],
        icon: 'Scale'
      }
    ]
  },

  // Session 2: Early AI History & Personal Journey
  {
    id: 2,
    title: "Early AI and My Journey",
    slides: [
      {
        id: 9,
        type: 'section',
        title: 'Early AI: From ELIZA to Now',
        sessionNumber: 2,
        sessionTitle: 'Past Perspective',
        icon: 'History'
      },
      {
        id: 10,
        type: 'bullets',
        title: 'The Evolution of AI',
        bullets: [
          '1966: ELIZA chatbot fooled people with scripted responses',
          '2000s-2010s: Progress in ML, neural networks, transformer models (2017)',
          '2020: GPT-3 emerged as a watershed moment',
          '2022: ChatGPT released – AI captured mainstream attention',
          'Global interest in "Generative AI" surged dramatically'
        ],
        highlight: 'From simple scripts to fluid, human-like dialogue',
        icon: 'Clock'
      },
      {
        id: 11,
        type: 'section',
        title: 'My Early Journey in LLMs',
        sessionNumber: 2,
        sessionTitle: 'Personal Story',
        icon: 'Rocket'
      },
      {
        id: 12,
        type: 'bullets',
        title: 'First Experiments',
        bullets: [
          'Started with simple chatbots using rules and small ML models',
          'Explored GPT-3 via API – amazed by coherent paragraph generation',
          'Pushed models with creative prompts to discover limits',
          'Both amazed and skeptical at the same time'
        ],
        highlight: 'The first time I got a coherent response felt like magic',
        icon: 'FlaskConical'
      },
      {
        id: 13,
        type: 'bullets',
        title: 'Discovering AI Agents',
        bullets: [
          'Moved beyond Q&A to systems that take actions',
          'Created scripts where LLM could trigger tools (web search, APIs)',
          'First successful web search + answer integration felt like witnessing the future',
          'Early experiments were clunky but showed incredible potential'
        ],
        highlight: 'Combining reasoning with action is incredibly powerful',
        icon: 'Bot'
      },
      {
        id: 14,
        type: 'bullets',
        title: 'Workflows & Chain of Thought',
        bullets: [
          'Designed multi-step processes instead of single prompt-response',
          'AI breaks tasks into steps: brainstorm → evaluate → recommend',
          'Structured prompts to carry information between steps',
          'Manual version of what tools like LangChain automate today'
        ],
        highlight: 'Like assembling lego blocks of intelligence',
        icon: 'Workflow'
      }
    ]
  },

  // Session 3: SendBird Experience
  {
    id: 3,
    title: "Applied Work at SendBird",
    slides: [
      {
        id: 15,
        type: 'section',
        title: 'Applied Work at SendBird',
        sessionNumber: 3,
        sessionTitle: 'Building an AI Chatbot',
        icon: 'MessageSquare'
      },
      {
        id: 16,
        type: 'bullets',
        title: 'SendBird AI Chatbot',
        subtitle: 'Enhancing customer engagement with AI',
        bullets: [
          'Natural Conversations: GPT-4 enabled human-like dialogue',
          'Company Knowledge Base: Fed proprietary data (FAQs, guides, policies)',
          'No-Code Solution: Non-developers could deploy custom chatbots',
          'Upload files or point to URLs – system incorporates into AI knowledge'
        ],
        icon: 'BotMessageSquare'
      },
      {
        id: 17,
        type: 'bullets',
        title: 'Key Feature: Grounded in Facts',
        bullets: [
          'Ingested SendBird product documentation',
          'System finds relevant info and includes in prompt',
          'Answers are fluent AND accurate to our domain',
          'Tailored responses specific to SendBird products'
        ],
        highlight: 'First-party data grounding was crucial for accuracy',
        icon: 'FileCheck'
      },
      {
        id: 18,
        type: 'two-column',
        title: 'Mitigating Hallucinations',
        leftContent: 'Problem',
        leftBullets: [
          'AI making up answers',
          'Sounding confident but being wrong',
          'Trust issues with users',
          'Need for verification'
        ],
        rightContent: 'Solutions',
        rightBullets: [
          'Contextual prompting with relevant docs',
          'Source citations in responses',
          'Links to documentation pages',
          'Transparency builds trust'
        ],
        icon: 'ShieldCheck'
      },
      {
        id: 19,
        type: 'bullets',
        title: 'Lessons Learned',
        bullets: [
          'Productizing LLMs requires more than just the model',
          'Surrounding system matters: retrieval, prompting strategy, UX',
          'Constant tuning and learning process',
          'Align AI with company voice and facts',
          'Human element is crucial for success'
        ],
        highlight: 'Seeing the system handle real support questions autonomously was surreal',
        icon: 'Lightbulb'
      },
      {
        id: 20,
        type: 'bullets',
        title: 'SendBird AI Agent for Customer Support',
        subtitle: 'Evolution from RAG Chatbot to Action-Driven Agents',
        bullets: [
          'Agents: Multi-step reasoning and autonomous decision-making',
          'Memory: Persistent context across conversations and sessions',
          'Channel Integration: Seamless deployment across chat, email, voice',
          'Actionbook (Prompting): Structured prompt templates for consistent behavior',
          'Tools: API integrations for ticketing, CRM, knowledge bases'
        ],
        highlight: 'From answering questions to taking actions',
        icon: 'Bot'
      }
    ]
  },

  // Session 4: How LLMs Work
  {
    id: 4,
    title: "How LLMs Work",
    slides: [
      {
        id: 21,
        type: 'section',
        title: 'How LLMs Work',
        sessionNumber: 4,
        sessionTitle: 'Technical Angle, Simplified',
        icon: 'Cpu'
      },
      {
        id: 22,
        type: 'bullets',
        title: 'Training and "Knowledge"',
        bullets: [
          'Trained on vast datasets (internet text, books, etc.)',
          'Learns to predict what word comes next in a sentence',
          'Picks up linguistic patterns, facts, and reasoning abilities',
          'Knowledge is frozen to training data – no automatic updates',
          'Doesn\'t know events after training cut-off'
        ],
        icon: 'GraduationCap'
      },
      {
        id: 23,
        type: 'bullets',
        title: 'The Black Box and Emergence',
        bullets: [
          'Millions/billions of parameters (weights in neural network)',
          'No programmed rules – model "figured out" language patterns',
          'Emergent abilities: poetry, code debugging, complex reasoning',
          'Can do things never explicitly trained for',
          'Even researchers aren\'t always sure how answers are derived'
        ],
        highlight: 'Both amazing and a bit scary',
        icon: 'Box'
      },
      {
        id: 24,
        type: 'bullets',
        title: 'Why LLMs Make Errors',
        bullets: [
          'Lack true understanding – just generate plausible sentences',
          'No consistent worldview or fact database',
          'Confidently state false information when uncertain',
          'Context length limits (few thousand words typically)',
          'May lose track of earlier details in long conversations'
        ],
        highlight: 'These limitations drive the need for augmentation techniques',
        icon: 'AlertCircle'
      }
    ]
  },

  // Session 5: Augmenting LLMs
  {
    id: 5,
    title: "Augmenting LLMs",
    slides: [
      {
        id: 25,
        type: 'section',
        title: 'Augmenting LLMs',
        sessionNumber: 5,
        sessionTitle: 'Vectors and Memory',
        icon: 'Database'
      },
      {
        id: 26,
        type: 'bullets',
        title: 'Retrieval-Augmented Generation (RAG)',
        subtitle: 'Giving the model a smart library to consult',
        bullets: [
          'Overcomes knowledge cut-off and limited memory',
          'Core technology: Vector embeddings',
          'Essentially an "open-book exam" for the AI',
          'Combines LLM fluency with database reliability'
        ],
        icon: 'BookOpen'
      },
      {
        id: 27,
        type: 'bullets',
        title: 'What Are Embeddings?',
        bullets: [
          'Numerical representations of text that capture semantic meaning',
          'A list of numbers (vector) where similar texts have similar numbers',
          '"Cat" and "kitty" have embeddings close to each other',
          'Encodes meaning and context, not just spelling',
          'Generated using specialized language models'
        ],
        highlight: 'Turning text into meaning you can measure',
        icon: 'Binary'
      },
      {
        id: 28,
        type: 'bullets',
        title: 'Vector Databases & Semantic Search',
        bullets: [
          'Store embeddings of documents in vector database',
          'Embed user question and search for closest matches',
          'Like a librarian that searches by meaning, not keywords',
          'Can find "pricing policies" when asked "How much does it cost?"',
          'Understands concepts, not just exact words'
        ],
        icon: 'Search'
      },
      {
        id: 29,
        type: 'bullets',
        title: 'Integration with LLM Prompts',
        bullets: [
          'For each query, fetch top relevant snippets from vector DB',
          'Insert snippets into LLM prompt as context',
          'LLM consults up-to-date, specific information',
          'Dramatically improves factual accuracy',
          'Extends model knowledge beyond training data'
        ],
        highlight: 'This is how SendBird bot knew latest product details',
        icon: 'Link'
      }
    ]
  },

  // Session 6: Tools and Agents
  {
    id: 6,
    title: "Extending LLMs: Tools and Agents",
    slides: [
      {
        id: 30,
        type: 'section',
        title: 'Extending LLMs',
        sessionNumber: 6,
        sessionTitle: 'Tools and Agents',
        icon: 'Wrench'
      },
      {
        id: 31,
        type: 'two-column',
        title: 'Why Tools?',
        leftContent: 'LLM Limitations',
        leftBullets: [
          'Knowledge is frozen',
          'Can\'t execute actions',
          'Just produce text',
          'No interaction with world'
        ],
        rightContent: 'Tools Enable',
        rightBullets: [
          'Fetch fresh information',
          'Affect external systems',
          'API calls and queries',
          'Real-time data access'
        ],
        icon: 'Settings'
      },
      {
        id: 32,
        type: 'bullets',
        title: 'From Static Model to Interactive Agent',
        bullets: [
          'Example: "What\'s the weather in Seoul?" → calls weather API',
          'Example: "Schedule a meeting" → creates calendar event',
          'LLM output triggers functions in the system',
          'Transforms AI from content generator to task executor'
        ],
        highlight: 'Text + Action = Much more useful AI',
        icon: 'Zap'
      },
      {
        id: 33,
        type: 'two-column',
        title: 'Evolution: LLM Workflows vs LLM Agents',
        leftContent: 'Traditional LLM Workflows',
        leftBullets: [
          'Manual prompting and chaining',
          'Developer writes explicit logic',
          'Rigid sequential steps',
          'Limited autonomy',
          'Custom framework code'
        ],
        rightContent: 'Modern LLM Agents',
        rightBullets: [
          'Autonomous reasoning and planning',
          'Agent decides next steps',
          'Dynamic tool selection',
          'Self-correcting behavior',
          'Native SDKs handle heavy lifting'
        ],
        icon: 'Workflow'
      },
      {
        id: 34,
        type: 'bullets',
        title: 'Native Agent SDKs',
        subtitle: 'OpenAI, Anthropic, Gemini',
        bullets: [
          'Built-in function calling and tool use',
          'Automatic prompt optimization and context management',
          'Native support for multi-turn reasoning',
          'Standardized interfaces across providers',
          'Developer focus shifts from orchestration to defining tools and goals'
        ],
        highlight: 'Providers compete on making agents easier to build',
        icon: 'Code'
      },
      {
        id: 35,
        type: 'bullets',
        title: 'Model Context Protocol (MCP)',
        subtitle: 'Introduced by Anthropic, late 2024',
        bullets: [
          'Open standard for AI to connect with tools, data, and services',
          'Universal adapter instead of vendor-specific formats',
          'Structured JSON-based protocol for function calling',
          'Vendor-neutral and secure',
          'Any AI can plug into any MCP-compatible tool'
        ],
        highlight: 'Like HTTP for AI-tool communication',
        icon: 'Plug'
      },
      {
        id: 36,
        type: 'bullets',
        title: 'Agent-to-Agent Protocol (A2A)',
        subtitle: 'Announced by Google, 2025',
        bullets: [
          'If MCP is AI→tools, A2A is AI→AI',
          'Enables specialized agents to collaborate',
          'Example: Legal AI + Financial AI working together',
          'Standard for secure inter-agent communication',
          'Built on HTTP/JSON for ease of integration'
        ],
        highlight: 'Building networks of collaborative AI',
        icon: 'Network'
      },
      {
        id: 37,
        type: 'bullets',
        title: 'Core Components of AI Agents',
        subtitle: 'Building Blocks of Autonomous Systems',
        bullets: [
          '1. Input/Perception: Receives and transforms raw input (text, events, sensors)',
          '2. Memory/State: Short-term (conversation context) and long-term (user preferences, history)',
          '3. Reasoning/Planning: Breaks tasks into steps, chooses tools/actions',
          '4. Action/Execution: Calls APIs, sends responses, triggers side-effects',
          '5. Orchestration: Manages flow between perception → memory → reasoning → action',
          '6. Learning/Feedback: Monitors outcomes, adapts behavior (optional)',
          '7. Safety/Governance: Validates inputs, restricts tools, logs actions'
        ],
        highlight: 'Each component works together to create intelligent, autonomous behavior',
        icon: 'Boxes'
      },
      {
        id: 38,
        type: 'bullets',
        title: 'Agentic Compound Systems',
        bullets: [
          'Complex systems of multiple AI agents + tools',
          'Future: Finance AI, HR AI, Research AI all interoperating',
          'Industry converging on MCP and A2A protocols',
          'Scaling from one chatbot to an AI team',
          'Challenge: Coherent, secure, aligned multi-agent systems'
        ],
        highlight: 'We are at the dawn of AI ecosystems',
        icon: 'GitBranch'
      }
    ]
  },

  // Session 7: LLMs in Education
  {
    id: 7,
    title: "LLMs in Education",
    slides: [
      {
        id: 39,
        type: 'section',
        title: 'LLMs in Education',
        sessionNumber: 7,
        sessionTitle: 'Impact on Learning and Teaching',
        icon: 'School'
      },
      {
        id: 40,
        type: 'bullets',
        title: 'Student Adoption',
        bullets: [
          '86% of students globally use AI for studies (2024)',
          '66% have specifically used ChatGPT',
          'Uses: Research, explanations, brainstorming, essay outlines',
          'Becoming like a new calculator or Google'
        ],
        highlight: 'Two in three students now use ChatGPT',
        icon: 'Users'
      },
      {
        id: 41,
        type: 'two-column',
        title: 'The Double-Edged Sword',
        leftContent: 'Concerns',
        leftBullets: [
          'Cheating and originality issues',
          'Dependency on AI',
          'Misuse to cut corners',
          'Academic integrity challenges',
          'Learning vs. submitting AI work'
        ],
        rightContent: 'Opportunities',
        rightBullets: [
          'Personalized tutoring',
          'Instant explanations',
          'Help with brainstorming',
          'Support for struggling students',
          'Free up teacher time'
        ],
        icon: 'Swords'
      },
      {
        id: 42,
        type: 'bullets',
        title: 'Teachers\' Perspectives',
        subtitle: 'Pew Survey, late 2023',
        bullets: [
          '25% of K-12 teachers: AI does more harm than good',
          'Only 6% thought AI was mostly positive',
          'Rest were unsure or saw mixed effects',
          'Concerns: Over-reliance, inaccurate info, ethics',
          'Potential: Grading assistance, lesson planning, personalized learning'
        ],
        icon: 'UserCheck'
      },
      {
        id: 43,
        type: 'bullets',
        title: 'The Path Forward: AI Literacy',
        bullets: [
          'Teach how to use AI effectively and ethically',
          'Acknowledge AI as powerful learning aid',
          'Educate on limitations (verify facts, avoid blind trust)',
          'Document AI use and critique outputs',
          'Prepare students for AI-ubiquitous workforce'
        ],
        highlight: 'AI isn\'t going away – manage it thoughtfully',
        icon: 'BookOpenCheck'
      }
    ]
  },

  // Session 8: LLMs in Workplace
  {
    id: 8,
    title: "LLMs in the Workplace",
    slides: [
      {
        id: 44,
        type: 'section',
        title: 'LLMs in the Workplace',
        sessionNumber: 8,
        sessionTitle: 'Changing How We Work',
        icon: 'Briefcase'
      },
      {
        id: 45,
        type: 'bullets',
        title: 'Widespread Adoption',
        bullets: [
          '76% of offices worldwide using ChatGPT (end of 2024)',
          '~33% of employees globally actively using for work',
          'Nearly doubled from previous year',
          'Uses: Writing emails, reports, code, marketing, data analysis',
          'Released late 2022 → majority adoption in 2 years'
        ],
        highlight: 'Each knowledge worker now has a junior assistant',
        icon: 'Building'
      },
      {
        id: 46,
        type: 'bullets',
        title: 'Productivity Boosts',
        subtitle: 'MIT Study, 2023',
        bullets: [
          'Tasks completed ~40% faster with ChatGPT',
          'Output quality improved ~18%',
          'Saves time AND produces better results',
          'Weaker writers benefited most',
          'Acts as an equalizer in certain skills'
        ],
        icon: 'TrendingUp'
      },
      {
        id: 47,
        type: 'bullets',
        title: 'New Workflows and Roles',
        bullets: [
          'Emergence of "prompt engineer" roles',
          'AI integrated into existing tools (Office, IDEs, customer service)',
          'Human supervises, AI handles grunt work',
          'Jobs shift toward supervision and creative judgment',
          'Support agents handle complex cases, AI handles FAQs'
        ],
        highlight: 'Augmenting roles rather than replacing them',
        icon: 'Users2'
      },
      {
        id: 48,
        type: 'two-column',
        title: 'Workplace Challenges',
        leftContent: 'Concerns',
        leftBullets: [
          'Confidentiality and data leaks',
          'Accuracy requires verification',
          'Over-reliance and skill loss',
          'Time spent checking outputs',
          'AI-generated "workslop"'
        ],
        rightContent: 'Solutions',
        rightBullets: [
          'Company policies and training',
          'Self-hosted models',
          'Review processes',
          'Strategic AI use guidelines',
          'Balance automation with skills'
        ],
        icon: 'ShieldAlert'
      },
      {
        id: 49,
        type: 'bullets',
        title: 'Overall Impact',
        bullets: [
          'General-purpose technology like computers or internet',
          'Near-term: Augments human workers',
          'Long-term: Some tasks automated, new tasks emerge',
          'Demand for domain expertise + AI skills',
          'Human creativity, strategy, and interpersonal skills more defining'
        ],
        highlight: 'Professionals who combine expertise with AI will be in high demand',
        icon: 'Target'
      }
    ]
  },

  // Session 9: Future of LLMs
  {
    id: 9,
    title: "The Future",
    slides: [
      {
        id: 50,
        type: 'section',
        title: 'What Lies Ahead',
        sessionNumber: 9,
        sessionTitle: 'The Future of LLMs and Generative AI',
        icon: 'Telescope'
      },
      {
        id: 51,
        type: 'bullets',
        title: 'Even More Capable Models',
        bullets: [
          'Progression: GPT-2 → GPT-3 → GPT-4 → ?',
          'Trillions of parameters and specialized training',
          'Multimodal understanding and better reasoning',
          'Fewer errors, more nuanced understanding',
          'Exploration of new architectures beyond simple scaling'
        ],
        icon: 'Gauge'
      },
      {
        id: 52,
        type: 'bullets',
        title: 'Multimodal and Versatile AI',
        bullets: [
          'Beyond text: images, audio, video',
          'See, hear, and generate visuals on the fly',
          'Explain diagrams, analyze recordings, create graphics',
          'Integration through AR glasses, voice assistants',
          'True smart assistant across all modalities'
        ],
        highlight: 'Not confined to chat boxes anymore',
        icon: 'MonitorSmartphone'
      },
      {
        id: 53,
        type: 'bullets',
        title: 'Agent Ecosystems',
        bullets: [
          'Swarms of specialized AIs collaborating',
          'Medical diagnosis: Symptoms AI + Treatment AI + Drug Interaction AI',
          'Business: "AI CEO" delegating to "AI department heads"',
          'Challenge: Orchestration and reliable cooperation',
          'New field: AI Operations (AI Ops)'
        ],
        highlight: 'Managing fleets of AI workers',
        icon: 'Globe'
      },
      {
        id: 54,
        type: 'bullets',
        title: 'Ethics, Regulation, and Society',
        bullets: [
          'Preventing biases and discrimination',
          'Accountability for AI actions',
          'Job automation decisions',
          'AI regulations and transparency requirements',
          'Labeling AI-generated content to prevent misinformation'
        ],
        icon: 'Scale3d'
      },
      {
        id: 55,
        type: 'bullets',
        title: 'AI for Societal Challenges',
        bullets: [
          'Climate modeling and environmental solutions',
          'Personalized medicine and healthcare',
          'Education in under-resourced areas',
          'AI tutor for every child',
          'Your generation steers these developments'
        ],
        highlight: 'AI should amplify human potential, not undermine it',
        icon: 'HeartHandshake'
      },
      {
        id: 56,
        type: 'quote',
        quote: 'The illiterate of the 21st century will not be those who cannot read and write, but those who cannot learn, unlearn, and relearn.',
        author: 'Alvin Toffler'
      },
      {
        id: 57,
        type: 'bullets',
        title: 'Continuous Learning for Humans',
        bullets: [
          'Half-life of knowledge in tech is shrinking',
          'What you learn today may be outdated in a few years',
          'Need for lifelong learning and adaptability',
          'Embrace curiosity and flexibility',
          'Be ready to be a beginner again'
        ],
        highlight: 'Adaptability is the superpower of the 21st century',
        icon: 'RefreshCw'
      }
    ]
  },

  // Session 10: Key Takeaways
  {
    id: 10,
    title: "Key Takeaways",
    slides: [
      {
        id: 58,
        type: 'section',
        title: 'Key Takeaways and Advice',
        sessionNumber: 10,
        sessionTitle: 'Lessons for the Journey Ahead',
        icon: 'Compass'
      },
      {
        id: 59,
        type: 'bullets',
        title: '1. Stick to Fundamentals',
        bullets: [
          'Solid fundamentals carry you through change',
          'In AI: probability, logic, human-centered design',
          'Master the basics – they are the bedrock',
          'Critically evaluate new tools with strong foundation',
          'Understanding why helps design better solutions'
        ],
        icon: 'Anchor'
      },
      {
        id: 60,
        type: 'bullets',
        title: '2. Learn Step by Step',
        bullets: [
          'Don\'t be overwhelmed by hype or breadth',
          'Take incremental approach: simple chatbot → single-tool agent → complex system',
          'Each step should stretch you, not overwhelm you',
          'Celebrate small wins – progress compounds',
          'Consistent incremental learning beats sporadic big leaps'
        ],
        icon: 'TrendingUp'
      },
      {
        id: 61,
        type: 'bullets',
        title: '3. Hands-On Experimentation',
        bullets: [
          'Theory is great, but doing teaches the most',
          'Play with demos, write scripts, build prototypes',
          'Failure is expected and okay – debugging deepens understanding',
          'Barrier to entry is lower than ever (free tiers, university resources)',
          'Be willing to tinker and experiment'
        ],
        highlight: 'Get your hands dirty',
        icon: 'Hammer'
      },
      {
        id: 62,
        type: 'bullets',
        title: '4. Stay Curious and Keep Learning',
        bullets: [
          'Follow AI news (filter the noise)',
          'Take online courses',
          'Join communities and forums',
          'Share experiments and learn from others',
          'Cultivate broad curiosity – interdisciplinary ideas spark innovation'
        ],
        icon: 'Sparkles'
      },
      {
        id: 63,
        type: 'bullets',
        title: '5. Be Ready to Unlearn/Adapt',
        bullets: [
          'Hard but crucial: let go of outdated approaches',
          'Expertise in one framework → new paradigm arrives',
          'View as evolution, not setback',
          'Flexibility over attachment to "how things were done"',
          'Liberating to embrace the new and be a beginner again'
        ],
        icon: 'RotateCcw'
      },
      {
        id: 64,
        type: 'bullets',
        title: '6. Ethics and Purpose',
        bullets: [
          'Technology is a means to an end',
          'Keep sight of human values and real problems to solve',
          'If educator: how can AI help students learn better?',
          'If business: improve experience respectfully',
          'Guide AI usage toward positive outcomes'
        ],
        highlight: 'Remember the why',
        icon: 'Heart'
      },
      {
        id: 65,
        type: 'bullets',
        title: 'Final Thoughts',
        bullets: [
          'We stand at an exciting intersection of past lessons and future possibilities',
          'From early chatbots to sophisticated agents and protocols',
          'The journey is continuous',
          'Experiment boldly, learn from failures, share insights',
          'Remain adaptable and human-centered'
        ],
        icon: 'Star'
      },
      {
        id: 66,
        type: 'quote',
        quote: 'The AI revolution is not just something happening to us; it\'s something we are all co-creating.',
        author: ''
      },
      {
        id: 67,
        type: 'title',
        title: 'Thank You!',
        subtitle: 'Questions & Discussion',
        content: 'Let\'s explore the future of AI together',
        icon: 'PartyPopper'
      }
    ]
  }
];

// Flatten all slides for easy navigation
export const allSlides = sessions.flatMap(session => session.slides);

// Get session for a given slide
export const getSessionForSlide = (slideId: number): Session | undefined => {
  return sessions.find(session =>
    session.slides.some(slide => slide.id === slideId)
  );
};

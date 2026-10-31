window.SITE = {
  name: 'Kuanyu Chien',
  subtitle: 'Computer Science · Robotics · Machine Learning',
  github: 'https://github.com/KuanyuChien',
  linkedin: 'https://www.linkedin.com/in/kuanyuchien',
  email: 'kuanyu.chien.eng@gmail.com',
  projects: [
    {
      id:'pusht', type:'Research', tag:'Robotics / Imitation Learning', year:'2026', title:'Diffusion Policy vs. ACT on PushT',
      summary:'Trained and evaluated two imitation-learning methods on the same manipulation task and investigated why their performance differed.',
      stack:['Python','PyTorch','LeRobot','GPU / Slurm'], theme:'violet', featured:true,
      role:'Student Researcher · SPARK Robotics Lab',
      overview:'I trained Diffusion Policy (DP) and Action Chunking Transformer (ACT) policies on the PushT simulation task using a GPU cluster, then evaluated both methods under matched conditions. My focus was on reproducible evaluation, configuration correctness, and understanding model behavior—not just reporting the highest score.',
      contributions:['Built a reproducible GPU training and evaluation workflow, including environment smoke tests and checkpoint evaluation.','Trained DP and ACT for 200,000 steps each; evaluated final checkpoints on the same 500 start positions.','Found and corrected silent library-default differences that could invalidate comparisons.','Investigated the uncertainty of small evaluation runs and avoided selecting a checkpoint based on the test set.'],
      results:[{label:'Diffusion Policy',value:'67.0%'},{label:'ACT',value:'31.6%'},{label:'Evaluation episodes',value:'500'}],
      lessons:'Small evaluation samples gave misleading impressions of model progress. I learned to separate monitoring from final evaluation and to inspect library configuration changes before large training runs.',
      note:'Code and checkpoints are not linked publicly pending lab/advisor approval.'
    },
    {
      id:'scry',type:'Capstone',tag:'Security / Data Systems',year:'2026',title:'Scry — Insider Threat Detection',
      summary:'Helped build a risk-scoring system for insider-threat signals, with stronger evaluations and organization-aware comparisons.',
      stack:['Python','pytest','Data Pipelines','Evaluation'], theme:'blue', featured:true,
      role:'Software Engineer · University of Utah Capstone',
      overview:'Scry is a team capstone project for identifying potentially risky insider activity in organizational data. I worked on the scoring and evaluation pipeline, including correctness and isolation when processing data from multiple organizations.',
      contributions:['Built parts of the risk-scoring engine and evaluation framework.','Implemented 7-day and 30-day evaluation windows to align activity with incident periods.','Corrected peer comparisons so employees are compared only with peers in the same organization.','Added regression and end-to-end tests to verify scoring correctness and expose a missing production check.'],
      results:[{label:'Ranking lift vs. event counts',value:'2.9×'},{label:'Users evaluated',value:'~2,000'},{label:'Known insiders',value:'99'}],
      lessons:'Correctness can break silently when a system expands from one organization to many. Tests should cover the complete path, not just helper functions.',
      note:'Metrics are from the project’s reported evaluation and are not claims of production deployment.'
    },
    {
      id:'sql',type:'Course Project',tag:'Compilers / Databases',year:'2026',title:'Lightweight SQL Database',
      summary:'Implemented a small in-memory SQL engine from tokenizer and parser through execution.',
      stack:['Python','SQL','Parsing','Query Execution'],theme:'mint',featured:true,
      role:'Computer Science Course Project',
      overview:'I implemented an in-memory database engine supporting SQL query processing. This project gave me hands-on experience with language parsing, internal representations, and execution behavior.',
      contributions:['Built a tokenizer, parser, storage layer, and query execution engine.','Added support for joins, subqueries, set operations, and NULL logic.','Tested the engine against thousands of cases and improved performance.'],
      results:[{label:'Test cases',value:'4,857'},{label:'Earlier runtime',value:'18 s'},{label:'Optimized runtime',value:'11 s'}],
      lessons:'Building a small language processor made the connections between compilers and database systems concrete.'
    },
    {
      id:'yam',type:'Research',tag:'Robotics / Debugging',year:'2026',title:'Investigating YAM Robot Policy Stalls',
      summary:'Used recorded inference requests to investigate delayed robot motion in a vision-language-action policy.',
      stack:['Python','Robot Teleoperation','VLA','Log Analysis'],theme:'orange',featured:false,
      role:'Student Researcher · SPARK Robotics Lab',
      overview:'During testing with a YAM robotic-arm setup, the robot sometimes made tiny movements before beginning smooth motion. I studied the pattern using logs and offline replay to narrow down the cause.',
      contributions:['Observed delayed movement in 7 of 26 test episodes.','Replayed 763 logged requests to reproduce and investigate the behavior offline.','Identified a self-reinforcing “stay still” behavior linked to ambiguous observations.','Proposed confidence checks and scene adjustments for future testing.'],
      results:[{label:'Observed stalls',value:'7 / 26'},{label:'Requests replayed',value:'763'},{label:'Fix status',value:'Not yet tested'}],
      lessons:'Reproducible replay is invaluable when debugging robotics systems that are difficult to reset and test.',
      note:'The proposed fixes have not yet been validated on the physical robot.'
    },
    {
      id:'qt',type:'Course Project',tag:'Desktop Software',year:'2026',title:'Educational Desktop App',
      summary:'Designed modular C++ components and coordinated an Agile team to deliver an educational application.',
      stack:['C++','Qt','Architecture','Agile'],theme:'sand',featured:false,
      role:'Team Software Project',
      overview:'I worked on an educational desktop application with a six-person team, focusing on application structure and sprint coordination.',
      contributions:['Coordinated a six-person team across eight Agile sprints.','Designed application architecture and modular C++ components.','Helped deliver four core features.'],
      results:[{label:'Team members',value:'6'},{label:'Sprints',value:'8'},{label:'Core features',value:'4'}],
      lessons:'A maintainable architecture and clear team coordination matter as much as implementing individual features.'
    }
  ],
  notes:[
    {id:'pusht-evaluation',date:'Oct 29, 2026',category:'Research notes',title:'What 500 PushT evaluations taught me',description:'Why 50-episode training evaluations were not enough to compare policies.',project:'pusht',body:[
      {h:'The question',p:'After training Diffusion Policy, the 50-episode monitoring runs seemed to plateau. I wanted to know whether the model had truly stopped improving.'},
      {h:'What I tried',p:'I evaluated checkpoints with 500 episodes rather than 50, using a consistent set of start positions. The final 200k-step DP model achieved 67.0% success. My ACT model, evaluated on the same starts, achieved 31.6%.'},
      {h:'What changed',p:'The larger evaluation revealed progress hidden by noisy small-sample results. I also decided to report the preselected final checkpoint rather than the highest checkpoint score from the test set.'},
      {h:'Takeaway',p:'Use small evaluation runs to monitor training, but reserve carefully designed evaluations for conclusions. Reproducibility and fair comparisons make the result more meaningful.'}
    ]},
    {id:'debugging-vla',date:'Oct 23, 2026',category:'Lab log',title:'Debugging a robot that hesitates before moving',description:'Turning a hard-to-reproduce robot behavior into a repeatable offline investigation.',project:'yam',body:[
      {h:'Observation',p:'The YAM arm sometimes twitched for many seconds before moving smoothly. The behavior occurred in 7 of 26 episodes in the recorded tests.'},
      {h:'Investigation',p:'I replayed 763 inference requests and reproduced the output, which helped rule out several timing-related explanations.'},
      {h:'Working hypothesis',p:'When the scene is ambiguous, the policy may initially choose to stay still, and subsequent context can reinforce that decision.'},
      {h:'Next step',p:'Test proposed confidence checks and improved scene framing on the physical setup. These mitigations are ideas, not validated fixes.'}
    ]},
    {id:'scaling-scry',date:'Oct 2026',category:'Engineering notes',title:'What changed when Scry supported multiple organizations',description:'On peer isolation, correctness tests, and silent scoring bugs.',project:'scry',body:[
      {h:'Challenge',p:'Risk-score comparisons that worked on one organization could become misleading if users from multiple organizations were mixed.'},
      {h:'Implementation',p:'I changed the peer-comparison logic to operate within each organization and added tests for organization isolation.'},
      {h:'Takeaway',p:'When making software work at a larger scale, correctness assumptions deserve as much attention as performance.'}
    ]}
  ]
};

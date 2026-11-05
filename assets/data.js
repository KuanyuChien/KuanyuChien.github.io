window.SITE = {
  name: 'Kuanyu Chien',
  subtitle: 'Computer Science · Robotics · Machine Learning',
  github: 'https://github.com/KuanyuChien',
  linkedin: 'https://www.linkedin.com/in/kuanyuchien',
  email: 'kuanyu.chien.eng@gmail.com',
  projects: [
    {
      id:'pusht', type:'Research', tag:'Robotics / Imitation Learning', year:'2026', title:'Diffusion Policy vs. ACT on PushT',
      summary:'Reproduced LeRobot’s Diffusion Policy on PushT (67.0% success over 500 trials) and compared it with ACT (31.6%) under matched conditions.',
      stack:['Python','PyTorch','LeRobot','GPU / Slurm'], theme:'violet', featured:true,
      role:'Student Researcher · SPARK Robotics Lab',
      repo:'https://github.com/KuanyuChien/pusht-diffusion-vs-act',
      page:'pusht.html',
      cover:'assets/projects/pusht/cover_1200x630.png',
      hero:{video:'assets/projects/pusht/hero_dp_vs_act.mp4',poster:'assets/projects/pusht/hero_dp_vs_act_poster.jpg',caption:'Same starting position, two policies. Diffusion Policy pushes the T onto the target in 5.7 s; ACT pushes it away and never recovers. (3× speed)'},
      overview:'I reproduced LeRobot’s Diffusion Policy on the PushT benchmark (67.0% success over 500 trials, vs 65.4% reported) and compared it with ACT (31.6%), training both on a university HPC GPU cluster with Slurm. The two methods fail differently: most Diffusion Policy failures are near misses, while most ACT failures are clear misses, which is consistent with PushT’s multimodal demonstrations.',
      method:{src:'assets/projects/pusht/workflow.svg',alt:'Workflow diagram: environment setup and config matching on the login node, smoke tests, 200k-step training and 500-episode evaluation on GPU nodes, then analysis.',caption:'End-to-end workflow, from environment setup on the login node to GPU training, evaluation, and analysis.'},
      contributions:['Built a reproducible GPU training and evaluation workflow on Slurm, including environment checks, smoke tests, and checkpoint evaluation.','Matched training configs to the official Diffusion Policy release and validated the evaluation pipeline against the official checkpoint (59.4% on the same 500 starts).','Trained DP and ACT for 200,000 steps each; evaluated every 25k-step checkpoint on the same 500 start positions.','Found and corrected silent library-default differences that could invalidate comparisons.','Analyzed failure types and used paired McNemar tests to check that differences were statistically meaningful.'],
      chart:{src:'assets/projects/pusht/results_chart.png',alt:'Line chart of PushT success rate across 200k training steps. Diffusion Policy rises to 67.0%; ACT reaches 31.6%. Official checkpoint scores 59.4% under the same evaluation.',caption:'Success rate across training. Each point is 500 evaluation episodes; the shaded bands are 95% confidence intervals.'},
      grid:{video:'assets/projects/pusht/grid_dp_vs_act.mp4',poster:'assets/projects/pusht/grid_dp_vs_act_poster.jpg',caption:'More examples, side by side: both succeed, Diffusion Policy wins, and ACT wins.'},
      results:[{label:'Diffusion Policy',value:'67.0%'},{label:'ACT',value:'31.6%'},{label:'Evaluation episodes',value:'500'},{label:'Reported DP baseline',value:'65.4%'}],
      lessons:'Small evaluation samples gave misleading impressions of model progress. I learned to separate monitoring from final evaluation, to inspect library configuration changes before large training runs, and to look at how a policy fails, not just how often.'
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
      id:'gello-yam',type:'Research',tag:'Robotics / Teleoperation',year:'2026',title:'Bimanual GELLO Teleoperation on YAM',
      summary:'Integrated two GELLO leader devices to teleoperate both YAM Ultra arms together through a streamlined launch workflow.',
      stack:['ROS 2','GELLO','YAM Ultra','Teleoperation'],theme:'orange',featured:false,
      role:'Student Researcher · SPARK Robotics Lab',
      cover:'assets/projects/gello-yam/gello-leaders.jpg',
      photo:{src:'assets/projects/gello-yam/gello-leaders.jpg',alt:'Two assembled 3D-printed GELLO leader arms with servo motors mounted side by side on a wooden board.',caption:'The two GELLO leader arms I assembled for bimanual YAM teleoperation.'},
      demo:{title:'Collecting a demonstration',video:'assets/projects/gello-yam/teleop_demo_bottle.mp4',poster:'assets/projects/gello-yam/teleop_demo_bottle_poster.jpg',caption:'A recorded data-collection episode: I teleoperate the YAM arms with the GELLO leaders to pick up a bottle and place it in the bin. Three synchronized camera views.'},
      overview:'I assembled the GELLO leader arms, then brought up and calibrated a second GELLO leader, mapped it to the right YAM Ultra arm, and integrated both leaders into a shared bimanual teleoperation workflow. The goal was to make two-arm control reliable enough for everyday research use while keeping startup and shutdown simple.',
      contributions:['Assembled the 3D-printed GELLO leader arms, including servos and wiring, for YAM teleoperation.','Verified communication across all seven actuators on the new right-hand leader.','Calibrated the leader at the robot zero pose and created a matching right-arm joint and gripper mapping.','Validated joint, zero-pose, and gripper behavior in simulation before testing both arms together on the physical system.','Used the bimanual setup to teleoperate the YAM arms and record demonstration episodes for policy training, such as picking up a bottle and placing it in a bin.','Reduced the operator workflow to a single launch command and separate arm/disarm controls.','Adjusted wrist-joint step limits to reduce clipping at higher leader speeds; physical-robot validation remains pending.'],
      results:[{label:'Arms teleoperated',value:'2'},{label:'Physical test',value:'~3 min'},{label:'Automated tests',value:'41 passing'}],
      lessons:'Bimanual teleoperation depends on more than correct kinematic mapping: calibration, gripper state, startup sequencing, and system load all affect whether the operator can arm and control the system smoothly.',
      note:'The wrist-speed adjustment has been validated in software but still needs physical-robot testing. Lab code and hardware procedures are not published.'
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
    {id:'gello-bimanual-teleop',date:'Oct 30, 2026',category:'Research update',title:'Bringing up bimanual GELLO teleoperation on YAM',description:'A second leader and a streamlined launch workflow enabled simultaneous control of both YAM Ultra arms.',project:'gello-yam',body:[
      {h:'Milestone',p:'I integrated two GELLO leader devices to teleoperate both YAM Ultra arms at the same time. After simulation checks, the setup ran on the physical robot for roughly three minutes, with successful stop and return-to-zero behavior.'},
      {h:'Integration work',p:'The new right-hand leader was brought online, calibrated at the YAM zero pose, and given a right-arm mapping consistent with the left leader. I also verified joint directions, zero pose, gripper behavior, and independent control in simulation before the physical test.'},
      {h:'Operator workflow',p:'I consolidated the launch path so both leaders and arms can be started together, with explicit arm and disarm controls. This reduces setup friction and makes the teleoperation workflow easier to repeat.'},
      {h:'What I learned',p:'A leader should home to the arm’s current pose rather than assuming a fixed start pose. That change prevents unnecessary arm-rejection cases when the robot was not parked exactly at zero.'},
      {h:'Next step',p:'I will test the updated wrist-speed limits on the physical robot, checking for fewer clipping warnings and stable stopping behavior. I also plan to verify the leader power arrangement and improve serial-device setup for repeated experiments.'}
    ]},
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

            
export const BLOGS_DETAILS = [
    {
         blogtype:'log-archival',
         heading: 'Log Archival with SnappyFlow',
         subTitle: 'Log Archival with SnappyFlow',
         bannerClass: '',
         content: `<div class="clear sections"> 
                        <h5>Need for archival</h5>
                        <p>Servers and applications generate logs to report informational events, error events, debug events or fatal events.  These logs are used to troubleshoot problems, identify user behavior, identify hosts requesting access to the applications, identify anomalous behavior etc.  Further, they are also used to analyze differences in behavior of an application on a day to day basis.  Appearance of a log which was not seen earlier may indicate (a) a new scenario being triggered or (b) an unexpected behavior due to a change within an application.</p>
                        <p>In some scenarios, enterprise may need to analyze old logs for security forensics and gather crucial information about cyber-attacks, fraudulent access etc.  To perform such analysis, logs will need to be retained for a longer period of time.  Certain regulatory compliance also may necessitate longer retention periods for logs.</p>
                        <div class="clear sections">
                        <h5>Existing solutions and gaps</h5>
                        <p>Existing log management solutions like Splunk and Elasticsearch replicate logs by compressing and shifting logs from primary storage to an offline archive. When archived logs are required to be analyzed, these are brought back from the archival store to primary store and searched.   This design has several shortcomings, namely:</p>
                        <div>
                            <ul>
                                <li>It is not possible to search archive and consequently, users retain logs for longer periods in primary storage itself</li>
                                <li>The process of bringing back an archive to primary storage cumbersome, impacts the performance of the cluster as well as makes sizing of primary storage unpredictable</li>
                                <li>Searching archived logs usually spans a long period and involves a large amount of data.  The optimum way to search archives is through background jobs and with an ability to retain results, search within results, setup recurring jobs etc. Both Splunk and Elasticsearch, only support interactive searches which leads to poorer usability as well as requires larger clusters</li> 
                                </ul>
                            </div>
                             <div class="clear sections">
                        <h5>SnappyFlow’s Log Archival Approach</h5>
                        <p class="marginBottom15">SnappyFlow’s SaaS solution provides comprehensive log archival functionality that leverages S3 compatible object store. Unlike competitive solutions users can search & visualize logs seamlessly in both the active data and archive data without the need to move data from archives to primary storage.  Further, SnappyFlow analyses logs, extracts signature, adds search metadata and finally compresses the logs before storing the logs into archive. </p>
                        <div>
                            <img src="../assets/images/SnappyFlow-LogArchival-Flow.png" />
                        </div>
                        </div>
                        <div class="noteContent marginBottom20">
                        <h5>Key benefits from SnappyFlow’s Archival feature to users:</h5>
                        <div class="">
                            <ul>
                                <li>10 - 40x compression plus maintaining data in S3 translates to significant cost reduction</li>
                                <li>Extensive search using regex patterns</li>
                                <li>Ability to visualize results, zoom into results, search within results, join results, store results for reference</li>
                                <li>Achieve faster search of logs at petabyte scale as a result of superior organization, meta-data, signatures and other innovative technique</li>
                                <li>Signature based log filtering and analysis</li>
                            </ul>
                        </div>
                    </div>`,
            title: 'In this series',
            blogImage:'blog-content-intro1',
            recentBlog:true,
            // subHead: 'Improve Triaging and Reduce Log Management',
            // image:'blog-2_thumbail.png', 
            // url:'blog2',
    
    
             childList : [
                 { 
                    'subHead': 'Troubleshooting JAVA applications',
                    'image':'tile-cpu-and-memery-profiling.png',  
                    'postedDate': 'Jan 19th, 2022',
                    'url':'cpu-profiling'
                    // 'selectedClass':'activeClass'
                   
                },
                 { 
                        'subHead': 'The power of tracing in application performance tuning',
                        'image':'blog-4_thumbnail_small.jpg',
                         'postedDate': 'November 24th, 2020',
                         'url':'power-of-tracing' 
                       
                    },
                      { 
                        'subHead': 'Setting up Tracing in SnappyFlow',
                        'image':'blog-3_thumbnail_small.jpg',
                        'postedDate': 'October 14, 2020',
                        'url':'setting-up-tracing'
                       
                    }
                   
           ],
            subtitle: 'In this series',
            subchildList : [ 
                     { 
                        'subHead': 'Unleash the Power of Tracing with SnappyFlow',
                        'image':'blog-5_thumbnail_small.jpg',
                        'postedDate': 'May 20, 2021',
                        'url':'unleash-the-power-of-tracing'
                       
                    },
            
               { 
                    'subHead': 'Log Archival with SnappyFlow',
                    'image':'blog-1_thumbail.png', 
                    'url':'log-archival',
                    'selectedClass':'activeClass'
                   
                },
                { 
                    'subHead': 'Improve Triaging and Reduce Log Management',
                    'image':'blog-2_thumbail.png', 
                    'url':'improve-triaging' 
                }
           ],
    
    
    },
    {
            blogtype:'improve-triaging',
            heading: 'Improve Triaging and Reduce Log Management Spend with SnappyFlow’s Signatures',
            subTitle: 'Improve Triaging and Reduce Log Management Spend with SnappyFlow’s Signatures',
            bannerClass: '',
            content: ` <h5>SnappyFlow Introduction</h5>
            <p style="line-height: 1.75;letter-spacing: normal;text-align: left;color: #363c44;padding-bottom:23px">SnappyFlow is a comprehensive monitoring and log management solution addressing the needs of today’s cloud-native applications. This blog highlights SnappyFlow’s signature analysis feature that users will find extremely useful to improve their troubleshooting effectiveness, reduce noise and reduce log storage costs.</p>
            <p><div class="row intro_box"><div class="col-md-4"><div class="inner_box"><h6>Monitoring</h6><ul class="dot_list"><li>Infrastructure monitoring</li><li>Application monitoring</li><li>Kubernetes monitoring</li><li>Cloud services monitoring</li></ul></div></div><div class="col-md-4"><div class="inner_box selectedBox"><h6>Log Management</h6><ul class="dot_list"><li>Out-of-box standard parsers</li><li>Search & Analytics</li><li>Feature extraction at ingest</li><li>Signature based filtering</li><li>Signature based filtering</li></ul></div></div><div class="col-md-4"><div class="inner_box"><h6>APM</h6><ul class="dot_list"><li>Trace services, transactions, spans</li><li>Multi-service analysis</li><li>Asynchronous analysis</li><li>Anomalous span analysis</li><li>Jaeger integration</li></ul></div></div><div class="col-md-4"><div class="inner_box"><h6>Dashboards</h6><ul class="dot_list"><li>Powerful dashboard builder</li><li>Pre-built dashboards &  auto recommendation</li><li>Rich correlation within application context</li></ul></div></div><div class="col-md-4"><div class="inner_box"><h6>Alerts</h6><ul class="dot_list"><li>Pre-built alert library with auto-recommendation</li><li>Auto-thresholding</li><li>Integration with multiple notification systems</li><li>Noise reduction constructs</li></ul></div></div><div class="col-md-4"><div class="inner_box"><h6>Easy On-boarding</h6><ul class="dot_list"><li>sfAgent, sfPoller, sfPod</li><li>Single agent for Metrics, Logs, Tracing</li><li>Simple discovery & configuration</li><li>Multi-cloud support</li></ul></div></div></div></p>
            <h5 style="">What is the problem we are trying to solve?</h5>
            <p style="line-height: 1.75;letter-spacing: normal;text-align: left;color: #363c44;padding-bottom:23px">Logs provide valuable insights about an application. They are useful to troubleshoot issues happening with the application, track user access, understand usage of application’s features, track load patterns etc.  Consequently, log analysis and log management solutions have become a “must-have” in a SRE’s tool repertoire, more so, with the growing complexity of cloud-native stacks that the SRE is needing to manage.</p>
            <p style="line-height: 1.75;letter-spacing: normal;text-align: left;color: #363c44;padding-bottom:23px">There are several good log management solutions in the market but most have two pronounced drawbacks:</p>
            <div><ul class="alphaList"><li>Triaging issues is not easy.  Users have to find a trail of logs amongst a vast deluge of logs and cutting through the noise is not easy and has a direct impact on resolution time </li><li>As the size of deployments, number of deployments and load grow, the volume of logs exponentially grows. Obviously, the cost explodes as well</li></ul></div>
            <h5 style="">What are Log Signatures in SnappyFlow?</h5>
            <p style="line-height: 1.75;letter-spacing: normal;text-align: left;color: #363c44;padding-bottom:23px">Log Signature is a unique feature in SnappyFlow that is used to reduce noisy logs, improving triaging as well as reduce log storage costs. </p>
            <p><b>Signature</b> is a string pattern present in the log, which uniquely identifies it.  String patterns used to define signatures can contain variables $w or $i .  The variable $w represents a word consisting of alphanumeric characters and $i a decimal number.</p>
            <div class="marginBottom10">For example, the signature, ‘’<b>missed heartbeat from $w@</b>’’ would uniquely identify these logs</div>
            <div class="blue_containerBox"><div>"missed heartbeat from provision@stage-apm-sfapm-apm-celery-provision-5579fbffc9-st9dm"</div><div>"missed heartbeat from notify@stage-apm-sfapm-apm-celery-notify-78b46bd6cc-85shb"</div><div>"missed heartbeat from default@stage-apm-sfapm-apm-celery-default-6c44857687-4zx2t"</div></div>
            <p><b>Signature Group</b> is a grouping of multiple signatures that are related to a problem or a workflow.</p>
            <div class="marginBottom10">Users can perform the following operations related to Log Signatures in SnappyFlow:</div>
            <div class="blue_containerBox"><ul class="dot_list"><li>Add or delete a signature</li><li>Group multiple signatures into a group</li><li>Get volume statistics og logs based on a signature or a group</li><li>Hide or Unhide logs belonging to a signature or a group</li><li>Show only logs belonging to a signature or a group</li><li>Stop or Restart collection of logs to primary store that belong to the signature or a group</li><li>Stop or Restart collection of logs to archive that belong to a signature or a group</li></ul></div>
            <p>SnappyFlow’s overall Signature Analysis flow is described below:</p>
            <p><img src="../assets/images/diagram_log-Forwarders.png"/></p>       
            <h5 style="">So how does Signatures help users?</h5>
            <p><ul class="dot_list"><li><div>A large proportion of logs are of very little or no value. Many of these just add to volume and cost. We have seen situations where 80-95% of logs may belong to this category. Users live with them because it is not easy to selectively turn them off at the source.</div><div class="gray_box">With SnappyFlow, users can turn on or off the collection of the log with a single click. In the example below, with just 2 clicks we are able to turn off 2 logs that are taking 40% of storage space, logs that have very little value. If the user does indeed want to retain the log for a future purpose, the user can continue to store the log in the archive with 10-40x compression and search the archive as needed. </div><div><img src="../assets/images/diagram_log-Compression.png"/></div></li><li><div>When a critical issue occurs and SRE is racing to troubleshoot the issue, SRE has to first wade through a ton of noisy logs to get to the few logs of interest. The experience can range from irritating to frustrating depending on the situation at hand</div><div class="gray_box">With SnappyFlow, if user finds a noisy log and wants to mask it out, all he the user has to do is to “hide” a log or set of logs and they will be removed from the log view</div></li><li><p>Depending on the problem that a user is troubleshooting, the user’s field of interest is a finite set of logs. These logs of interest vary based on the problem. User would ideally like to see the trail of these logs of interest, i.e., when, where & how many, and easily mask-out everything else</p><div>This is not possible in most log management solutions and the workflow in these solutions is fairly cumbersome. Users typically filter logs based on log levels, instance and file, after which they search for individual logs or scroll through logs to find what they are looking for. This is a time-consuming process with a big impact on resolution time</div><div class="gray_box">Suppose user is debugging an OOM issue and is interested in a set of 8-10 logs to understand the behavior of the application, user can group these logs into a group called “OOM” and only show logs that belong to “OOM” group. Overtime, user can create multiple such groups that correspond to playbooks of specific issues</div></li></p>
            `,
            title: 'In this series', 
            blogImage:'blog-content-intro2',
             childList : [
             { 
                    'subHead': 'Troubleshooting JAVA applications',
                    'image':'tile-cpu-and-memery-profiling.png', 
                    'postedDate': 'Jan 19th, 2022',
                    'url':'cpu-profiling'
                   
                },
                    { 
                        'subHead': 'The power of tracing in application performance tuning',
                        'image':'blog-4_thumbnail_small.jpg',
                         'postedDate': 'November 24th, 2020',
                         'url':'power-of-tracing' 
                       
                    },
                      { 
                        'subHead': 'Setting up Tracing in SnappyFlow',
                        'image':'blog-3_thumbnail_small.jpg',
                        'postedDate': 'October 14, 2020',
                        'url':'setting-up-tracing'
                       
                    }
                   
           ],
            recentBlog:true,
            subtitle: 'In this series',
            subchildList : [
                { 
                        'subHead': 'Unleash the Power of Tracing with SnappyFlow',
                        'image':'blog-5_thumbnail_small.jpg',
                        'postedDate': 'May 20, 2021',
                        'url':'unleash-the-power-of-tracing'
                       
                    }, 
               { 
                    'subHead': 'Log Archival with SnappyFlow',
                    'image':'blog-1_thumbail.png', 
                    'url':'log-archival'
                   
                },
                { 
                    'subHead': 'Improve Triaging and Reduce Log Management',
                    'image':'blog-2_thumbail.png', 
                    'url':'improve-triaging',
                    'selectedClass':'activeClass'
                   
                }
           ],
            // subHead: 'Improve Triaging and Reduce Log Management',
            // image:'blog-2_thumbail.png', 
            // url:'blog2'
    },
    {
         blogtype:'cpu-profiling',
         heading: 'Troubleshooting JAVA application performance using CPU Profiling and Memory Profiling ',
         subTitle: 'Troubleshooting JAVA application performance using CPU Profiling and Memory Profiling ',
         bannerClass: 'cpu_profile',  
         metaTitle: 'JAVA Performance Troubleshooting - CPU and Memory Profiling',
         metaDescription: "This blog explains CPU and Memory Profiling concepts and explains how this can be used to troubleshoot JAVA applications",
         metaURL: 'https://www.snappyflow.io/blog-details/cpu-profiling',
         metaImg: 'https://www.snappyflow.io/../assets/images/power_tracing.png',
         metaType: 'article',
         metaRoboto: 'index, follow',
         content: `<div class="clear sections"> 
         <h5>Troubleshooting JAVA application performance using CPU Profiling and Memory Profiling </h5>
                        <p>Profiling is a powerful tool to get inside the mind of your application and understand the root cause of bottlenecks. Profiling can bring down troubleshooting time by an order of magnitude. However, the workflow for setting it up, operating it and analyzing the results is usually not trivial. Setting up heap profiling in a continuous mode can impact the performance of the application whereas setting it up in an on-demand mode is arduous. Users typically use multiple tools to trigger heap dumps, parse them and analyze them. </p>
                        <p>To address these issues, we’ve built CPU and Memory Profiling feature for Java right into SnappyFlow to provide a seamless monitoring experience for SRE and Performance engineers. It is easy to instrument profiling into an application, trigger profiling on-demand and analyze the profiles right then and there – while remaining in the context of the application and easily accessing metrics, logs and tracing in an integrated workflow </p>             
                    <h5>What is Memory profiling and CPU Profiling?  </h5>
                    <p>Memory Profiling is simply the process of analyzing the memory used by a JAVA process at a given point of time. To understand memory profiling better, let us look at how JAVA Virtual Machine (which runs the JAVA process) handles memory. A heap is where the JVM stores referenced objects as and when they are created, and the size of the heap grows (until the size reaches the predefined max heap size) and shrinks during runtime.  A heap dump is a snapshot of the of the memory used by a JAVA process at a given point of time on the JAVA heap. This snapshot contains information on different objects and classes and individual memory usage at the time of triggering the heap dump. The heap dump can be triggered manually or can be automated when OutOfMemory exceptions occur or can be requested by a heap analysis tool on demand. An analysis of the heap dump helps developers pinpoint specific issues in the code such as large data structures, unused (but referenced) objects using memory etc.,  </p>
                    <p>CPU Profiling provides a thread level CPU usage and helps identify </p>
                    <div>
                        <ul>
                            <li>Synchronization Issues 
                                <ul>
                                    <li>Deadlock Situation: when several threads running hold a synchronized block on a shared object  </li>
                                    <li>Thread Contention: when a thread is blocked waiting for others to finish </li>
                                </ul>
                            </li>
                             <li>Execution Issues: 
                                <ul style="padding-bottom:0px !important">
                                    <li>Abnormally high CPU usage: when a thread is in running state for a very long period</li>
                                    <li>Processing Performance is low: when many threads are blocked </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h5>Why is it important?</h5>
                        <p>Memory management in JAVA is handled by the JVM garbage collector – a big reason for JAVA’s growth and popularity.  While it is generally an efficient and automatic process, it is quite common for applications to suffer from crippling memory leaks and out of memory exceptions. An over reliance on the garbage collector and possibly poor handling of object references, misconfigurations of heap sizes are typical reasons for memory leaks. </p>
                        <p>OutofMemory occurs when the allocated heap size is not enough for all the referenced objects or if there are any errors in the code making some objects way too large. It is important to note that garbage collection frees up only unused objects and classes. It will not clear objects that are in use. This simply means, there will be no stopping an object from growing until it reaches the overall heap size and throwing a runtime error. </p>
                        <p>A very large heap size can seemingly negate OutOfMemory issues at the expense of high memory requirement at the infrastructure level but however, one doesn’t get a clear picture in terms of what is causing the error. JVM also allows fine tuning garbage collection depending on the application – number of parallel collection threads, parallel garbage collection for scavenges/full collections, old/new generation size ratio and eden/survivor space ratio. A higher heap size increases garbage collection execution time but decreases number of executions and a smaller heap size decreases execution time but increases number of executions.  </p>
                    </div>
                    <h5>Why is it important in performance troubleshooting?  </h5>
                    <p>During app development or testing phase, OutOfMemory exceptions occur quite often and even if they do, they can be identified and plugged, given the luxury of time. But in production, these OutOfMemory exceptions tend to occur after prolonged application run time and once they occur, the issue needs to be identified and plugged asap. In general, memory leaks are very gradual, and go unnoticed during dev/testing phase. </p>
                    <p>In an microservices architecture with multiple applications running in parallel, the overall performance is determined by the aggregate performance of every single application. Thus, it becomes important to drill down to an individual process level to troubleshoot performance issues. </p>
                    <h5>Existing tools & and limitations </h5>
                    <p>There are many standalone tools such as VisualVM, JProfiler or Eclipse Memory Analzer for Heap Dump Analysis and Profiling. While these tools are powerful by their own right, there are some major shortcomings </p>
                    <div>
                        <ul>
                            <li>Performance/Uptime at the stack level is usually monitored by an APM tool and these APM tools don’t offer out of the box heap analysis or profiling features </li>
                            <li>Poor integration features with APMs </li>
                            <li>Need to switch between apps for troubleshooting </li>
                        </ul>
                    </div>
                    <p>In a typical SRE use case, the troubleshooting workflow starts with the APM tracing data to identify bottlenecks. Once a process is identified as slow or stuck, a heap dump analysis and profiling of the process helps us drill down. In such scenarios, ability to quickly shift between tracing / heap dump and profiling data can significantly improve troubleshooting times. </p>
                    <b>SnappyFlow has been designed specifically for such use cases requiring fast, in-context troubleshooting.  </b>
                    <div class="marTop20"><u>Memory Profiling </u></div>
    
                     <div class="marTop10"><img src="../assets/images/01-memory-profiling.png" /></div>
                     <p class="marTop20"><img src="../assets/images/02-cpu-profiling.png" /></p>
                     <div>
                     <u>CPU Profiling in SnappyFlow </u>
                     </div>
                     <div class="marTop10"><img src="../assets/images/03-cpu-profiling.png"  /></div>
                     <div class="marTop20 padBottom20"><img src="../assets/images/04-cpu-profiling.png" /></div>
                    </div>`,
            title: 'In this series',
            recentBlog:false, 
            blogImage:'blog-content-intro1',
            // postedDate: 'November 24th, 2020',
            childList : [
                    { 
                        'subHead': 'Troubleshooting JAVA applications',
                        'image':'tile-cpu-and-memery-profiling.png', 
                        'postedDate': 'Jan 19th, 2022',
                        'url':'cpu-profiling',
                        'selectedClass':'activeClass'  
                    },
                { 
                    'subHead': 'The power of tracing in application performance tuning',
                    'image':'blog-3_thumbnail_small.jpg',
                    'postedDate': 'November 24th, 2020',
                    'url':'power-of-tracing'
                   
                },
               { 
                    'subHead': 'Setting up Tracing in SnappyFlow',
                    'image':'blog-3_thumbnail_small.jpg',
                    'postedDate': 'October 14, 2020',
                    'url':'setting-up-tracing'
                   
                }
                
           ],
            subtitle: 'Recent Posts',
            subchildList : [
             { 
                    'subHead': 'Unleash the Power of Tracing with SnappyFlow',
                    'image':'blog-5_thumbnail_small.jpg',
                    'postedDate': 'May 20, 2021',
                    'url':'unleash-the-power-of-tracing' 
                },
                   
                    { 
                    'subHead': 'Log Archival with SnappyFlow',
                    'image':'blog-1_thumbail.png', 
                    'url':'log-archival',
                   
                },
                { 
                    'subHead': 'Improve Triaging and Reduce Log Management',
                    'image':'blog-2_thumbail.png', 
                    'url':'improve-triaging' 
                }
                    
           ],
    
    
    },
    {
        blogtype:'power-of-tracing',
        heading: 'The power of tracing in application performance tuning',
        datetime: 'October 14, 2020',
        subTitle: 'The power of tracing in application performance tuning',
        metaTitle: 'Tracing in Application Performance Troubleshooting',
        metaDescription: 'This 3 part blog touches upon the basics of tracing, how you can use tracing data to troubleshoot and setting up tracing functionality in SnappyFlow',
        metaURL: 'https://www.snappyflow.io//blog-details/power-of-tracing',
        metaImg: 'https://www.snappyflow.io/../assets/images/power_tracing.png',
        metaType: 'article',
        metaRoboto: 'index, follow',
        content: `<div class="clear sections">
                    <p>This 3 part blog touches upon the basics of tracing, how you can use tracing data to troubleshoot and setting up tracing functionality in SnappyFlow</p>
                    <h5>Why Tracing?</h5>
                    <p>Automation of business processes has radically changed the application landscape. Traditionally, applications used to carry out a basic business procedure and store in a database the results of that process. Multiple such applications were built, each working independently in implementing a simple process.  Collaboration between such applications used to take place offline. As the need to provide real-time and online services increased, applications became more complex and there was an increase in real-time interaction between applications.  Applications evolved from simple sequential execution model to distributed concurrent execution model.</p>
                        <div class="padBottom10">
                        <img src="../assets/images/img_why-tracing.jpg"  class="padRight10 marBottom5" />  <img src="../assets/images/img_why-tracing1.jpg" />
                    </div>
                    
                    <div class="sub_title_list">
                    <div>Tracking down problems with these distributed,</div>
                    <div>asynchronous and concurrent applications is hard</div>
                    </div>
                    <p>Traditionally, failures were tracked by their symptoms - alerts based on time series data, or monitoring error events from logs.  Once a symptom is found, identifying the root cause is done by analyzing logs and/or by correlating time series metrics from different applications and instances.  Because of the asynchronous and concurrent nature of execution, it is very difficult to trace the exact sequence of events which led to the failure by these traditional means.</p>
                    <p>Tracing stitches together or aggregates the actions performed by applications to service a request.  This aggregated data is then presented in a chronologically organized manner for analysis.  A context is created when a request is received by an application and the request is tracked, using this context, through all the execution paths in the application(s).  At each execution path, the entry and exit times along with other useful information are logged.  The traces thus collected are analyzed using powerful visualizations to identify the hot spots and bottlenecks. </p>
                    <p>Trace logs contain spans, transactions and traces.  Trace is a collection of transactions and spans that have a common starting point or root.  Spans contain information about the activity in an execution path.  It has the measurement of time from start to end of the activity and also includes parent child relationship with other spans.  Transaction is a special span, which is captured at the entry of a service like http/rpc processor, message broker, cron job etc.</p>
                    </div>
                    <div class="clear ">
                    <h5>Using Trace data to troubleshoot effectively</h5>
                    <p>The trace data is used to quickly identify the root-cause of the failure.  In asynchronous concurrent applications, failures or delays occur in one of the many execution paths.  To effectively, detect these failures or delays, powerful visualization and analysis tools are required.  In order to trouble shoot a failure user needs to know:</p>
                    <div class="padBottom30">
                        <ul class="dot_list">
                        <li>Contextual view of execution – an easy to track view to understand the sequence in which the transaction execution progressed and the time taken in each step</li>
                        <li>Child transactions and spans – delays in child transactions can contribute to overall delays.  Prior execution times in terms of average, median, 95 Percentile, 99 Percentile helps compare the current execution with reference to previous runs</li>
                        <li>Time spent in each span and comparison with prior execution -  it is important to know how the current span duration rank in comparison to previous runs.  Typically this is done by comparing the current duration value with the average, median, 95 Percentile, 99 Percentile values</li>
                        <li>Percentage of time spent by a span with respect to overall time -  this will help identify the hot spots in execution</li>
                        <li>Cumulative span execution time – cumulative span execution time is computed after considering the span parallelism.  This value measures delay contributed by all spans to the overall delay. The gap between the cumulative span execution time and the total transaction duration gives an indication about the time the transaction is either spending in additional processing or waiting on resources - I/O wait, DB locks, compute time, event loop saturation etc</li>
                        <li>Stack traces – stack traces are useful to quickly identify the error execution path and pin point the failure reason.  Stack traces, provide a list of stack frames from the point, where execution failed up to the start of application</li>
                        </ul>
                    </div>
                </div>
                    <div class="clear sections"> 
                    <p class="marginBottom15">SnappyFlow supports distributed tracing compliant with Opentracing standard. Tracing allows users to visualize the sequence of steps a transaction (whether API or non-API such as a Celery job) takes during its execution. This analysis is extremely powerful and allows pinpointing the source of problems such as abnormal time being spent on an execution step or identifying point of failure in a transaction.</p>
                </div>
                `,
        title: 'In this series',
        recentBlog:false,
        // subHead: 'Improve Triaging and Reduce Log Management',
        // image:'blog-2_thumbail.png',
        // url:'blog2',
        blogImage:'blog-content-intro3',
        // postedDate: 'November 24th, 2020',
        childList : [
                { 
                    'subHead': 'Troubleshooting JAVA applications',
                    'image':'tile-cpu-and-memery-profiling.png', 
                    'postedDate': 'Jan 19th, 2022',
                    'url':'cpu-profiling'
                    
                },
            { 
                'subHead': 'The power of tracing in application performance tuning',
                'image':'blog-3_thumbnail_small.jpg',
                'postedDate': 'November 24th, 2020',
                'url':'power-of-tracing',
                'selectedClass':'activeClass'
                
            },
            { 
                'subHead': 'Setting up Tracing in SnappyFlow',
                'image':'blog-3_thumbnail_small.jpg',
                'postedDate': 'October 14, 2020',
                'url':'setting-up-tracing'
                
            }
            
        ],
        subtitle: 'Recent Posts',
        subchildList : [
        { 
                'subHead': 'Unleash the Power of Tracing with SnappyFlow',
                'image':'blog-5_thumbnail_small.jpg',
                'postedDate': 'May 20, 2021',
                'url':'unleash-the-power-of-tracing'
                
            },
            { 
                'subHead': 'Log Archival with SnappyFlow',
                'image':'blog-1_thumbail.png', 
                'url':'log-archival'
                
            },
            { 
                'subHead': 'Improve Triaging and Reduce Log Management',
                'image':'blog-2_thumbail.png', 
                'url':'improve-triaging' 
            }
        ],

    },
    {
        blogtype:'setting-up-tracing',
        heading: 'Setting up Tracing in SnappyFlow',
        subTitle: 'Setting up Tracing in SnappyFlow',
        metaTitle: 'JAVA Tracing with SnappyFlow',
        metaDescription: "In this blog series, we consider a sample JAVA application that consists of two programs, a provision-manager and a provision-worker. We will use SnappyFlow's sfTrace agent to analyze the performance of this sample application",
        metaURL: 'https://www.snappyflow.io//blog-details/setting-up-tracing',
        metaImg: 'https://www.snappyflow.io/../assets/images/power_tracing.png',
        metaType: 'article',
        metaRoboto: 'index, follow',
        content: `<p style="line-height: 1.75;letter-spacing: normal;text-align: left;color: #363c44;padding-bottom:10px; padding-top:0px">In this blog series, we consider a sample JAVA application that consists of two programs, a provision-manager and a provision-worker. We will use SnappyFlow's  <a href="/resources/sftracing" target="_blank" style="font-weight:bold; text-decoration:underline">sfTrace</a> agent to analyze the performance of this sample application. <a href="/resources/sftracing" target="_blank" style="font-weight:bold; text-decoration:underline">sfTrace</a> can auto-instrument JAVA, python and nodeJS applications. </p>
        <h5>Instrumenting JAVA applications</h5>
        <p>sfTrace JAVA agent uses an open source code generation and instrumentation library ByteBuddy.  ByteBuddy leverages the instrumentation APIs provided by JAVA byte code.  It modifies the Java classes during the runtime of an application.  Application is not re-compiled for instrumentation. This modified code generates information about the code paths like processing http request, queries databases etc.  The sfTrace Java agent can instrument a wide range of technologies like web frameworks, application servers/servlets, data stores, networking frameworks, asynchronous frameworks, scheduling frameworks, messaging frameworks, logging frameworks etc.  It is also possible to create custom instrumentation through the agent APIs.</p>
        <h5>Setting up sfTrace to trace the example application</h5>
        <p>The example application is written in Java and consists of two java programs provision-manager and provision-worker.  To start tracing the applications:</p>
        <ul class="dot_list"><li>Install sfAgent, the SnappyFlow agent in the instances where you are running these applications. sfAgent is used to monitor VM performance and dependencies</li>
        <li>Detailed Installation and configurations instructions are available in <a href="https://www.snappyflow.io/resources/sfagent?view=install">https://www.snappyflow.io/resources/sfagent?view=install</a></li>
        <li>To trace provisioning manager and worker do the following:
        <pre><code>java -javaagent:/opt/sfagent/sftrace/java/sftrace-java-agent.jar - Dsftrace.service_name=provision-manager -jar provision-manager.jar

java -javaagent:/opt/sfagent/sftrace/java/sftrace-java-agent.jar - Dsftrace.service_name=provision-worker -jar provision-worker.jar
</code></pre>
        </li>
        </ul>
        <p style="padding-top:30px">Provision-manager and provision-worker processes are run under the sfTrace java agent.  sfTrace Java agent automatically instruments the application and the libraries to intercept the execution steps to extract information and create trace data.</p>`,
        datetime: 'November 24th, 2020',
        title: 'In this series',
        // subHead: 'Log Archival with SnappyFlow',
        // image:'blog-1_thumbail.png',
        // url:'blog1',
        blogImage:'blog-content-intro4',
        // postedDate: 'October 14, 2020',
            childList : [
            { 
                    'subHead': 'Troubleshooting JAVA applications',
                    'image':'tile-cpu-and-memery-profiling.png', 
                    'postedDate': 'Jan 19th, 2022',
                    'url':'cpu-profiling' 
                },
                { 
                    'subHead': 'The power of tracing in application performance tuning',
                    'image':'blog-4_thumbnail_small.jpg',
                        'postedDate': 'November 24th, 2020',
                        'url':'power-of-tracing' 
                    
                },
                { 
                    'subHead': 'Setting up Tracing in SnappyFlow',
                    'image':'blog-3_thumbnail_small.jpg',
                    'postedDate': 'October 14, 2020',
                    'url':'setting-up-tracing',
                    'selectedClass':'activeClass'
                    
                }
                
        ],
        subtitle: 'Recent Posts',
            recentBlog:false,
        subchildList : [
            { 
                    'subHead': 'Unleash the Power of Tracing with SnappyFlow',
                    'image':'blog-5_thumbnail_small.jpg',
                    'postedDate': 'May 20, 2021',
                    'url':'unleash-the-power-of-tracing'
                    
                },
            { 
                'subHead': 'Log Archival with SnappyFlow',
                'image':'blog-1_thumbail.png', 
                'url':'log-archival'
                
            },
            { 
                'subHead': 'Improve Triaging and Reduce Log Management',
                'image':'blog-2_thumbail.png', 
                'url':'improve-triaging' 
            }
        ],
    },
    {
        blogtype:'unleash-the-power-of-tracing',
        heading: 'Unleash the Power of Tracing with SnappyFlow. A detailed illustration',
        subTitle: 'Unleash the Power of Tracing with SnappyFlow. A detailed illustration',
        metaTitle: 'Tracing and Performance Analysis with SnappyFlow',
        metaDescription: 'This blog illustrates how to use SnappyFlow to analyze application performance',
        metaURL: 'https://www.snappyflow.io/blog-details/unleash-the-power-of-tracing',
        metaImg: 'https://www.snappyflow.io/../assets/images/power_tracing.png',
        metaType: 'article',
        metaRoboto: 'index, follow',
        content: `<p style="line-height: 1.75;letter-spacing: normal;text-align: left;color: #363c44;padding-bottom:23px">To illustrate how SnappyFlow can be used to analyze application performance, we will consider a sample application and walk through the traces.  The sample application provides users the ability to provision computing instances in different public cloud providers.</p>
        <div clear="clear ">
            <ul class="dot_list padBottom20">
                <li>User creates a request to provision instances using the web UI provided by this application</li>
                <li>Application accepts the request after validation, and provides a task ID back to the client</li>
                <li>Client UI monitors the status of the task progress using the task ID</li>
                <li>Application is implemented as an asynchronous concurrent application and has a provision-manager service and one or more provision-worker service</li>
                <li>Communication between the provision-manager and provision-worker services is via a message broker – Kafka</li>
            </ul>
        </div>
        <p>Application topology is shown in the figure below:</p>
        <div class="padBottom10"><img src="../assets/images/Application-topology.png" /></div>
        <p style="line-height: 1.75;letter-spacing: normal;text-align: left;color: #363c44;padding-bottom:23px">The execution flow for the various user requests is summarized in the table below:</p>
        <div>
            <table class="table" style="border:1px solid #ddd">
        <thead>
        <tr>
            <th style="width:12%">Method</th>
            <th style="width:20%">URL</th>
            <th>Action</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td>
            POST
            </td>
            <td>
            /api/provision
            </td>
            <td>
            <ul class="dot_list">
                <li>Request is processed by provision-manager</li>
                <li>Task details are updated in DB</li>
                <li>Sends task execution request to worker pool via Kafka</li>
                <li>Responds to the request with 202 ‘Accepted’</li>
                <li>One of the workers reads the request from Kafka</li>
                <li>Worker accepts the task and sends “in-progress” notification to the manager via Kafka</li>
                <li>Worker continues to process the request</li>
                <li>Manager reads the request from notification-topic and updates the task status</li>
                <li>Worker Completes the provisioning task and sends “completed” notification to the manager via Kafka</li>
                <li>Manager reads the notification and updates the task status</li>
            </ul>
            </td>
        </tr>
        <tr>
            <td>
            PUT
            </td>
            <td>
            /api/provision/{taskID}
            </td>
            <td>
            <ul class="dot_list">
                <li>Manager updates the task details synchronously and sends 200 OK response</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
            DELETE
            </td>
            <td>
            /api/provision/{taskID}
            </td>
            <td>
                <ul class="dot_list">
                <li>Manager deletes the task details synchronously and sends 200 OK response</li>
                </ul>
            </td>
        </tr>
        <tr>
            <td>
            GET
            </td>
            <td>
            /api/workers/get-counters
            </td>
            <td>
            <ul class="dot_list">
                <li>Manager accepts the request</li>
                <li>Forwards the request to worker</li>
                <li>Worker responds to the forwarded request with the required data</li>
                <li>Manager responds to the original request using the data received from worker</li>
            </ul>
            </td>
        </tr>
        <tr>
            <td>
            GET
            </td>
            <td>
            /api/workers/reset-counters
            </td>
            <td>
                <ul class="dot_list">
                <li>Manager accepts the request</li>
                <li>Forwards the request to worker</li>
                <li>Worker responds to the forwarded request with the required data</li>
                <li>Manager responds to the original request using the data received from worker</li>
            </ul>
            </td>
        </tr>
        </tbody>
    </table>
        </div>
        <h5>Flame graph showing the sequence of execution</h5>
        <p>In the example application, when a client request is received in provision-manager, a trace context is created and added to that request.  When this request traverses through the processing functions like Kafka producer, Kafka consumer, dB query, http processing etc. the trace context is extracted and maintained.  The trace data produced at each stage of execution will contain this trace context.  The trace context helps stitching together the events and visualization of the execution path.</p>
        <div class="padBottom10"><img src="../assets/images/screenshot-01.jpg" /></div>
        <p>The figure above shows a flame graph showing the initial execution of the “POST /api/provision”.  The sequence diagram shows the 3 steps:</p>
        <div clear="clear ">
            <ul class="dot_list padBottom20">
                <li>Provision-manager receiving the request, updating the task database, sending notification to provision-worker through Kafka-topic.  Notice how the trace context, kept track of the communication between provision-manager, Kafka producer and provision-worker</li>
                <li>Provision-worker reads the task details from Kafka and starts processing. It sends a notification to provision-manager to inform the task status</li>
                <li>Provision-manager reads the notification from provision-worker and updates the task status in DB</li> 
            </ul>
        </div>
        <p>All traces where captured by sfTrace, without any modification to the application code.  sfTrace, instrumented the java classes at runtime to introduce the trace context and collect the start and end of each action.</p>
        <p>Flame graph can help identify gaps in execution.  If there are significant gaps in execution between transactions or spans those get highlighted in flame graph.  These gaps may indicate probable delays caused because of resource constraints or other scheduling issues.</p>
        <h5>Related Transactions</h5>
        <p>The journey of a trace through various services is summarized in the Transactions View.  These services may get invoked through HTTP/RPC request, message broker service or similar inter-process communication frameworks.  The transaction summary view, lists the related transactions in a chronological order along with duration spent in each transaction, performance stats from previous runs, and the percentage duration contributed by each related transaction with reference to the overall duration.  </p>
        <p>If a related transaction consumes higher time than the average or 95 percentile stats from previous runs, that transaction could be causing a potential delay and will need to be analyzed in detail using the Span view.</p>
        <p>The percentage duration spent by each transaction provides an easy way to identify hot spots in execution.</p>
        <div class="padBottom10"><img src="../assets/images/screenshot-02.jpg" /></div>
        <h5>Span List</h5>
        <p>Each transaction is broken down into spans.  Each span represents an execution path which the transaction took to complete the run. </p>
        <p>Spans are different types – DB, Cache, Template, External, Custom spans.  Span list can be filtered by span type for analysis.  Span view also shows.</p>
            <div clear="clear ">
            <ul class="dot_list padBottom20">
                <li>Total number of spans – number of execution points detected</li>
                <li>Net transaction duration – total time spent in child transactions</li>
                <li>Net span duration – total time spent in all spans contributing to the overall trace duration (this time is adjusted for parallel execution of spans)</li>
                <li>Net span duration percentage – net span duration as a percentage of overall duration.  If this value is not very significant compared to the overall duration, spans are not contributing to delays</li>
            </ul>
            </div>
        <p>Similar to transaction view, span view provides, the following metrics for each span: </p>
            <div clear="clear ">
            <ul class="dot_list padBottom20">
                <li>The time spent by each span</li>
                <li>Performance stats for this span from the previous runs</li>
                <li>The percentage of time contributed by each span in the overall execution</li>
            </ul>
            </div>
            <div class="padBottom10"><img src="../assets/images/screenshot-03.jpg" /></div>
            <h5>Filtering traces for analysis</h5>
        <p>The sfTrace collects traces related to all services which it monitors.  Real-time view provides an insight into overall performance of the application.  Filters can be used to analyze and drill down to problem transactions.</p>
        <p>Response Time is often used as a measure of performance.  By selecting a specific transaction, it is possible to see the variation in response time range.  Once an transaction with very high variance between the minimum and maximum response time is identified, the response time filter slider can be used to select a range.  All traces with response time within the selected range are shown, which then can be analyzed using flame graph, transaction list and span list.</p>
        <div class="padBottom10"><img src="../assets/images/screenshot-04.jpg" /></div>
        <p>The result of a transaction or response code for HTTP request is another important parameter monitored. If the result is FAILURE or HTTP Response codes indicate failures, those traces can be filtered separately and analyzed.</p>
        <div class="padBottom10"><img src="../assets/images/screenshot-05.jpg" /></div>
        <h5>Aggregate View</h5>
        <p>In aggregate view, summary of all traces is captured.  The view shows, for each unique trace, the captured number of occurrences, average number of spans captured, number of errors, response time - average, median, 95 percentile, 99 percentile values.</p>
        <p>By clicking a specific trace from Aggregate view, user can view the real-time stats and drill down to the specific instances of the trace for trouble shooting.</p>
        <div class="padBottom10"><img src="../assets/images/screenshot-06.jpg" /></div>
        <h5>Transaction Map</h5>
        <p>Transaction map visual summary of the interaction between different application components.  A transaction in its execution depends on Databases, message buses and other application services.  Transaction map shows you the connectivity between different components along with statistics on query rate, average, minimum and maximum response times.  This high level view helps drilling down to the individual transaction flows and identify anomalies.</p>
        <div class="padBottom10"><img src="../assets/images/screenshot-07.jpg" /></div>
        <h5>Example – trouble shooting trace delays</h5>
        <p>An example to illustrate how trace can help trouble shoot issues quickly.  Consider the following flame graph of a trace.  The flame graph shows the trace with all spans encountered during its execution.  All spans show DB operations to Postgres, Redis and Elasticsearch.  Closer view of the flame graph shows, many Elasticsearch DB spans with longer in duration.</p>
        <div class="padBottom10"><img src="../assets/images/screenshot-08.jpg" /></div>
        <p>To analyze this further, Span view of the trace is selected.  In the span view shown below, notice that 95.3% of the total transaction duration is spent in DB Spans.</p>
        <div class="padBottom10"><img src="../assets/images/screenshot-09.jpg" /></div>
        <p>To view the spans contributing to this high percentage of time, the spans can be sorted based on duration percentage.</p>
        <div class="padBottom10"><img src="../assets/images/screenshot-10.jpg" /></div>
        <p>The sorted span list, clearly shows the eight spans contributing to this high percentage of execution time.  Examining the stack trace for the affected DB span shows the actual Elasticsearch query.   Analyzing the query confirms the behavior.  Developers can now easily use this information to optimize the query and execution. </p>
        <div class="padBottom10"><img src="../assets/images/screenshot-11.jpg" /></div>
        <h5>Example – Trouble shooting exceptions</h5>
        <p>sfTrace captures exceptions generated during a transaction execution along with the stack trace.  This makes the debugging easy and fast.</p>
        <p>Using the filter, select traces which show Failure.</p>
        <div class="padBottom10"><img src="../assets/images/screenshot-12.jpg" /></div>
        <p>Select one of the traces to view the flame graph.</p>
        <div class="padBottom10"><img src="../assets/images/screenshot-13.jpg" /></div>
        <p>The flame graph shows that transaction encountered an error.  An exception occurred almost at the end of execution.</p>
        <div class="padBottom10"><img src="../assets/images/screenshot-14.jpg" /></div>
        <p>In the Transaction view, the result status shows Failure.</p>
        <div class="padBottom10"><img src="../assets/images/screenshot-15.jpg" /></div>
        <p>Span list shows all the 7 spans.   Error may have occurred in one of the spans.</p>
        <div class="padBottom10"><img src="../assets/images/screenshot-16.jpg" /></div>
        <p>The error tab shows the details of this exception with complete stack trace.  No further debugging is needed, root cause is detailed here - one of the DB spans querying Elasticsearch was using an index which is not present in Elasticsearch.</p>
        <h5>Example – analyze trace with historical performance data</h5>
        <p>By using the response time filter it was observed that some of the traces in a service were taking longer time to complete.</p>
        <div class="padBottom10"><img src="../assets/images/screenshot-17.jpg" /></div>
        <p>Viewing the flame graph for this trace showed two potential issues.  The parent transaction of the trace is invoking another service and that service is contributing to some of the execution time.</p>
        <div class="padBottom10"><img src="../assets/images/screenshot-18.jpg" /></div>
        <p>Transaction view showed the time spent in executing the related service (41.31% of the total duration).  Also, it highlighted that the child service took more time compared the previous median execution time (see the yellow highlight).  It also showed that the total duration was beyond the previous high 99 percentile value. </p>
        <div class="padBottom10"><img src="../assets/images/screenshot-19.jpg" /></div>
        <p>In Span list, select the child transaction and see the list of spans associated with the child transaction.  It was observed that there were many spans showing higher execution time compared to the prior runs.  The child transaction had 93 spans.</p>
        <div class="padBottom10"><img src="../assets/images/screenshot-20.jpg" /></div>
        <p>To see which spans are contributing to the higher execution times, the list is sorted based on the % time spent column (IN(%)).  Observe many spans runtime varying more than the last 95 Percentile or 99 Percentile values. </p>
        <div class="padBottom10"><img src="../assets/images/screenshot-21.jpg" /></div>
        <p>Click on the affected span, to view its details.  The detail shows the DB query being executed along with full statement.  Analyzing each of the highlighted span helps identify the delays and optimize code for further performance improvement.</p>
        <div class="padBottom10"><img src="../assets/images/screenshot-22.jpg" /></div>
        <h5>Conclusion</h5>
        <p>From this blog series, we hope you could appreciate the power of tracing in performance troubleshooting.</p>
        <p>SnappyFlow is designed to help organizations monitor a variety of applications, physical and virtual infrastructure including Kubernetes pods. The built in features such as ready to use dashboards, tracing, synthetics monitoring and alerting help monitor your infrastructure with complete application context and help troubleshoot problems with remarkable speed. SnappyFlow clients have been able to reduce troubleshooting times from weeks to hours and optimize their overall running costs.</p>
        <p>To experience SnappyFlow in action, get in touch with us or sign up for a <a href="/freetrial" style="font-weight:bold; text-decoration:underline">free trial</a>.</p>
        `,
        blogImage:'blog-content-intro5',
        datetime: 'May 20th, 2021',
        // subHead: 'Log Archival with SnappyFlow',
        title: 'In this series',
            recentBlog:false,
        // image:'blog-1_thumbail.png',
        // url:'blog2', 
        // postedDate: 'November 24th, 2020',
        childList : [
                { 
                    'subHead': 'Troubleshooting JAVA applications',
                    'image':'tile-cpu-and-memery-profiling.png', 
                    'postedDate': 'Jan 19th, 2022',
                    'url':'cpu-profiling'
                    
                },
                { 
                    'subHead': 'The power of tracing in application performance tuning',
                    'image':'blog-4_thumbnail_small.jpg',
                        'postedDate': 'November 24th, 2020',
                        'url':'power-of-tracing'
                    
                },
                { 
                    'subHead': 'Setting up Tracing in SnappyFlow',
                    'image':'blog-3_thumbnail_small.jpg',
                    'postedDate': 'October 14, 2020',
                    'url':'setting-up-tracing' 
                }
                
        ],
        subtitle: 'In this series',
        subchildList : [
            { 
                    'subHead': 'Unleash the Power of Tracing with SnappyFlow',
                    'image':'blog-5_thumbnail_small.jpg',
                    'postedDate': 'May 20, 2021',
                    'url':'unleash-the-power-of-tracing' 
            },
            { 
                'subHead': 'Log Archival with SnappyFlow',
                'image':'blog-1_thumbail.png', 
                'url':'log-archival'
                
            },
            { 
                'subHead': 'Improve Triaging and Reduce Log Management',
                'image':'blog-2_thumbail.png', 
                'url':'improve-triaging' 
            }
        ],
        
    }
]
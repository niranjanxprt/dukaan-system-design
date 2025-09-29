// Complete Chapter data from "The Accidental CTO" with all 19 chapters and proper positioning
const chaptersData = [
    {
        id: 1,
        title: "The 3 AM Phone Call",
        subtitle: "System Resource Contention",
        problem: "Single 512MB DigitalOcean server crashed under load with resource contention between app, database, and OS",
        symptoms: ["CPU at 100%", "Memory exhausted", "Swap usage full", "Server unresponsive"],
        theories_applied: ["Server Anatomy Understanding", "Resource Contention Analysis", "Monolith Architecture Principles"],
        solution: "Diagnosed server bottlenecks using htop, identified resource exhaustion as root cause",
        technologies: ["htop monitoring", "SSH access", "DigitalOcean droplets", "Ubuntu Linux"],
        architecture_before: "Everything on single 512MB server",
        architecture_after: "Same but with proper monitoring and understanding",
        key_metrics: ["Server downtime: 3:14 AM crash", "Memory: 512MB total", "Load: 100% CPU"],
        lessons_learned: ["Always monitor server resources", "Understand fundamentals before scaling", "Monoliths are good for MVP but have shelf life"],
        next_challenge: "Need to formalize architecture and prevent future crashes",
        icon: "🚨",
        color: "#FF6B6B",
        category: "Crisis",
        position: { x: 100, y: 100 }
    },
    {
        id: 2,
        title: "WhatsApp PDF Problem",
        subtitle: "MVP Architecture Foundation",
        problem: "Small businesses using inefficient WhatsApp + PDF catalog workflow during COVID lockdown",
        symptoms: ["Manual PDF creation", "WhatsApp sharing chaos", "No digital storefront", "Lost sales opportunities"],
        theories_applied: ["MVP Philosophy", "Tech Stack Selection", "Speed-First Development"],
        solution: "Built simple e-commerce MVP in 48 hours with Django, PostgreSQL, and DigitalOcean",
        technologies: ["Python/Django", "PostgreSQL", "Nginx", "Gunicorn", "DigitalOcean"],
        architecture_before: "Manual WhatsApp + PDF workflow",
        architecture_after: "Web App: Nginx → Gunicorn → Django → PostgreSQL",
        key_metrics: ["Development time: 48 hours", "Tech stack: Django + PostgreSQL", "Cost: $5/month"],
        lessons_learned: ["MVP is experiment, not mini-product", "Choose familiar tech for speed", "Start simple and iterate"],
        next_challenge: "App getting slow with more users and data",
        icon: "🛠️",
        color: "#4ECDC4",
        category: "Foundation",
        position: { x: 300, y: 120 }
    },
    {
        id: 3,
        title: "The Great Divorce",
        subtitle: "App-Database Separation",
        problem: "Database I/O operations choking CPU, preventing app from serving requests efficiently",
        symptoms: ["Slow page loads", "App server CPU high", "Database queries blocking", "User complaints"],
        theories_applied: ["Vertical Separation", "I/O vs CPU Workload Analysis", "SQL vs NoSQL Decision Framework"],
        solution: "Separated application server and database server, optimized network calls with connection pooling",
        technologies: ["Separate DB server", "PgBouncer", "select_related/prefetch_related", "Network optimization"],
        architecture_before: "Single server: App + DB + OS fighting for resources",
        architecture_after: "App Server (CPU-optimized) + DB Server (Storage-optimized)",
        key_metrics: ["Network latency: 1-2ms per query", "N+1 queries: 50+ per page", "Performance: Significant improvement"],
        lessons_learned: ["Separate concerns early", "Network latency is real cost", "Optimize queries to reduce round trips"],
        next_challenge: "Single app server becoming bottleneck with more traffic",
        icon: "💔",
        color: "#45B7D1",
        category: "Architecture",
        position: { x: 500, y: 140 }
    },
    {
        id: 4,
        title: "The Traffic Cop",
        subtitle: "Load Balancing Introduction",
        problem: "Single app server CPU at 100% with overwhelming traffic despite healthy database",
        symptoms: ["CPU pinned at 100%", "App server unresponsive", "Users unable to access site", "Database healthy but unused"],
        theories_applied: ["Horizontal vs Vertical Scaling", "Load Balancing Algorithms", "Fault Tolerance"],
        solution: "Implemented horizontal scaling with Nginx load balancer distributing traffic across multiple app servers",
        technologies: ["Nginx Load Balancer", "Multiple App Servers", "Least Connections Algorithm", "Health Checks"],
        architecture_before: "User → Single App Server → DB Server",
        architecture_after: "User → Nginx Load Balancer → [App Server 1, App Server 2] → DB Server",
        key_metrics: ["Scaling approach: Horizontal (chosen)", "Load balancing: Least connections", "Fault tolerance: Improved"],
        lessons_learned: ["Horizontal scaling offers better fault tolerance", "Load balancers are critical for distributing traffic", "Health checks prevent routing to failed servers"],
        next_challenge: "Database becoming bottleneck as multiple app servers hammer it",
        icon: "🚦",
        color: "#96CEB4",
        category: "Scaling",
        position: { x: 700, y: 160 }
    },
    {
        id: 5,
        title: "Database Bouncer",
        subtitle: "Read Replicas Implementation",
        problem: "95% read traffic overwhelming single database server from multiple app servers",
        symptoms: ["Database queue delays", "Read queries blocking writes", "Slow response times", "Database CPU high"],
        theories_applied: ["Master-Slave Replication", "CAP Theorem", "Eventual Consistency", "Read-Write Splitting"],
        solution: "Implemented read replicas with master handling writes, replicas handling reads, Django router for traffic splitting",
        technologies: ["PostgreSQL WAL Streaming", "Read Replicas", "Django DB Router", "Master-Slave Architecture"],
        architecture_before: "Multiple app servers → Single DB server",
        architecture_after: "App Servers → [Master DB (writes), Read Replicas (reads)]",
        key_metrics: ["Read traffic: 95%", "Write traffic: 5%", "Replication lag: milliseconds", "CAP choice: AP (eventual consistency)"],
        lessons_learned: ["Most applications are read-heavy", "CAP theorem forces trade-offs", "Eventual consistency is often acceptable", "Read-your-writes pattern solves user experience"],
        next_challenge: "Need proper testing environment to prevent production bugs",
        icon: "🛡️",
        color: "#F7DC6F",
        category: "Database",
        position: { x: 900, y: 180 }
    },
    {
        id: 6,
        title: "Staging Environment",
        subtitle: "SDLC Process Maturity",
        problem: "Developer code worked on laptop (15 products) but crashed production stores (2,000+ products)",
        symptoms: ["'Works on my machine' syndrome", "Production crashes from untested code", "Scale mismatch", "No safe testing"],
        theories_applied: ["Software Development Lifecycle", "Environment Parity", "Data Sanitization", "CI/CD Pipeline"],
        solution: "Created identical staging environment with sanitized production-scale data and proper deployment pipeline",
        technologies: ["Staging Environment", "Data Sanitization Pipeline", "CI/CD", "Automated Testing", "Code Review Process"],
        architecture_before: "Dev laptop → Production (2 environments)",
        architecture_after: "Dev → Staging (identical to prod) → Production (3 environments)",
        key_metrics: ["Environments: 3-tier setup", "Data scale: Production-realistic", "Deployment: Boring and predictable"],
        lessons_learned: ["Staging must mirror production exactly", "Data sanitization preserves scale while protecting privacy", "Make deployments boring, not dramatic"],
        next_challenge: "Pages loading slowly with too many database queries",
        icon: "🎭",
        color: "#BB8FCE",
        category: "Process",
        position: { x: 100, y: 300 }
    },
    {
        id: 7,
        title: "Redis Caching",
        subtitle: "Performance Optimization",
        problem: "Store pages making 114 database queries per load, causing 6-second page load times",
        symptoms: ["1,140ms database time", "Slow page loads", "Death by thousand cuts", "Poor user experience"],
        theories_applied: ["Caching Strategies", "Cache-Aside Pattern", "Event-Driven Cache Invalidation", "In-Memory Storage"],
        solution: "Implemented Redis caching with read-through pattern and PostgreSQL trigger-based cache invalidation",
        technologies: ["Redis", "Cache-aside pattern", "PostgreSQL Triggers", "LISTEN/NOTIFY", "Cache Invalidation Service"],
        architecture_before: "App → DB (114 queries per page)",
        architecture_after: "App → Redis Cache → DB (cache invalidated by triggers)",
        key_metrics: ["Page load: 6 seconds → 200ms", "Cache hit ratio: High", "DB queries: Dramatically reduced"],
        lessons_learned: ["Cache frequently accessed, expensive operations", "Event-driven invalidation beats TTL alone", "In-memory is 1000x faster than SSD"],
        next_challenge: "Team conflicts and deployment risks with growing monolith",
        icon: "⚡",
        color: "#F39C12",
        category: "Performance",
        position: { x: 300, y: 320 }
    },
    {
        id: 8,
        title: "Breaking the Monolith",
        subtitle: "Microservices Introduction",
        problem: "Two dev teams made conflicting changes to same Order model, causing production payment failures",
        symptoms: ["Team conflicts", "Deployment risks", "Tight coupling", "Cannot scale parts independently"],
        theories_applied: ["Microservices Architecture", "Strangler Fig Pattern", "Service Boundaries", "Domain-Driven Design"],
        solution: "Extracted Storefront service using Strangler Fig pattern with Nginx routing for gradual migration",
        technologies: ["Storefront Microservice", "Nginx Routing", "Strangler Fig Pattern", "Service Extraction"],
        architecture_before: "Monolithic Django app handling everything",
        architecture_after: "Nginx Router → [Monolith (admin), Storefront Service (public)]",
        key_metrics: ["Traffic split: 0% → 1% → 10% → 50% → 100%", "Rollback capability: Instant", "Team independence: Achieved"],
        lessons_learned: ["Start with low-risk, loosely coupled services", "Strangler Fig allows gradual migration", "Microservices trade simplicity for team autonomy"],
        next_challenge: "Cache invalidator crashes and messages lost forever",
        icon: "🔧",
        color: "#E67E22",
        category: "Architecture",
        position: { x: 500, y: 340 }
    },
    {
        id: 9,
        title: "Kafka Consistency",
        subtitle: "Event-Driven Architecture",
        problem: "Cache Invalidator script crashed during network hiccup, messages lost forever with no delivery guarantee",
        symptoms: ["Lost messages", "No persistence", "Single point of failure", "No monitoring/insight"],
        theories_applied: ["Event-Driven Architecture", "Message Queues vs Logs", "Change Data Capture", "Fault Tolerance"],
        solution: "Implemented Kafka with Debezium for CDC, providing durable event streaming with multiple consumers",
        technologies: ["Apache Kafka", "Debezium CDC", "PostgreSQL WAL", "Event Streaming", "Consumer Groups"],
        architecture_before: "DB → LISTEN/NOTIFY → Single Cache Invalidator",
        architecture_after: "DB → Debezium (WAL) → Kafka Topics → Multiple Consumers (Cache, Search, Analytics)",
        key_metrics: ["Message durability: Guaranteed", "Consumers: Multiple", "Zero code changes: Achieved"],
        lessons_learned: ["Distributed logs better than message queues for broadcasting", "CDC decouples app from messaging", "Kafka provides durability and multi-subscriber model"],
        next_challenge: "Environment drift and inefficient server utilization",
        icon: "🔄",
        color: "#8E44AD",
        category: "Architecture",
        position: { x: 700, y: 360 }
    },
    {
        id: 10,
        title: "Docker Revolution",
        subtitle: "Containerization Benefits",
        problem: "'Works on my machine' syndrome and underutilized expensive cloud servers",
        symptoms: ["Environment drift", "High AWS bills", "Resource waste", "Deployment inconsistencies"],
        theories_applied: ["Containerization", "Immutable Infrastructure", "Resource Efficiency", "Environment Consistency"],
        solution: "Containerized all services with Docker for consistent environments and better resource utilization",
        technologies: ["Docker", "Container Images", "Dockerfiles", "Image Registries", "Container Orchestration"],
        architecture_before: "VMs with environment drift and low utilization",
        architecture_after: "Containerized services with shared OS kernels",
        key_metrics: ["Server utilization: Dramatically improved", "Environment consistency: 100%", "Cost: Significantly reduced"],
        lessons_learned: ["Containers share OS kernel efficiently", "Immutable images eliminate drift", "Higher density reduces costs"],
        next_challenge: "Poor search experience with SQL LIKE queries",
        icon: "📦",
        color: "#3498DB",
        category: "Infrastructure",
        position: { x: 900, y: 380 }
    },
    {
        id: 11,
        title: "Smart Search",
        subtitle: "Elasticsearch Integration",
        problem: "Naive SQL LIKE-based search with poor relevance, no typo tolerance, and strict term ordering",
        symptoms: ["Poor search results", "No fuzzy matching", "No synonyms", "Bad user experience"],
        theories_applied: ["Inverted Indexing", "Text Analysis", "Relevance Scoring", "Search Engine Architecture"],
        solution: "Built dedicated search microservice with Elasticsearch, synchronized via Kafka events",
        technologies: ["Elasticsearch", "Inverted Index", "Text Analyzers", "Search Microservice", "Kafka Integration"],
        architecture_before: "App → DB with SQL LIKE queries",
        architecture_after: "App → Search Service → Elasticsearch (synced via Kafka)",
        key_metrics: ["Search quality: Dramatically improved", "Typo tolerance: Added", "Conversion rates: Increased"],
        lessons_learned: ["Specialized tools for specialized problems", "Event-driven sync keeps search updated", "Search quality directly impacts business metrics"],
        next_challenge: "Global users experiencing high latency for static assets",
        icon: "🔍",
        color: "#1ABC9C",
        category: "Services",
        position: { x: 100, y: 500 }
    },
    {
        id: 12,
        title: "CDN Assets",
        subtitle: "Global Content Delivery",
        problem: "Global user base experiencing high latency and expensive bandwidth costs for image loading",
        symptoms: ["Long image load times", "High AWS egress costs", "Poor global performance", "Centralized bottleneck"],
        theories_applied: ["Content Delivery Networks", "Edge Caching", "Geographic Distribution", "Static Asset Optimization"],
        solution: "Implemented AWS S3 + CloudFront CDN for global edge caching of static assets",
        technologies: ["AWS S3", "CloudFront", "Edge Locations", "TTL Caching", "Domain Mapping"],
        architecture_before: "All assets served from central region",
        architecture_after: "S3 Origin → CloudFront CDN → Global edge locations",
        key_metrics: ["Load time improvement: Up to 5x", "Global reach: Worldwide", "Cost reduction: Significant"],
        lessons_learned: ["CDN essential for global applications", "Edge caching reduces latency dramatically", "Separate static assets from dynamic content"],
        next_challenge: "Manual container management becoming unmanageable",
        icon: "🌐",
        color: "#16A085",
        category: "Global",
        position: { x: 300, y: 520 }
    },
    {
        id: 13,
        title: "Kubernetes Conductor",
        subtitle: "Container Orchestration",
        problem: "Manual management of 100+ containers with slow failure recovery and deployment complexity",
        symptoms: ["Manual container management", "Slow recovery", "Complex deployments", "No auto-scaling"],
        theories_applied: ["Container Orchestration", "Declarative Infrastructure", "Self-Healing Systems", "Service Discovery"],
        solution: "Adopted Kubernetes for automated container management, scaling, and self-healing",
        technologies: ["Kubernetes", "Pods", "Deployments", "Services", "Ingress", "kubectl"],
        architecture_before: "Manually managed Docker containers",
        architecture_after: "Kubernetes cluster with declarative YAML manifests",
        key_metrics: ["Container count: 100+", "Recovery time: Automatic", "Scaling: Declarative"],
        lessons_learned: ["Orchestration essential at scale", "Declarative configuration prevents drift", "Self-healing improves reliability"],
        next_challenge: "Massive traffic surge from TV appearance",
        icon: "☸️",
        color: "#326CE5",
        category: "Orchestration",
        position: { x: 500, y: 540 }
    },
    {
        id: 14,
        title: "Shark Tank Effect",
        subtitle: "Traffic Surge Handling",
        problem: "Sudden traffic surge from 100s to 80,000+ concurrent users from national TV appearance",
        symptoms: ["Massive traffic spike", "Slow autoscaler response", "Performance degradation", "System stress test"],
        theories_applied: ["Auto-Scaling", "Global Load Distribution", "Anycast Routing", "Performance Under Load"],
        solution: "Global edge network with Anycast routing handled surge through geographic distribution",
        technologies: ["HPA (Horizontal Pod Autoscaler)", "Anycast IP", "Global Distribution", "Multi-region routing"],
        architecture_before: "Single region with reactive scaling",
        architecture_after: "Global distributed system with Anycast routing",
        key_metrics: ["Concurrent users: 80,000+", "Response time: Maintained", "Availability: 100%"],
        lessons_learned: ["Reactive autoscaling has limits", "Global distribution is key for flash crowds", "Network-level routing prevents single region overload"],
        next_challenge: "Need systematic global infrastructure design",
        icon: "🦈",
        color: "#E74C3C",
        category: "Resilience",
        position: { x: 700, y: 560 }
    },
    {
        id: 15,
        title: "Global Edge Network",
        subtitle: "Worldwide Distribution",
        problem: "Need systematic global low-latency, highly available multi-region system",
        symptoms: ["Regional latency issues", "Need for global presence", "Data synchronization challenges", "Complex routing"],
        theories_applied: ["Global Distribution", "Anycast Networking", "Multi-Region Architecture", "Edge Computing"],
        solution: "Deployed independent Kubernetes clusters in 9 worldwide regions with Anycast IP and global data sync",
        technologies: ["9 Global K8s Clusters", "Anycast IP", "Regional PostgreSQL Replicas", "Global Kafka Sync"],
        architecture_before: "Single/few regions with basic distribution",
        architecture_after: "9 worldwide regions with local compute + data + global sync",
        key_metrics: ["Regions: 9 worldwide", "Latency: <100ms globally", "Availability: 99.99%+"],
        lessons_learned: ["Edge computing reduces latency", "Local data + global sync = best performance", "Anycast IP enables seamless routing"],
        next_challenge: "Building tech credibility and attracting talent",
        icon: "🌍",
        color: "#27AE60",
        category: "Global",
        position: { x: 900, y: 580 }
    },
    {
        id: 16,
        title: "Tech Leadership",
        subtitle: "Public Recognition",
        problem: "Need for tech credibility, talent attraction, and establishing thought leadership",
        symptoms: ["Hiring challenges", "Unknown in tech community", "Need for credibility", "Imposter syndrome"],
        theories_applied: ["Thought Leadership", "Transparency", "Community Building", "Authentic Storytelling"],
        solution: "Embraced transparent sharing through podcasts, talks, and 'Asli Engineering' philosophy",
        technologies: ["Public Speaking", "Podcasts", "Technical Storytelling", "Community Engagement"],
        architecture_before: "Private company with limited visibility",
        architecture_after: "Public tech thought leadership and community presence",
        key_metrics: ["Podcast appearances: Multiple", "Community recognition: High", "Talent attraction: Improved"],
        lessons_learned: ["Authenticity beats perfection", "Sharing knowledge builds credibility", "Transparency attracts top talent"],
        next_challenge: "Unsustainable AWS costs reaching $80K/month",
        icon: "🎤",
        color: "#F39C12",
        category: "Leadership",
        position: { x: 100, y: 700 }
    },
    {
        id: 17,
        title: "Bare Metal Escape",
        subtitle: "Cost Optimization",
        problem: "AWS monthly bills peaked at $80K, making cloud economics unsustainable",
        symptoms: ["Massive cloud bills", "Cost scaling faster than revenue", "Economic unsustainability", "Need for optimization"],
        theories_applied: ["Cloud vs Bare Metal Economics", "Total Cost of Ownership", "Infrastructure Ownership", "Migration Strategies"],
        solution: "Migrated to self-managed bare metal Kubernetes clusters while maintaining Anycast IP for seamless transition",
        technologies: ["Hetzner Bare Metal", "Self-managed K8s", "Anycast IP Migration", "Cost Optimization"],
        architecture_before: "Expensive AWS infrastructure across regions",
        architecture_after: "Cost-optimized bare metal with owned Anycast IP",
        key_metrics: ["Cost reduction: >90%", "Performance: Maintained", "Availability: Unchanged"],
        lessons_learned: ["Cloud convenience comes with exponential cost scaling", "Bare metal viable with operational maturity", "Own your critical infrastructure"],
        next_challenge: "Need to prove system resilience publicly",
        icon: "💰",
        color: "#E67E22",
        category: "Economics",
        position: { x: 300, y: 720 }
    },
    {
        id: 18,
        title: "Live Failover",
        subtitle: "Resilience Demonstration",
        problem: "Need to validate and demonstrate system resilience and failover capabilities publicly",
        symptoms: ["Unproven resilience", "Need for public validation", "Community skepticism", "Transparency opportunity"],
        theories_applied: ["Failover Testing", "Chaos Engineering", "Public Transparency", "System Resilience"],
        solution: "Executed live production node shutdown during public broadcast, proving automatic failover",
        technologies: ["Live Failover Demo", "Anycast Routing", "Automated Recovery", "Public Transparency"],
        architecture_before: "Theoretical resilience without public proof",
        architecture_after: "Proven, battle-tested resilient system",
        key_metrics: ["Downtime: 0 seconds", "Failover: Automatic", "Community trust: Established"],
        lessons_learned: ["Public testing builds ultimate credibility", "Transparency creates trust", "Automated systems work under pressure"],
        next_challenge: "Reflection on the complete journey",
        icon: "🔄",
        color: "#9B59B6",
        category: "Validation",
        position: { x: 500, y: 740 }
    },
    {
        id: 19,
        title: "Accidental CTO",
        subtitle: "Journey Reflection",
        problem: "Reflection on unconventional path from commerce background to CTO role",
        symptoms: ["Imposter syndrome", "Non-traditional background", "Self-doubt", "Journey completion"],
        theories_applied: ["Self-Learning", "Grit and Perseverance", "Practical Engineering", "Authentic Leadership"],
        solution: "Embraced unconventional journey, emphasized practical engineering over credentials",
        technologies: ["Self-Learning", "Practical Experience", "Grit", "Authentic Leadership"],
        architecture_before: "Personal doubt and imposter syndrome",
        architecture_after: "Confident CTO with proven track record",
        key_metrics: ["Stores: 1 million+", "Journey: Complete", "Learning: Continuous"],
        lessons_learned: ["Credentials matter less than results", "Self-learning and grit overcome formal education gaps", "Practical engineering beats theoretical knowledge"],
        next_challenge: "Continue sharing knowledge and inspiring others",
        icon: "👑",
        color: "#2C3E50",
        category: "Philosophy",
        position: { x: 700, y: 760 }
    }
];

const theoriesData = [
    {
        id: 'cap-theorem',
        title: 'CAP Theorem',
        icon: '🔺',
        description: 'In distributed systems, you can only guarantee 2 of 3: Consistency, Availability, Partition Tolerance. Dukaan chose AP (Availability + Partition Tolerance) with eventual consistency.',
        applications: 'Applied in Chapter 5: Read Replicas implementation with master-slave replication'
    },
    {
        id: 'scaling-strategies',
        title: 'Horizontal vs Vertical Scaling',
        icon: '📊',
        description: 'Vertical scaling (scale up) adds more power to existing servers. Horizontal scaling (scale out) adds more servers. Dukaan chose horizontal for fault tolerance.',
        applications: 'Applied in Chapter 4: Load balancing with multiple app servers'
    },
    {
        id: 'caching-patterns',
        title: 'Caching Strategies',
        icon: '⚡',
        description: 'Cache-aside pattern where application manages cache population. Enhanced with event-driven invalidation using PostgreSQL triggers.',
        applications: 'Applied in Chapter 7: Redis caching with 30x performance improvement'
    },
    {
        id: 'microservices-patterns',
        title: 'Microservices Patterns',
        icon: '🔧',
        description: 'Strangler Fig pattern gradually replaces monolith by intercepting requests and routing to new services. Enables zero-downtime migration.',
        applications: 'Applied in Chapter 8: Storefront service extraction from monolith'
    },
    {
        id: 'event-driven',
        title: 'Event-Driven Architecture',
        icon: '🔄',
        description: 'Kafka distributed log provides durable event streaming with multiple consumers. Change Data Capture (CDC) via Debezium ensures data consistency.',
        applications: 'Applied in Chapter 9: Replaced fragile LISTEN/NOTIFY with Kafka'
    },
    {
        id: 'containerization',
        title: 'Containerization Benefits',
        icon: '📦',
        description: 'Docker containers provide environment consistency and resource efficiency by sharing OS kernels. Immutable infrastructure prevents environment drift.',
        applications: 'Applied in Chapter 10: Docker deployment with improved utilization'
    },
    {
        id: 'load-balancing',
        title: 'Load Balancing Algorithms',
        icon: '⚖️',
        description: 'Round robin, least connections, and weighted algorithms distribute traffic across servers. Health checks ensure only healthy servers receive traffic.',
        applications: 'Applied in Chapter 4: Nginx load balancer with least connections algorithm'
    },
    {
        id: 'database-replication',
        title: 'Database Replication Patterns',
        icon: '🗄️',
        description: 'Master-slave replication with read replicas handles read-heavy workloads. WAL streaming ensures data consistency across replicas.',
        applications: 'Applied in Chapter 5: PostgreSQL read replicas for 95% read traffic'
    }
];

// Application state
let currentView = 'flowchart';
let selectedChapter = null;
let searchTerm = '';
let selectedCategory = 'all';
let zoomLevel = 1;
let panX = 0;
let panY = 0;

// DOM Elements
const navTabs = document.querySelectorAll('.nav__tab');
const contentSections = document.querySelectorAll('.content-section');
const searchInput = document.querySelector('.search-input');
const filterSelect = document.querySelector('.filter-select');
const modal = document.getElementById('chapterModal');
const modalClose = document.getElementById('modalClose');
const modalBody = document.getElementById('modalBody');
const chapterCountElement = document.getElementById('chapterCount');

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log(`Initializing app with ${chaptersData.length} chapters`);
    initializeEventListeners();
    updateChapterCount();
    renderFlowchart();
    renderTimeline();
    renderTheories();
    renderArchitecture();
});

// Event listeners
function initializeEventListeners() {
    // Navigation tabs
    navTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabType = tab.getAttribute('data-tab');
            switchTab(tabType);
        });
    });

    // Search and filter
    searchInput.addEventListener('input', (e) => {
        searchTerm = e.target.value.toLowerCase();
        filterContent();
    });

    filterSelect.addEventListener('change', (e) => {
        selectedCategory = e.target.value;
        filterContent();
    });

    // Modal
    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });

    // Escape key to close modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeModal();
    });

    // Flowchart controls
    const zoomInBtn = document.getElementById('zoomIn');
    const zoomOutBtn = document.getElementById('zoomOut');
    const resetViewBtn = document.getElementById('resetView');
    const showAllBtn = document.getElementById('showAll');

    if (zoomInBtn) zoomInBtn.addEventListener('click', () => zoomFlowchart(1.2));
    if (zoomOutBtn) zoomOutBtn.addEventListener('click', () => zoomFlowchart(0.8));
    if (resetViewBtn) resetViewBtn.addEventListener('click', resetFlowchartView);
    if (showAllBtn) showAllBtn.addEventListener('click', showAllChapters);
}

// Update chapter count display
function updateChapterCount() {
    if (chapterCountElement) {
        chapterCountElement.textContent = `Showing ${chaptersData.length} of 19 chapters`;
    }
}

// Tab switching
function switchTab(tabType) {
    currentView = tabType;

    // Update nav tabs
    navTabs.forEach(tab => {
        tab.classList.toggle('nav__tab--active', 
            tab.getAttribute('data-tab') === tabType);
    });

    // Update content sections
    contentSections.forEach(section => {
        section.classList.toggle('content-section--active', 
            section.id === tabType);
    });
}

// Filter content based on search and category
function filterContent() {
    const filteredChapters = chaptersData.filter(chapter => {
        const matchesSearch = !searchTerm || 
            chapter.title.toLowerCase().includes(searchTerm) ||
            chapter.subtitle.toLowerCase().includes(searchTerm) ||
            chapter.problem.toLowerCase().includes(searchTerm) ||
            chapter.technologies?.some(tech => 
                tech.toLowerCase().includes(searchTerm));

        const matchesCategory = selectedCategory === 'all' || 
            chapter.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    // Re-render based on current view
    if (currentView === 'timeline') {
        renderTimeline(filteredChapters);
    } else if (currentView === 'flowchart') {
        renderFlowchart(filteredChapters);
    }

    // Update chapter count
    if (chapterCountElement) {
        chapterCountElement.textContent = `Showing ${filteredChapters.length} of 19 chapters`;
    }
}

// Render interactive flowchart with proper positioning
function renderFlowchart(chapters = chaptersData) {
    const container = document.getElementById('flowchartCanvas');
    if (!container) return;

    console.log(`Rendering flowchart with ${chapters.length} chapters`);

    // Clear existing content
    container.innerHTML = '';

    // Create SVG with proper dimensions
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'flowchart-svg');
    svg.setAttribute('viewBox', `0 0 1000 800`);
    svg.setAttribute('width', '100%');
    svg.setAttribute('height', '800px');

    // Create connections between sequential chapters
    for (let i = 0; i < chapters.length - 1; i++) {
        const currentChapter = chapters[i];
        const nextChapter = chapters[i + 1];

        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('class', 'flowchart-connection');
        line.setAttribute('x1', currentChapter.position.x);
        line.setAttribute('y1', currentChapter.position.y);
        line.setAttribute('x2', nextChapter.position.x);
        line.setAttribute('y2', nextChapter.position.y);
        line.setAttribute('stroke', '#4ECDC4');
        line.setAttribute('stroke-width', '2');
        line.setAttribute('opacity', '0.6');

        svg.appendChild(line);
    }

    // Add chapter nodes
    chapters.forEach(chapter => {
        const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
        g.setAttribute('class', 'flowchart-node bounce-in');
        g.setAttribute('transform', `translate(${chapter.position.x}, ${chapter.position.y})`);
        g.style.cursor = 'pointer';

        // Node circle
        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
        circle.setAttribute('class', 'node-circle');
        circle.setAttribute('r', '30');
        circle.setAttribute('fill', chapter.color);
        circle.setAttribute('stroke', '#ffffff');
        circle.setAttribute('stroke-width', '3');

        // Chapter number
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('class', 'node-label');
        text.setAttribute('y', '5');
        text.setAttribute('fill', 'white');
        text.setAttribute('font-size', '14');
        text.setAttribute('font-weight', '600');
        text.textContent = chapter.id;

        // Chapter icon (emoji)
        const icon = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        icon.setAttribute('class', 'node-icon');
        icon.setAttribute('y', '-45');
        icon.setAttribute('text-anchor', 'middle');
        icon.setAttribute('font-size', '20');
        icon.textContent = chapter.icon;

        // Title below node
        const title = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        title.setAttribute('class', 'node-title');
        title.setAttribute('y', '50');
        title.setAttribute('font-size', '10');
        title.setAttribute('fill', '#94a3b8');
        title.textContent = chapter.title.length > 15 ? chapter.title.substring(0, 15) + '...' : chapter.title;

        g.appendChild(circle);
        g.appendChild(text);
        g.appendChild(icon);
        g.appendChild(title);

        // Click event
        g.addEventListener('click', () => openChapterModal(chapter));

        // Hover effects
        g.addEventListener('mouseenter', () => {
            circle.setAttribute('r', '35');
            circle.setAttribute('stroke-width', '4');
        });

        g.addEventListener('mouseleave', () => {
            circle.setAttribute('r', '30');
            circle.setAttribute('stroke-width', '3');
        });

        svg.appendChild(g);
    });

    container.appendChild(svg);
}

// Flowchart controls
function zoomFlowchart(factor) {
    zoomLevel *= factor;
    zoomLevel = Math.max(0.5, Math.min(3, zoomLevel)); // Limit zoom between 0.5x and 3x
    updateFlowchartTransform();
}

function resetFlowchartView() {
    zoomLevel = 1;
    panX = 0;
    panY = 0;
    updateFlowchartTransform();
}

function updateFlowchartTransform() {
    const svg = document.querySelector('.flowchart-svg');
    if (svg) {
        svg.style.transform = `scale(${zoomLevel}) translate(${panX}px, ${panY}px)`;
    }
}

function showAllChapters() {
    searchTerm = '';
    selectedCategory = 'all';
    if (searchInput) searchInput.value = '';
    if (filterSelect) filterSelect.value = 'all';
    renderFlowchart(chaptersData);
    updateChapterCount();
}

// Render timeline view
function renderTimeline(chapters = chaptersData) {
    const container = document.getElementById('timelineContainer');
    if (!container) return;

    container.innerHTML = '';

    chapters.forEach(chapter => {
        const item = document.createElement('div');
        item.className = 'timeline-item fade-in';

        item.innerHTML = `
            <div class="timeline-marker"></div>
            <div class="timeline-content" onclick="openChapterModal(chaptersData.find(c => c.id === ${chapter.id}))">
                <div class="timeline-chapter">Chapter ${chapter.id}</div>
                <h3 class="timeline-title">${chapter.title}</h3>
                <p class="timeline-problem">${chapter.problem}</p>
                <div class="timeline-tech">
                    ${chapter.technologies?.slice(0, 3).map(tech => 
                        `<span class="tech-tag">${tech}</span>`
                    ).join('') || ''}
                </div>
            </div>
        `;

        container.appendChild(item);
    });
}

// Render theory cards
function renderTheories() {
    const container = document.getElementById('theoryGrid');
    if (!container) return;

    container.innerHTML = '';

    theoriesData.forEach(theory => {
        const card = document.createElement('div');
        card.className = 'theory-card fade-in';

        card.innerHTML = `
            <div class="theory-header">
                <div class="theory-icon">${theory.icon}</div>
                <h3 class="theory-title">${theory.title}</h3>
            </div>
            <p class="theory-description">${theory.description}</p>
            <div class="theory-applications">
                <h4>Applied in Dukaan's Journey</h4>
                <p>${theory.applications}</p>
            </div>
        `;

        container.appendChild(card);
    });
}

// Render architecture evolution
function renderArchitecture() {
    const container = document.getElementById('architectureTimeline');
    if (!container) return;

    const architecturalMilestones = [
        {
            stage: 1,
            title: "Single Server Monolith",
            chapters: [1, 2],
            before: "Manual processes",
            after: "Django + PostgreSQL + Nginx on 512MB server"
        },
        {
            stage: 2,
            title: "App-Database Separation",
            chapters: [3],
            before: "Single server with resource contention",
            after: "Separate app server + database server"
        },
        {
            stage: 3,
            title: "Horizontal Scaling",
            chapters: [4, 5],
            before: "Single app server + single database",
            after: "Load balancer + multiple app servers + read replicas"
        },
        {
            stage: 4,
            title: "Performance & Process",
            chapters: [6, 7],
            before: "No testing environment + slow queries",
            after: "Staging environment + Redis caching layer"
        },
        {
            stage: 5,
            title: "Microservices Architecture",
            chapters: [8, 9],
            before: "Monolithic application",
            after: "Microservices + Event-driven architecture with Kafka"
        },
        {
            stage: 6,
            title: "Containerization & Services",
            chapters: [10, 11, 12],
            before: "VM deployment + poor search + centralized assets",
            after: "Docker containers + Elasticsearch + CDN"
        },
        {
            stage: 7,
            title: "Orchestration & Global Scale",
            chapters: [13, 14, 15],
            before: "Manual container management",
            after: "Kubernetes orchestration + Global edge network"
        },
        {
            stage: 8,
            title: "Optimization & Maturity",
            chapters: [16, 17, 18, 19],
            before: "High cloud costs + unproven resilience",
            after: "Bare metal optimization + proven reliability + thought leadership"
        }
    ];

    container.innerHTML = '';

    architecturalMilestones.forEach(milestone => {
        const stage = document.createElement('div');
        stage.className = 'architecture-stage fade-in';

        stage.innerHTML = `
            <div class="stage-header">
                <div class="stage-number">${milestone.stage}</div>
                <h3 class="stage-title">${milestone.title}</h3>
            </div>
            <div class="architecture-comparison">
                <div class="architecture-box">
                    <h4>🏗️ Before</h4>
                    <p>${milestone.before}</p>
                </div>
                <div class="architecture-arrow">➡️</div>
                <div class="architecture-box">
                    <h4>🚀 After</h4>
                    <p>${milestone.after}</p>
                </div>
            </div>
            <p><strong>Chapters:</strong> ${milestone.chapters.join(', ')}</p>
        `;

        container.appendChild(stage);
    });
}

// Open chapter detail modal
function openChapterModal(chapter) {
    if (!chapter) return;

    selectedChapter = chapter;

    modalBody.innerHTML = `
        <div class="chapter-detail">
            <div class="chapter-header">
                <div class="chapter-icon">${chapter.icon}</div>
                <h2 class="chapter-title">${chapter.title}</h2>
                <p class="chapter-subtitle">${chapter.subtitle}</p>
            </div>

            <div class="chapter-section">
                <h3>🚨 Problem & Symptoms</h3>
                <p>${chapter.problem}</p>
                ${chapter.symptoms ? `
                    <ul>
                        ${chapter.symptoms.map(symptom => `<li>${symptom}</li>`).join('')}
                    </ul>
                ` : ''}
            </div>

            <div class="chapter-section">
                <h3>🧠 System Design Theories Applied</h3>
                <ul>
                    ${chapter.theories_applied?.map(theory => `<li>${theory}</li>`).join('') || '<li>Basic system understanding</li>'}
                </ul>
            </div>

            <div class="chapter-section">
                <h3>✅ Solution Implemented</h3>
                <p>${chapter.solution}</p>
            </div>

            <div class="architecture-comparison">
                <div class="architecture-box">
                    <h4>🏗️ Before</h4>
                    <p>${chapter.architecture_before}</p>
                </div>
                <div class="architecture-arrow">➡️</div>
                <div class="architecture-box">
                    <h4>🚀 After</h4>
                    <p>${chapter.architecture_after}</p>
                </div>
            </div>

            <div class="chapter-section">
                <h3>🛠️ Technologies Introduced</h3>
                <div class="timeline-tech">
                    ${chapter.technologies?.map(tech => `<span class="tech-tag">${tech}</span>`).join('') || ''}
                </div>
            </div>

            <div class="metrics-grid">
                ${chapter.key_metrics?.map(metric => {
                    const [label, value] = metric.split(':');
                    return `
                        <div class="metric-item">
                            <div class="metric-label">${label}</div>
                            <div class="metric-value">${value || 'Improved'}</div>
                        </div>
                    `;
                }).join('') || ''}
            </div>

            <div class="chapter-section">
                <h3>📚 Lessons Learned</h3>
                <ul>
                    ${chapter.lessons_learned?.map(lesson => `<li>${lesson}</li>`).join('') || '<li>Every solution creates new challenges</li>'}
                </ul>
            </div>

            <div class="chapter-section">
                <h3>🔮 Next Challenge</h3>
                <p>${chapter.next_challenge || 'Continue scaling and optimization'}</p>
            </div>
        </div>
    `;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Close modal
function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    selectedChapter = null;
}

// Make functions available globally for onclick handlers
window.openChapterModal = openChapterModal;
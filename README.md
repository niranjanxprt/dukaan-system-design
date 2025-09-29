# The Accidental CTO - Interactive System Design Journey

🌐 **Live Demo:** [https://niranjanxprt.github.io/dukaan-system-design/](https://niranjanxprt.github.io/dukaan-system-design/)

An interactive web application that visualizes the complete architectural evolution of Dukaan from a single 512MB server to a globally distributed system handling millions of users, as documented in "The Accidental CTO" by Subhash Choudhary.

## 🚀 **NEW: Fixed Interactive Flowchart!**

**Problem Solved:** The interactive flowchart now properly displays all 19 chapters with:
- ✅ All chapters visible as connected nodes
- ✅ Proper positioning and colors for each chapter
- ✅ Interactive connections showing the evolution path
- ✅ Chapter counter showing "19 of 19 chapters"
- ✅ Zoom, pan, and reset controls
- ✅ Detailed chapter information on click

## Features

### 🎯 **Interactive Flowchart**
- **All 19 chapters** displayed as connected nodes
- **Color-coded categories** (Crisis, Architecture, Scaling, etc.)
- **Clickable nodes** that open detailed chapter information
- **Zoom and pan controls** for better navigation
- **Connection lines** showing the evolution path
- **Chapter icons** and hover effects

### 📅 **Timeline View**
- Chronological progression through the scaling journey
- Detailed chapter cards with technology tags
- Responsive timeline design

### 🧠 **System Design Theories**
- Comprehensive explanations of key concepts
- CAP Theorem, scaling strategies, caching patterns
- Visual theory cards with applications

### 🏗️ **Architecture Evolution**
- Before/after comparisons for each stage
- Grouped by architectural milestones
- Clear progression from monolith to distributed system

## Complete Chapter Coverage

### **Phase 1: Foundation (Chapters 1-2)**
- **Chapter 1**: The 3 AM Phone Call - Resource contention crisis
- **Chapter 2**: WhatsApp PDF Problem - MVP foundation

### **Phase 2: Scaling (Chapters 3-5)**
- **Chapter 3**: The Great Divorce - App-database separation
- **Chapter 4**: Traffic Cop - Load balancing
- **Chapter 5**: Database Bouncer - Read replicas

### **Phase 3: Process & Performance (Chapters 6-7)**
- **Chapter 6**: Staging Environment - SDLC maturity
- **Chapter 7**: Redis Caching - Performance optimization

### **Phase 4: Architecture Evolution (Chapters 8-10)**
- **Chapter 8**: Breaking Monolith - First microservice
- **Chapter 9**: Kafka Consistency - Event-driven architecture
- **Chapter 10**: Docker Revolution - Containerization

### **Phase 5: Services & Global (Chapters 11-15)**
- **Chapter 11**: Smart Search - Elasticsearch integration
- **Chapter 12**: CDN Assets - Global content delivery
- **Chapter 13**: Kubernetes Conductor - Container orchestration
- **Chapter 14**: Shark Tank Effect - Traffic surge handling
- **Chapter 15**: Global Edge Network - Worldwide distribution

### **Phase 6: Maturity (Chapters 16-19)**
- **Chapter 16**: Tech Leadership - Public recognition
- **Chapter 17**: Bare Metal Escape - Cost optimization
- **Chapter 18**: Live Failover - Resilience demonstration
- **Chapter 19**: Accidental CTO - Journey reflection

## System Design Concepts

- **CAP Theorem**: Consistency, Availability, Partition Tolerance
- **Horizontal vs Vertical Scaling**: Trade-offs and decisions
- **Database Replication**: Master-slave, read replicas
- **Caching Strategies**: Cache-aside, event-driven invalidation
- **Load Balancing**: Algorithms and fault tolerance
- **Microservices Patterns**: Strangler Fig, service boundaries
- **Event-Driven Architecture**: Kafka, CDC with Debezium
- **Containerization**: Docker benefits and orchestration
- **Global Distribution**: CDN, edge computing, Anycast

## Getting Started

### 🌐 **Live Application**
Visit the live application: **[https://niranjanxprt.github.io/dukaan-system-design/](https://niranjanxprt.github.io/dukaan-system-design/)**

### 🖥️ **Local Development**
1. Clone the repository:
   ```bash
   git clone https://github.com/niranjanxprt/dukaan-system-design.git
   cd dukaan-system-design
   ```
2. Open `index.html` in your web browser
3. No build process required - pure HTML/CSS/JavaScript

### 🚀 **Deploy Your Own**
1. Fork this repository
2. Go to Settings → Pages
3. Select "Deploy from a branch" → main
4. Your site will be live at `https://yourusername.github.io/dukaan-system-design`

## File Structure

```
├── index.html          # Main application
├── style.css           # Complete styling
├── app.js              # All functionality + complete data
└── README.md           # Documentation
```

## Key Features Fixed

### ✅ **Interactive Flowchart Issues Resolved**
- **All 19 chapters now visible** (previously only showing 1)
- **Proper node positioning** with logical flow layout
- **Connection lines** between sequential chapters
- **Chapter counter** displays correct count
- **Zoom/pan controls** working properly
- **Visual hierarchy** with colors and icons

### ✅ **Data Completeness**
- **Complete chapter data** for all 19 chapters
- **Proper positioning coordinates** for each node
- **Full problem/solution descriptions**
- **Technology stack information**
- **Architecture before/after details**

### ✅ **Enhanced Interactivity**
- **Modal dialogs** with comprehensive chapter details
- **Search and filter** functionality
- **Responsive design** for all devices
- **Smooth animations** and transitions

## Architecture Journey Summary

**512MB Server → Global Distributed System**

1. **Single Server Crisis** (512MB resource exhaustion)
2. **MVP Foundation** (Django + PostgreSQL)
3. **Vertical Separation** (App + DB servers)
4. **Horizontal Scaling** (Load balancer + multiple apps)
5. **Database Scaling** (Read replicas + master-slave)
6. **Process Maturity** (Staging + CI/CD)
7. **Performance Optimization** (Redis caching)
8. **Microservices** (Service extraction)
9. **Event Architecture** (Kafka + Debezium)
10. **Containerization** (Docker deployment)
11. **Search Service** (Elasticsearch)
12. **Global Delivery** (CDN implementation)
13. **Orchestration** (Kubernetes)
14. **Traffic Resilience** (Auto-scaling)
15. **Global Distribution** (9 worldwide regions)
16. **Thought Leadership** (Public recognition)
17. **Cost Optimization** (Bare metal migration)
18. **Resilience Proof** (Live failover)
19. **Journey Reflection** (CTO philosophy)

## Based on the Book

This application is based on "The Accidental CTO: How I Scaled from Zero to a Million Stores on Dukaan, Without a CS Degree" by Subhash Choudhary.

## License

Educational project for learning system design concepts. Please support the original author by purchasing the book.

---

**🎉 The interactive flowchart is now fully functional with all 19 chapters properly displayed and connected!**
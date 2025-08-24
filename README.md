# RAG Document Q&A System

A modern, production-ready RAG (Retrieval-Augmented Generation) system that allows users to upload documents and ask questions about them using AI. Built with cutting-edge technologies and best practices.

## 🚀 Features

- **Document Upload & Processing**: Upload text documents and automatically split them into optimized chunks
- **Vector Embeddings**: Generate embeddings using OpenAI's text-embedding-3-small model
- **Intelligent Retrieval**: Advanced document retrieval with similarity search and reranking
- **AI-Powered Q&A**: Get accurate answers based on your uploaded documents
- **Modern Web Interface**: Clean, responsive UI built with Next.js and Tailwind CSS
- **Real-time Chat**: Interactive chat interface for document queries

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful, accessible UI components

### Backend & AI
- **OpenAI API** - GPT models for text generation and embeddings
- **Cohere AI** - Advanced document reranking for better relevance
- **PostgreSQL** - Robust database with pgvector extension
- **Drizzle ORM** - Type-safe database operations

### Infrastructure
- **Vector Database** - PostgreSQL + pgvector for similarity search
- **Server Actions** - Next.js server-side functions
- **Database Migrations** - Automated schema management
- **Environment Management** - Secure API key handling

## 🏗️ Architecture

### RAG Pipeline
1. **Document Processing**: Text splitting and chunking
2. **Embedding Generation**: Vector representations using OpenAI
3. **Storage**: PostgreSQL with pgvector for efficient similarity search
4. **Query Optimization**: AI-powered query refinement
5. **Retrieval**: Semantic search with similarity scoring
6. **Reranking**: Cohere AI for relevance optimization
7. **Generation**: Context-aware AI responses

### Database Schema
- **Documents Table**: Stores document chunks with vector embeddings
- **Vector Indexing**: HNSW algorithm for fast similarity search
- **Metadata Tracking**: Creation timestamps and content management

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- PostgreSQL with pgvector extension
- OpenAI API key
- Cohere AI API key

### Installation

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd rag-document-qa-system
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env.local
```
Add your API keys:
```env
DATABASE_URL=postgresql://user:password@localhost:5432/rag_db
OPENAI_API_KEY=your_openai_key
COHERE_API_KEY=your_cohere_key
```

4. **Set up database**
```bash
npm run db:generate
npm run db:migrate
```

5. **Run the development server**
```bash
npm run dev
```

## 📁 Project Structure

```
├── app/                    # Next.js app router
├── components/            # React components
│   └── ui/               # Reusable UI components
├── lib/rag/              # RAG implementation
│   ├── generate/         # AI generation & embeddings
│   ├── processing/       # Document processing
│   └── retrieval/        # Document retrieval & ranking
├── db/                   # Database configuration
│   ├── schema/          # Database schemas
│   └── migrations/      # Database migrations
└── public/               # Static assets
```

## 🔧 Key Components

### Document Processing
- **Text Splitting**: Intelligent chunking for optimal retrieval
- **Embedding Generation**: Vector representations for semantic search
- **Database Storage**: Efficient storage with vector indexing

### Retrieval System
- **Query Optimization**: AI-powered query refinement
- **Similarity Search**: Vector-based document retrieval
- **Reranking**: Advanced relevance scoring with Cohere

### AI Generation
- **Context-Aware Responses**: AI answers based on retrieved documents
- **Prompt Engineering**: Optimized prompts for better responses
- **Error Handling**: Graceful fallbacks for API failures

## 🎯 Use Cases

- **Research & Analysis**: Upload research papers and ask questions
- **Documentation**: Query technical documentation and manuals
- **Knowledge Management**: Build a searchable knowledge base
- **Customer Support**: Create AI-powered support systems
- **Educational Content**: Interactive learning with document Q&A

## 🚀 Performance Features

- **Vector Indexing**: HNSW algorithm for sub-millisecond search
- **Efficient Chunking**: Optimized text splitting for better retrieval
- **Smart Caching**: Intelligent caching of embeddings and responses
- **Async Processing**: Non-blocking document upload and processing

## 🔒 Security & Best Practices

- **Environment Variables**: Secure API key management
- **Input Validation**: Sanitized user inputs
- **Error Handling**: Graceful error handling without exposing internals
- **Type Safety**: Full TypeScript coverage for robust development

## 🤝 Contributing

This project demonstrates advanced RAG implementation skills including:
- Vector database design and optimization
- AI integration and prompt engineering
- Modern web development with Next.js
- Database design with Drizzle ORM
- Production-ready error handling and validation

## 📄 License

MIT License - feel free to use this code for learning and projects!

---

**Built with ❤️ by Nisarg** - Showcasing expertise in RAG systems, AI integration, and modern web development.

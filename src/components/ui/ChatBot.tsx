"use client";

import { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Minus } from 'lucide-react';
import { GlassCard } from './GlassCard';

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<{role: 'bot' | 'user', text: string}[]>([
    { role: 'bot', text: 'Hello! I am your StudyQuest Pro assistant. How can I help you today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMsg }),
      });
      const data = await res.json();
      
      if (data.reply) {
        setMessages(prev => [...prev, { role: 'bot', text: data.reply }]);
      } else {
        throw new Error();
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'bot', text: 'Sorry, I am having connection issues right now.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isOpen) {
    return (
      <button 
        onClick={() => { setIsOpen(true); setIsMinimized(false); }}
        className="fixed bottom-6 right-6 w-14 h-14 bg-primary hover:bg-primary-hover text-white rounded-full flex items-center justify-center shadow-lg shadow-primary/30 transition-transform hover:scale-110 z-50"
      >
        <Bot size={24} />
      </button>
    );
  }

  return (
    <div className={`fixed right-6 z-50 transition-all duration-300 ${isMinimized ? 'bottom-6' : 'bottom-6'}`}>
      <GlassCard className={`p-0 overflow-hidden flex flex-col shadow-2xl shadow-black/50 border-white/20 transition-all duration-300 ${isMinimized ? 'w-72 h-14' : 'w-80 h-96'}`}>
        {/* Header */}
        <div className="bg-primary/20 border-b border-white/10 p-3 flex justify-between items-center cursor-pointer" onClick={() => setIsMinimized(!isMinimized)}>
          <div className="flex items-center gap-2 text-white font-medium">
            <Bot size={18} className="text-primary" />
            <span>AI Assistant</span>
          </div>
          <div className="flex items-center gap-1 text-white/60">
            <button onClick={(e) => { e.stopPropagation(); setIsMinimized(!isMinimized); }} className="hover:text-white p-1">
              <Minus size={16} />
            </button>
            <button onClick={(e) => { e.stopPropagation(); setIsOpen(false); }} className="hover:text-white p-1">
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Chat Area */}
        {!isMinimized && (
          <>
            <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar bg-black/20">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-xl p-3 text-sm ${
                    msg.role === 'user' 
                      ? 'bg-primary text-white rounded-tr-sm' 
                      : 'bg-white/10 text-white/90 rounded-tl-sm border border-white/5'
                  }`}>
                    {msg.role === 'bot' ? (
                      <div className="whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: msg.text.replace(/• /g, '<br/>• ') }} />
                    ) : (
                      msg.text
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/10 border border-white/5 rounded-xl rounded-tl-sm p-3 text-sm text-white/50 flex gap-1">
                    <span className="animate-bounce">.</span><span className="animate-bounce delay-100">.</span><span className="animate-bounce delay-200">.</span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-3 bg-white/5 border-t border-white/10">
              <form onSubmit={handleSend} className="flex gap-2">
                <input 
                  type="text" 
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  placeholder="Ask me anything..." 
                  className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-primary transition-colors"
                />
                <button type="submit" disabled={isLoading || !input.trim()} className="bg-primary hover:bg-primary-hover disabled:bg-primary/50 text-white p-2 rounded-lg transition-colors flex items-center justify-center">
                  <Send size={18} />
                </button>
              </form>
            </div>
          </>
        )}
      </GlassCard>
    </div>
  );
}

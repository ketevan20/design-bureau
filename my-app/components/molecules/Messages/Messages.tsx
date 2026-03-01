'use client'
import { Delete, Edit } from 'lucide-react';
import React, { useEffect, useState } from 'react';

interface MessageType {
  _id: string;
  fullName: string;
  email: string;
  interestedIn: string;
  message: string;
  createdAt: string;
}

const Messages = () => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await fetch("/api/admin/messages");
        if (!res.ok) throw new Error("Failed to fetch messages");
        const data = await res.json();
        console.log(data);
        setMessages(Array.isArray(data.messages) ? data.messages : []);
      } catch (error: any) {
        alert(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  if (loading) return <p>Loading...</p>;

  const deleteMessage = async (messageId: string) => {
    if (!messageId) {
      return alert("invalid message id");
    }

    if (!confirm("Are you sure you want to delete this message?")) return;

    try {
      const res = await fetch(`/api/messages/${messageId}`, {
        method: 'DELETE'
      })

      const data = await res.json();

      if(!res.ok) {
        throw new Error(data.message || "Failed to delete message");
      }

      alert('Message deleted successfully');
      setMessages(messages.filter(message => message._id != messageId));
    } catch (error) {
      console.error(error);
    } 

  }

  return (
    <div className='bg-white p-4'>
      <div className='flex justify-between'>
        <h1 className='font-cormorant font-bold text-xl'>Manage Messages</h1>
      </div>
      <div className='w-full h-px bg-[#0000005f] my-4'></div>
      <div className='flex flex-col gap-4'>
        {messages.length === 0 && <p className='uppercase tracking-[20%] opacity-60'>No messages yet.</p>}
        {messages.map(msg => (
          <div key={msg._id} className='border border-[#00000030] p-3 flex flex-col gap-2 hover:bg-[#F2F0EF]'>
            <div className='flex items-start justify-between '>
              <div>
                <p className='font-regular text-[12px] sm:text-[clamp(0.75rem,2vh,0.9rem)] leading-4.25 tracking-[20%] uppercase'>{msg.fullName} — {msg.interestedIn}</p>
                <p className='font-regular text-[10px] leading-4.25 tracking-[20%] opacity-60'>
                  {msg.email} — {msg.createdAt ? new Date(msg.createdAt).toLocaleString() : ""}
                </p>
              </div>
              <div className='flex gap-4'>
                <button onClick={() => deleteMessage(msg._id)} className='hover:text-red-600'><Delete size={16} /></button>
              </div>
            </div>
            <div className='border border-[#00000030] p-2 font-regular text-[12px] leading-4.25 tracking-[10%]'>
              {msg.message}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Messages;
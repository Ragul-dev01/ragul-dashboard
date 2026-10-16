
import { useState, useRef, useEffect } from "react";
import {
  X,
  MoreHorizontal,
  Paperclip,
  Smile,
  Send,
  Plus,
} from "lucide-react";
import profile from "../assets/profile.png";

const initialMessages = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit ame?",
    time: "09:45am",
    sender: "other",
  },
  {
    id: 2,
    text: "Consectetur adipisicing elit. Turpis risus commodo sed viverra. 😊",
    time: "09:47am",
    sender: "me",
  },
  {
    id: 3,
    text: "Sollicitudin non posuere pharetra.",
    time: "09:48am",
    sender: "other",
  },
  {
    id: 4,
    text: "Laoreet in elementum nisl, ultrices.",
    time: "09:47am",
    sender: "me",
  },
  {
    id: 5,
    text: "Tellus accumsan, est arcu purus lacus amet. 🥹",
    time: "09:48am",
    sender: "other",
  },
  {
    id: 6,
    text: "Eget cursus bibendum amet donec.",
    time: "09:47am",
    sender: "me",
  },
  {
    id: 7,
    text: "Posuere scelerisque elit duis in. Sapien proin lectus tincidunt.",
    time: "09:45am",
    sender: "other",
  },
  {
    id: 8,
    text: "Quam consectetur est suspendisse facilisis in viverra laoreet...",
    time: "09:47am",
    sender: "me",
  },
];

const contacts = [
  { id: 1, name: "Felicia Brown", unread: 0 },
  { id: 2, name: "Ronald Robertson", unread: 0 },
  { id: 3, name: "Regina Cooper", unread: 8 },
  { id: 4, name: "Judith Black", unread: 0 },
  { id: 5, name: "Dustin Williamson", unread: 0 },
  { id: 6, name: "Calvin Flores", unread: 0 },
  { id: 7, name: "Devon Williamson", unread: 4 },
  { id: 8, name: "Debra Wilson", unread: 0 },
];

function ChatPanel({ onClose }) {
  const [messages, setMessages] = useState(initialMessages);
  const [message, setMessage] = useState("");
  const [activeContact, setActiveContact] = useState(contacts[0]);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = (event) => {
    event.preventDefault();

    const trimmedMessage = message.trim();
    if (!trimmedMessage) return;

    setMessages((previous) => [
      ...previous,
      {
        id: Date.now(),
        text: trimmedMessage,
        time: "Now",
        sender: "me",
      },
    ]);

    setMessage("");
  };

  return (
    <div className="fixed inset-y-0 right-0 z-50 flex w-full max-w-[440px] border-l border-gray-200 bg-white shadow-xl">
      {/* Chat conversation */}
      <section className="flex min-w-0 flex-1 flex-col bg-white">
        <header className="flex h-[62px] shrink-0 items-center justify-between border-b border-gray-100 px-4">
          <div className="min-w-0">
            <h2 className="text-sm font-semibold text-gray-700">Chat</h2>
            <p className="truncate text-xs text-gray-400">
              {activeContact.name}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Chat options"
              className="rounded-lg p-2 text-gray-400 hover:bg-gray-100"
            >
              <MoreHorizontal size={18} />
            </button>

            <button
              type="button"
              onClick={onClose}
              aria-label="Close chat"
              className="rounded-lg p-2 text-gray-500 hover:bg-gray-100"
            >
              <X size={18} />
            </button>
          </div>
        </header>

        <div className="flex-1 space-y-4 overflow-y-auto px-3 py-4">
          {messages.map((item) => (
            <div key={item.id}>
              <div
                className={`flex items-end gap-2 ${
                  item.sender === "me" ? "justify-end" : "justify-start"
                }`}
              >
                {item.sender === "other" && (
                  <img
                    src={profile}
                    alt=""
                    className="h-6 w-6 shrink-0 rounded-full object-cover"
                  />
                )}

                <div
                  className={`max-w-[84%] rounded-xl px-3 py-2 text-[11px] leading-[17px] ${
                    item.sender === "me"
                      ? "rounded-br-sm bg-green-600 text-white"
                      : "rounded-bl-sm bg-gray-100 text-gray-600"
                  }`}
                >
                  {item.text}
                </div>

                {item.sender === "me" && (
                  <img
                    src={profile}
                    alt=""
                    className="h-6 w-6 shrink-0 rounded-full object-cover"
                  />
                )}
              </div>

              <p
                className={`mt-1 text-[9px] text-gray-400 ${
                  item.sender === "me" ? "text-right pr-8" : "pl-8"
                }`}
              >
                {item.time}
              </p>
            </div>
          ))}

          <div className="flex items-center gap-2 py-2">
            <span className="h-px flex-1 bg-gray-100" />
            <span className="text-[9px] text-gray-400">MONDAY</span>
            <span className="h-px flex-1 bg-gray-100" />
          </div>

          <div ref={messagesEndRef} />
        </div>

        <form
          onSubmit={handleSend}
          className="flex shrink-0 items-center gap-1.5 border-t border-gray-100 px-2 py-2"
        >
          <button
            type="button"
            aria-label="Attach file"
            className="shrink-0 rounded-md p-1.5 text-gray-400 hover:bg-gray-50"
          >
            <Paperclip size={15} />
          </button>

          <input
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Type a message"
            className="min-w-0 flex-1 bg-transparent py-2 text-[11px] text-gray-700 outline-none placeholder:text-gray-400"
          />

          <button
            type="button"
            aria-label="Emoji"
            className="shrink-0 rounded-md p-1.5 text-gray-400 hover:bg-gray-50"
          >
            <Smile size={15} />
          </button>

          <button
            type="submit"
            aria-label="Send message"
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-600 text-white transition hover:bg-green-700"
          >
            <Send size={13} />
          </button>
        </form>
      </section>

      {/* Contact avatars on the right, matching the Figma layout */}
      <aside className="flex w-[48px] shrink-0 flex-col items-center gap-3 border-l border-gray-100 bg-white py-4">
        {contacts.map((contact) => (
          <button
            key={contact.id}
            type="button"
            title={contact.name}
            aria-label={`Open chat with ${contact.name}`}
            onClick={() => setActiveContact(contact)}
            className={`relative rounded-full p-0.5 transition ${
              activeContact.id === contact.id
                ? "ring-2 ring-green-500 ring-offset-1"
                : "hover:ring-2 hover:ring-green-200"
            }`}
          >
            <img
              src={profile}
              alt=""
              className="h-7 w-7 rounded-full object-cover"
            />

            {contact.unread > 0 && (
              <span className="absolute -right-1 -top-1 flex h-3.5 min-w-3.5 items-center justify-center rounded-full bg-red-500 px-0.5 text-[8px] font-semibold text-white">
                {contact.unread}
              </span>
            )}
          </button>
        ))}

        <button
          type="button"
          aria-label="Add contact"
          className="mt-1 flex h-7 w-7 items-center justify-center rounded-full border border-dashed border-green-300 text-green-600 hover:bg-green-50"
        >
          <Plus size={15} />
        </button>
      </aside>
    </div>
  );
}

export default ChatPanel;

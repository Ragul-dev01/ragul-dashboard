
import { useState } from "react";
import {
  LayoutDashboard,
  ShoppingCart,
  CalendarDays,
  Mail,
  MessageSquare,
  ClipboardList,
  Layers,
  Folder,
  FileText,
  CreditCard,
  CircleUserRound,
  Settings,
  Search,
  Bell,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Plus,
  MoreVertical,
  MoreHorizontal,
  Download,
  ArrowUp,
  ArrowDown,
  X,
  Check,
  Utensils,
  Heart,
  Dumbbell,
  Plane,
  BriefcaseBusiness,
  Wallet,
  TrendingUp,
  Menu,
} from "lucide-react";
import profileImage from "../assets/profile.png";

const initialTransactions = [
  { name: "Devon Williamson", time: "08:00 AM", date: "19 August", amount: "+$1,400", type: "Payment", positive: true },
  { name: "Debra Wilson", time: "09:45 AM", date: "19 August", amount: "-$850", type: "Refund", positive: false },
  { name: "Judith Black", time: "10:15 AM", date: "20 August", amount: "+$2,050", type: "Payment", positive: true },
  { name: "Philip Henry", time: "10:50 AM", date: "23 August", amount: "+$650", type: "Payment", positive: true },
  { name: "Mitchell Cooper", time: "12:45 AM", date: "25 August", amount: "+$900", type: "Payment", positive: true },
];

const initialPayments = [
  { name: "Shopping", date: "08:00 AM — 19 August", amount: "-$1,400", icon: ShoppingCart, color: "bg-teal-400" },
  { name: "Travel", date: "09:45 AM — 21 August", amount: "-$850", icon: Plane, color: "bg-violet-500" },
  { name: "Food", date: "10:15 AM — 24 August", amount: "-$2,150", icon: Utensils, color: "bg-amber-400" },
  { name: "Medicine", date: "10:50 AM — 24 August", amount: "-$650", icon: Heart, color: "bg-rose-400" },
  { name: "Sport", date: "12:45 AM — 28 August", amount: "+$900", icon: Dumbbell, color: "bg-green-600" },
];

const initialContacts = [
  { name: "Ronald Robertson", role: "Product Designer" },
  { name: "Regina Cooper", role: "Project Manager" },
  { name: "Judith Black", role: "Business Analyst" },
  { name: "Dustin Williamson", role: "Web Developer" },
  { name: "Calvin Flores", role: "Senior Vice President" },
  { name: "Robert Edwards", role: "Business Analyst" },
];

const initialCards = [
  { holder: "Felicia Brown", number: "8854", balance: "80,700.00", expiry: "12/19", color: "from-green-700 to-emerald-500" },
  { holder: "Felicia Brown", number: "2251", balance: "30,500.00", expiry: "08/27", color: "from-teal-500 to-emerald-300" },
];

function Card({ children, className = "" }) {
  return (
    <section className={`min-w-0 rounded-lg border border-gray-100 bg-white p-4 shadow-sm ${className}`}>
      {children}
    </section>
  );
}

function SectionTitle({ children, action }) {
  return (
    <div className="mb-4 flex items-center justify-between gap-3">
      <h2 className="text-base font-semibold text-gray-700">{children}</h2>
      {action}
    </div>
  );
}

function AddButton({ onClick, label }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      title={label}
      className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-100 text-gray-500 transition hover:bg-emerald-50 hover:text-green-700"
    >
      <Plus size={17} />
    </button>
  );
}

function Avatar({ name, size = "h-9 w-9" }) {
  return (
    <img
      src={profileImage}
      alt={name}
      className={`${size} shrink-0 rounded-full border border-gray-100 object-cover`}
    />
  );
}

function StatCard({ title, amount, icon: Icon, green = false }) {
  return (
    <div className={`flex min-h-[124px] flex-col justify-between rounded-lg p-4 ${green ? "bg-green-700 text-white" : "bg-gray-50 text-gray-700"}`}>
      <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${green ? "bg-white text-green-700" : "bg-teal-50 text-teal-500"}`}>
        <Icon size={18} />
      </div>
      <div>
        <p className={`text-sm ${green ? "text-green-100" : "text-gray-500"}`}>{title}</p>
        <p className="mt-1 text-xl font-semibold">{amount}</p>
      </div>
      <div className={`h-1.5 overflow-hidden rounded-full ${green ? "bg-white/20" : "bg-gray-200"}`}>
        <div className={`h-full w-3/4 rounded-full ${green ? "bg-white/80" : "bg-teal-400"}`} />
      </div>
    </div>
  );
}

function BalanceChart() {
  const points = [
    [0, 124], [45, 78], [90, 70], [135, 48],
    [180, 60], [225, 96], [270, 126], [315, 48], [360, 72],
  ];
  const line = points.map((point) => point.join(",")).join(" ");
  const area = `0,170 ${line} 360,170`;

  return (
    <div className="mt-5">
      <div className="mb-3 flex justify-between text-[10px] text-gray-400">
        <span>10K</span><span>5K</span><span>2K</span><span>1K</span><span>0</span>
      </div>
      <svg viewBox="0 0 360 190" className="w-full" role="img" aria-label="Weekly balance trend chart">
        {[30, 65, 100, 135, 170].map((y) => (
          <line key={y} x1="0" y1={y} x2="360" y2={y} stroke="#edf0f1" strokeWidth="1" />
        ))}
        <polygon points={area} fill="#159947" opacity="0.08" />
        <polyline points={line} fill="none" stroke="#159947" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        {points.slice(1, -1).map(([x, y], index) => (
          <circle key={index} cx={x} cy={y} r="3" fill="#159947" stroke="white" strokeWidth="1.5" />
        ))}
      </svg>
      <div className="grid grid-cols-7 text-center text-[10px] text-gray-400">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => <span key={day}>{day}</span>)}
      </div>
    </div>
  );
}

function BalancePanel() {
  return (
    <Card>
      <SectionTitle
        action={
          <button type="button" className="flex items-center gap-2 rounded-md border border-gray-100 px-3 py-2 text-[11px] text-gray-500">
            <CalendarDays size={13} /> 19 Aug – 25 Aug <ChevronDown size={12} />
          </button>
        }
      >
        Balance
      </SectionTitle>
      <div className="flex flex-wrap gap-6">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-50 text-green-600"><ArrowUp size={17} /></div>
          <div><p className="text-sm font-medium text-gray-700">24,500</p><p className="text-[11px] text-gray-400">Income</p></div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-50 text-teal-500"><ArrowDown size={17} /></div>
          <div><p className="text-sm font-medium text-gray-700">9,400</p><p className="text-[11px] text-gray-400">Spending</p></div>
        </div>
      </div>
      <BalanceChart />
    </Card>
  );
}

function Transactions({ items }) {
  return (
    <Card>
      <SectionTitle action={<button type="button" aria-label="Transaction options" className="text-gray-400"><MoreHorizontal size={19} /></button>}>
        Transactions
      </SectionTitle>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={`${item.name}-${index}`} className="flex items-center gap-3">
            <Avatar name={item.name} size="h-8 w-8" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-medium text-gray-700">{item.name}</p>
              <p className="mt-1 text-[10px] text-gray-400">{item.time} — {item.date}</p>
            </div>
            <div className="text-right">
              <p className={`text-xs font-medium ${item.positive ? "text-green-500" : "text-rose-400"}`}>{item.amount}</p>
              <p className="text-[10px] text-gray-400">{item.type}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}

function Payments({ items }) {
  return (
    <Card>
      <SectionTitle action={<button type="button" aria-label="Payment options" className="text-gray-400"><MoreHorizontal size={19} /></button>}>
        Payments
      </SectionTitle>
      <div className="space-y-4">
        {items.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={`${item.name}-${index}`} className="flex items-center gap-3">
              <div className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white ${item.color}`}>
                <Icon size={17} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium text-gray-700">{item.name}</p>
                <p className="mt-1 text-[10px] text-gray-400">{item.date}</p>
              </div>
              <span className="whitespace-nowrap text-[11px] font-medium text-gray-600">{item.amount}</span>
            </div>
          );
        })}
      </div>
    </Card>
  );
}

function BankCard({ card }) {
  return (
    <div className={`relative h-[154px] min-w-[225px] overflow-hidden rounded-xl bg-gradient-to-br ${card.color} p-4 text-white`}>
      <div className="absolute -bottom-16 -right-10 h-44 w-44 rounded-full bg-teal-300/50" />
      <div className="absolute -bottom-20 right-5 h-36 w-36 rounded-full bg-emerald-200/25" />
      <div className="relative flex h-full flex-col justify-between">
        <div className="flex justify-between gap-3">
          <div><p className="text-[10px] text-white/80">Current Balance</p><p className="text-lg font-semibold">{card.balance}</p></div>
          <span className="text-sm font-black italic">VISA</span>
        </div>
        <div className="flex items-end justify-between gap-3">
          <div><p className="text-[10px] text-white/80">{card.holder}</p><p className="mt-1 text-xs tracking-widest">•••• •••• •••• {card.number}</p></div>
          <span className="text-[10px]">{card.expiry}</span>
        </div>
      </div>
    </div>
  );
}

function CardsPanel({ cards, onAdd }) {
  return (
    <section>
      <SectionTitle action={<AddButton onClick={onAdd} label="Add card" />}>Cards</SectionTitle>
      <div className="flex gap-3 overflow-x-auto pb-2">
        {cards.map((card, index) => <BankCard key={`${card.number}-${index}`} card={card} />)}
      </div>
      <div className="mt-2 flex gap-1.5">
        <span className="h-1.5 w-3 rounded-full bg-green-700" />
        <span className="h-1.5 w-1.5 rounded-full bg-gray-200" />
        <span className="h-1.5 w-1.5 rounded-full bg-gray-200" />
      </div>
    </section>
  );
}

function ContactsPanel({ contacts, onAdd }) {
  return (
    <section>
      <SectionTitle action={<AddButton onClick={onAdd} label="Add contact" />}>Contacts</SectionTitle>
      <div className="space-y-4">
        {contacts.map((contact, index) => (
          <div key={`${contact.email || contact.name}-${index}`} className="flex items-center gap-3">
            <Avatar name={contact.name} size="h-8 w-8" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-medium text-gray-700">{contact.name}</p>
              <p className="mt-0.5 truncate text-[10px] text-gray-400">{contact.role}</p>
            </div>
            <button type="button" aria-label={`Options for ${contact.name}`} className="text-gray-400 hover:text-gray-700"><MoreVertical size={17} /></button>
          </div>
        ))}
      </div>
    </section>
  );
}

function Modal({ title, onClose, children }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-900/30 p-4 backdrop-blur-[1px]"
      onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}
    >
      <div role="dialog" aria-modal="true" aria-label={title} className="max-h-[90vh] w-full max-w-[440px] overflow-y-auto rounded-xl bg-white p-6 shadow-2xl">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-700">{title}</h2>
          <button type="button" onClick={onClose} aria-label="Close modal" className="rounded-md p-1 text-gray-400 hover:bg-gray-100"><X size={19} /></button>
        </div>
        {children}
      </div>
    </div>
  );
}

function FormField({ label, children }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs text-gray-500">{label}</span>
      {children}
    </label>
  );
}

const fieldClass = "w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm text-gray-700 outline-none transition placeholder:text-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-100";

function AddCardModal({ onClose, onSave }) {
  const [number, setNumber] = useState("");
  const [holder, setHolder] = useState("");
  const [month, setMonth] = useState("12");
  const [year, setYear] = useState("2027");

  function submit(event) {
    event.preventDefault();
    onSave({ number: number.replace(/\s/g, "").slice(-4) || "9843", holder, balance: "0.00", expiry: `${month}/${year.slice(-2)}`, color: "from-green-700 to-emerald-500" });
  }

  return (
    <Modal title="Add Card" onClose={onClose}>
      <form onSubmit={submit} className="space-y-5">
        <FormField label="Card Number">
          <input required value={number} onChange={(event) => setNumber(event.target.value)} placeholder="5890 - 6858 - 6332 - 9843" className={fieldClass} inputMode="numeric" maxLength={23} />
        </FormField>
        <FormField label="Card Holder">
          <input required value={holder} onChange={(event) => setHolder(event.target.value)} placeholder="Regina Cooper" className={fieldClass} />
        </FormField>
        <div className="grid grid-cols-2 gap-4">
          <FormField label="Month">
            <select value={month} onChange={(event) => setMonth(event.target.value)} className={fieldClass}>
              {Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, "0")).map((m) => <option key={m}>{m}</option>)}
            </select>
          </FormField>
          <FormField label="Year">
            <select value={year} onChange={(event) => setYear(event.target.value)} className={fieldClass}>
              {Array.from({ length: 10 }, (_, i) => String(2026 + i)).map((y) => <option key={y}>{y}</option>)}
            </select>
          </FormField>
        </div>
        <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-lg bg-green-700 py-3 text-sm font-medium text-white transition hover:bg-green-800">
          <Plus size={16} /> Add Card
        </button>
      </form>
    </Modal>
  );
}

function AddContactModal({ onClose, onSave }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [role, setRole] = useState("");

  function submit(event) {
    event.preventDefault();
    onSave({ name: `${firstName.trim()} ${lastName.trim()}`.trim(), email, phone, role: role || "Contact" });
  }

  return (
    <Modal title="Add Contact" onClose={onClose}>
      <form onSubmit={submit} className="space-y-4">
        <div className="mb-5 flex justify-center">
          <div className="relative">
            <Avatar name="New contact" size="h-20 w-20" />
            <span className="absolute inset-0 rounded-full border-2 border-dashed border-gray-300" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <FormField label="First Name">
            <input required value={firstName} onChange={(event) => setFirstName(event.target.value)} placeholder="Regina" className={fieldClass} />
          </FormField>
          <FormField label="Last Name">
            <input required value={lastName} onChange={(event) => setLastName(event.target.value)} placeholder="Cooper" className={fieldClass} />
          </FormField>
        </div>
        <FormField label="Email">
          <input required type="email" value={email} onChange={(event) => setEmail(event.target.value)} placeholder="regina_cooper@mail.com" className={fieldClass} />
        </FormField>
        <FormField label="Phone">
          <input value={phone} onChange={(event) => setPhone(event.target.value)} placeholder="+1  (070) 4567-8800" className={fieldClass} />
        </FormField>
        <FormField label="Job Title">
          <input value={role} onChange={(event) => setRole(event.target.value)} placeholder="Project Manager" className={fieldClass} />
        </FormField>
        <button type="submit" className="flex w-full items-center justify-center gap-2 rounded-lg bg-green-700 py-3 text-sm font-medium text-white transition hover:bg-green-800">
          <Check size={16} /> Add Contact
        </button>
      </form>
    </Modal>
  );
}

export default function FinanceDashboard() {
  const [modal, setModal] = useState(null);
  const [cards, setCards] = useState(initialCards);
  const [contacts, setContacts] = useState(initialContacts);
  const [transactions] = useState(initialTransactions);
  const [payments] = useState(initialPayments);
  const [search, setSearch] = useState("");
  const [period, setPeriod] = useState("Last 7 days");

  const filteredContacts = contacts.filter((contact) =>
    `${contact.name} ${contact.role} ${contact.email || ""}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-full bg-gray-50 text-gray-700">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="mb-1 text-xs text-gray-400">Dashboard / Finance</p>
          <h1 className="text-2xl font-semibold text-gray-800">Overview</h1>
        </div>
        <div className="flex items-center gap-2">
          <button type="button" className="flex h-10 w-10 items-center justify-center rounded-lg border border-gray-100 bg-white text-gray-500 hover:bg-gray-50" aria-label="Download report"><Download size={17} /></button>
          <select aria-label="Date range" value={period} onChange={(event) => setPeriod(event.target.value)} className="rounded-lg border border-gray-100 bg-white px-3 py-3 text-xs text-gray-600 outline-none">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 items-start gap-5 2xl:grid-cols-[minmax(0,1fr)_minmax(280px,340px)]">
        <div className="min-w-0 space-y-5">
          <div className="grid grid-cols-1 gap-5 lg:grid-cols-[108px_minmax(0,1fr)]">
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <StatCard title="Income" amount="$5,750" icon={ArrowUp} green />
              <StatCard title="Spent" amount="$2,400" icon={ArrowDown} />
            </div>
            <BalancePanel />
          </div>

          <div className="grid grid-cols-1 gap-5 xl:grid-cols-2">
            <Transactions items={transactions} />
            <Payments items={payments} />
          </div>
        </div>

        <aside className="min-w-0 rounded-lg bg-white p-5 shadow-sm">
          <div className="mb-7 flex items-center gap-3">
            <Avatar name="ArtTemplate" size="h-10 w-10" />
            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold text-gray-700">ArtTemplate</p>
              <p className="truncate text-[11px] text-gray-400">example@mail.com</p>
            </div>
            <button type="button" aria-label="Settings" className="text-gray-400 hover:text-gray-700"><Settings size={18} /></button>
          </div>

          <CardsPanel cards={cards} onAdd={() => setModal("card")} />

          <div className="my-7 border-t border-gray-100" />

          <div className="mb-4 flex items-center justify-between gap-3">
            <h2 className="text-xl font-semibold text-gray-700">Contacts</h2>
            <AddButton onClick={() => setModal("contact")} label="Add contact" />
          </div>
          <div className="mb-4 flex items-center gap-2 rounded-lg bg-gray-50 px-3 py-2">
            <Search size={15} className="shrink-0 text-gray-400" />
            <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search contacts" className="w-full bg-transparent text-xs outline-none placeholder:text-gray-400" />
          </div>
          <div className="space-y-4">
            {filteredContacts.map((contact, index) => (
              <div key={`${contact.email || contact.name}-${index}`} className="flex items-center gap-3">
                <Avatar name={contact.name} size="h-8 w-8" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-xs font-medium text-gray-700">{contact.name}</p>
                  <p className="mt-0.5 truncate text-[10px] text-gray-400">{contact.role}</p>
                </div>
                <button type="button" aria-label={`More options for ${contact.name}`} className="text-gray-400 hover:text-gray-700"><MoreVertical size={16} /></button>
              </div>
            ))}
            {filteredContacts.length === 0 && <p className="py-4 text-center text-xs text-gray-400">No contacts found.</p>}
          </div>
        </aside>
      </div>

      {modal === "card" && (
        <AddCardModal
          onClose={() => setModal(null)}
          onSave={(card) => { setCards((previous) => [...previous, card]); setModal(null); }}
        />
      )}
      {modal === "contact" && (
        <AddContactModal
          onClose={() => setModal(null)}
          onSave={(contact) => { setContacts((previous) => [...previous, contact]); setModal(null); }}
        />
      )}
    </div>
  );
}

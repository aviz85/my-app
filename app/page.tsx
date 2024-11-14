import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, Twitter } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute right-1/2 top-0 -z-10 h-[310px] w-[310px] translate-x-1/2 rounded-full bg-primary/20 opacity-20 blur-[100px]" />
      </div>

      <main className="relative">
        {/* Hero Section */}
        <section className="container px-4 py-24 md:py-32 lg:py-40">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-heebo bg-gradient-to-l from-primary to-secondary bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-6xl">
              מגדירים מחדש
              <br />
              את העתיד
            </h1>
            <p className="font-heebo mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              פלטפורמה חדשנית המשלבת טכנולוגיות מתקדמות עם חוויית משתמש יוצאת דופן
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button size="lg" className="font-heebo group">
                התחל עכשיו
                <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="font-heebo">
                גלה עוד
              </Button>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container px-4 py-24">
          <div className="grid gap-6 lg:grid-cols-3 items-center">
            {features.map((feature, i) => (
              <div 
                key={feature.title} 
                className="group relative overflow-hidden rounded-xl border p-6 hover:border-primary transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20 backdrop-blur-sm"
                style={{ 
                  animationDelay: `${i * 100}ms`,
                  animation: 'fade-up 0.5s ease-out forwards',
                  opacity: 0 
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-l from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative space-y-2">
                  <h3 className="text-2xl font-bold font-heebo">{feature.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 font-heebo">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="relative overflow-hidden px-6 py-4">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
        <div className="relative flex items-center justify-between">
          <p className="text-sm text-gray-500 font-heebo">© 2024 כל הזכויות שמורות</p>
          <div className="flex items-center space-x-reverse space-x-4">
            <Button variant="ghost" size="icon" className="hover:bg-primary/20 transition-colors">
              <Github />
            </Button>
            <Button variant="ghost" size="icon" className="hover:bg-primary/20 transition-colors">
              <Twitter />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}

const features = [
  {
    title: "חדשנות טכנולוגית",
    description: "פתרונות מתקדמים המותאמים לצרכים העסקיים שלך"
  },
  {
    title: "ממשק משתמש מתקדם",
    description: "חווית משתמש אינטואיטיבית ועיצוב מודרני"
  },
  {
    title: "אבטחה ללא פשרות",
    description: "הגנה מקיפה על המידע והפרטיות שלך"
  }
];

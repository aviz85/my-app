"use client"

import { Button } from "@/components/ui/button";
import { ArrowLeft, Github, Twitter } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex min-h-screen flex-col">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-gray-950">
        <div className="absolute h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-primary/20 opacity-20 blur-[100px]" />
      </div>

      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary animate-fade-down">
                  בונים את העתיד
                  <span className="block">ביחד</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 animate-fade-up">
                  פלטפורמה חדשנית המשלבת טכנולוגיות מתקדמות עם חוויית משתמש יוצאת דופן
                </p>
              </div>
              <div className="space-x-4 relative">
                <Button 
                  className="h-11 px-8 bg-primary relative overflow-hidden group"
                  onClick={() => router.push('/auth')}
                >
                  <div className="absolute inset-0 w-full h-full transition-all duration-300 scale-0 group-hover:scale-100 group-hover:bg-white/30 rounded-lg" />
                  התחל עכשיו
                  <ArrowLeft className="mr-2" />
                </Button>
                <Button variant="outline" className="h-11 px-8 backdrop-blur-sm">
                  למד עוד
                </Button>
              </div>
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

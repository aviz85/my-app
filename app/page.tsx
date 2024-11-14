import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Twitter } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                  בונים את העתיד
                  <span className="text-primary">ביחד</span>
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  פלטפורמה חדשנית המשלבת טכנולוגיות מתקדמות עם חוויית משתמש יוצאת דופן
                </p>
              </div>
              <div className="space-x-4">
                <Button className="h-11 px-8">
                  התחל עכשיו
                  <ArrowRight className="mr-2" />
                </Button>
                <Button variant="outline" className="h-11 px-8">
                  למד עוד
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-3 items-center">
              {features.map((feature) => (
                <div key={feature.title} className="group relative overflow-hidden rounded-lg border p-6 hover:border-primary transition-colors">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold">{feature.title}</h3>
                    <p className="text-gray-500 dark:text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <footer className="flex items-center justify-between px-6 py-4 bg-background">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Github />
          </Button>
          <Button variant="ghost" size="icon">
            <Twitter />
          </Button>
        </div>
        <p className="text-sm text-gray-500">© 2024 כל הזכויות שמורות</p>
      </footer>
    </div>
  );
}

const features = [
  {
    title: "ביצועים מהירים",
    description: "אופטימיזציה מלאה לחוויית משתמש מהירה וחלקה"
  },
  {
    title: "עיצוב מודרני",
    description: "ממשק משתמש נקי ואינטואיטיבי בסטנדרטים הגבוהים ביותר"
  },
  {
    title: "אבטחה מתקדמת",
    description: "הגנה מקיפה על המידע והפרטיות שלך"
  }
];

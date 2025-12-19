import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [testAnswers, setTestAnswers] = useState<Record<string, string>>({});
  const [testSubmitted, setTestSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const { toast } = useToast();

  const correctAnswers = {
    q1: "a",
    q2: "b",
    q3: "c",
  };

  const handleTestSubmit = () => {
    let correctCount = 0;
    Object.keys(correctAnswers).forEach((key) => {
      if (testAnswers[key] === correctAnswers[key as keyof typeof correctAnswers]) {
        correctCount++;
      }
    });
    setScore((correctCount / Object.keys(correctAnswers).length) * 100);
    setTestSubmitted(true);
    toast({
      title: "Тест завершён!",
      description: `Ваш результат: ${correctCount} из ${Object.keys(correctAnswers).length}`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/20 to-accent/20">
      <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-lg border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">АООП — Методология</h1>
            <div className="hidden md:flex gap-2">
              <Button
                variant={activeSection === "home" ? "default" : "ghost"}
                onClick={() => setActiveSection("home")}
                className="transition-all"
              >
                <Icon name="Home" className="mr-2 h-4 w-4" />
                Главная
              </Button>
              <Button
                variant={activeSection === "theory" ? "default" : "ghost"}
                onClick={() => setActiveSection("theory")}
              >
                <Icon name="BookOpen" className="mr-2 h-4 w-4" />
                Теория
              </Button>
              <Button
                variant={activeSection === "methodology" ? "default" : "ghost"}
                onClick={() => setActiveSection("methodology")}
              >
                <Icon name="Compass" className="mr-2 h-4 w-4" />
                Методология
              </Button>
              <Button
                variant={activeSection === "legal" ? "default" : "ghost"}
                onClick={() => setActiveSection("legal")}
              >
                <Icon name="Scale" className="mr-2 h-4 w-4" />
                НПБ
              </Button>
              <Button
                variant={activeSection === "cases" ? "default" : "ghost"}
                onClick={() => setActiveSection("cases")}
              >
                <Icon name="FileText" className="mr-2 h-4 w-4" />
                Примеры
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        {activeSection === "home" && (
          <div className="space-y-12 animate-fade-in">
            <section className="text-center space-y-4 py-16">
              <Badge className="mb-4" variant="secondary">
                Образовательный портал
              </Badge>
              <h2 className="text-5xl font-bold tracking-tight">
                Адаптированная основная <br />
                общеобразовательная программа
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Полное руководство по нормативно-правовому базису и методологии проектирования АООП
              </p>
              <div className="flex gap-4 justify-center pt-6">
                <Button size="lg" onClick={() => setActiveSection("theory")}>
                  Начать обучение
                  <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => setActiveSection("legal")}>
                  Нормативная база
                </Button>
              </div>
            </section>

            <section className="grid md:grid-cols-3 gap-6">
              <Card className="hover-scale border-primary/20 hover:border-primary/40 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name="GraduationCap" className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>Теоретическая база</CardTitle>
                  <CardDescription>
                    Основные понятия и концепции адаптированных образовательных программ
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover-scale border-secondary/40 hover:border-secondary transition-all">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-secondary/30 flex items-center justify-center mb-4">
                    <Icon name="Lightbulb" className="h-6 w-6 text-secondary-foreground" />
                  </div>
                  <CardTitle>Методология</CardTitle>
                  <CardDescription>
                    Пошаговое руководство по разработке и внедрению АООП
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover-scale border-accent/40 hover:border-accent transition-all">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-accent/30 flex items-center justify-center mb-4">
                    <Icon name="CheckCircle" className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <CardTitle>Практика</CardTitle>
                  <CardDescription>
                    Реальные кейсы и тестовые задания для закрепления знаний
                  </CardDescription>
                </CardHeader>
              </Card>
            </section>
          </div>
        )}

        {activeSection === "theory" && (
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <div className="text-center space-y-4 mb-12">
              <Badge variant="outline">Раздел 1</Badge>
              <h2 className="text-4xl font-bold">Теоретические основы АООП</h2>
              <p className="text-muted-foreground">
                Изучите ключевые понятия и концепции адаптированных образовательных программ
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold">1</span>
                    </div>
                    Что такое АООП?
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6 text-base leading-relaxed">
                  <p className="mb-4">
                    <strong>АООП (Адаптированная основная общеобразовательная программа)</strong> — это образовательная
                    программа, адаптированная для обучения лиц с ограниченными возможностями здоровья (ОВЗ) с учётом
                    особенностей их психофизического развития, индивидуальных возможностей и состояния здоровья.
                  </p>
                  <p>
                    АООП обеспечивает коррекцию нарушений развития и социальную адаптацию обучающихся с ОВЗ в условиях
                    инклюзивного или специального образования.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold">2</span>
                    </div>
                    Структура АООП
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6 text-base leading-relaxed">
                  <p className="mb-4">АООП включает три основных раздела:</p>
                  <ul className="space-y-2 ml-6 list-disc">
                    <li>
                      <strong>Целевой раздел:</strong> пояснительная записка, планируемые результаты освоения программы,
                      система оценки достижений
                    </li>
                    <li>
                      <strong>Содержательный раздел:</strong> программы отдельных учебных предметов, коррекционная
                      программа, программа воспитания
                    </li>
                    <li>
                      <strong>Организационный раздел:</strong> учебный план, календарный график, система условий реализации
                    </li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold">3</span>
                    </div>
                    Категории обучающихся
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6 text-base leading-relaxed">
                  <p className="mb-4">АООП разрабатывается для следующих категорий обучающихся с ОВЗ:</p>
                  <div className="grid grid-cols-2 gap-3">
                    <Badge variant="secondary">Глухие дети</Badge>
                    <Badge variant="secondary">Слабослышащие</Badge>
                    <Badge variant="secondary">Слепые дети</Badge>
                    <Badge variant="secondary">Слабовидящие</Badge>
                    <Badge variant="secondary">С нарушениями речи</Badge>
                    <Badge variant="secondary">С НОДА</Badge>
                    <Badge variant="secondary">С ЗПР</Badge>
                    <Badge variant="secondary">С РАС</Badge>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-bold">4</span>
                    </div>
                    Принципы разработки
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-4 pb-6 text-base leading-relaxed">
                  <ul className="space-y-3 ml-6 list-disc">
                    <li>Индивидуализация и дифференциация</li>
                    <li>Коррекционная направленность</li>
                    <li>Практическая ориентация</li>
                    <li>Комплексный подход</li>
                    <li>Преемственность уровней образования</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            <Card className="bg-accent/20 border-accent">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Sparkles" className="h-5 w-5" />
                  Интерактивный тест
                </CardTitle>
                <CardDescription>Проверьте усвоение материала по теоретическому разделу</CardDescription>
              </CardHeader>
              <CardContent>
                <Button onClick={() => setActiveSection("test")} className="w-full" size="lg">
                  Пройти тестирование
                  <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === "methodology" && (
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <div className="text-center space-y-4 mb-12">
              <Badge variant="outline">Раздел 2</Badge>
              <h2 className="text-4xl font-bold">Методология проектирования АООП</h2>
              <p className="text-muted-foreground">Пошаговое руководство по разработке адаптированной программы</p>
            </div>

            <div className="space-y-6">
              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <CardTitle className="mb-2">Подготовительный этап</CardTitle>
                      <CardDescription className="text-base">
                        <ul className="space-y-2 mt-3">
                          <li>✓ Анализ нормативно-правовой базы</li>
                          <li>✓ Изучение примерных АООП</li>
                          <li>✓ Формирование рабочей группы</li>
                          <li>✓ Определение категории обучающихся</li>
                        </ul>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="border-l-4 border-l-secondary">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <CardTitle className="mb-2">Проектирование целевого раздела</CardTitle>
                      <CardDescription className="text-base">
                        <ul className="space-y-2 mt-3">
                          <li>✓ Формулировка пояснительной записки</li>
                          <li>✓ Определение планируемых результатов</li>
                          <li>✓ Разработка системы оценки достижений</li>
                          <li>✓ Учёт особых образовательных потребностей</li>
                        </ul>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="border-l-4 border-l-accent">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <CardTitle className="mb-2">Разработка содержательного раздела</CardTitle>
                      <CardDescription className="text-base">
                        <ul className="space-y-2 mt-3">
                          <li>✓ Адаптация учебных программ</li>
                          <li>✓ Программа коррекционной работы</li>
                          <li>✓ Программа формирования УУД</li>
                          <li>✓ Программа воспитания и социализации</li>
                        </ul>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <CardTitle className="mb-2">Проектирование организационного раздела</CardTitle>
                      <CardDescription className="text-base">
                        <ul className="space-y-2 mt-3">
                          <li>✓ Составление учебного плана</li>
                          <li>✓ Календарный учебный график</li>
                          <li>✓ План внеурочной деятельности</li>
                          <li>✓ Система условий реализации</li>
                        </ul>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Card className="border-l-4 border-l-secondary">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold flex-shrink-0">
                      5
                    </div>
                    <div>
                      <CardTitle className="mb-2">Согласование и утверждение</CardTitle>
                      <CardDescription className="text-base">
                        <ul className="space-y-2 mt-3">
                          <li>✓ Экспертиза программы</li>
                          <li>✓ Обсуждение на педсовете</li>
                          <li>✓ Согласование с родителями</li>
                          <li>✓ Утверждение директором ОО</li>
                        </ul>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </div>

            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Download" className="h-5 w-5" />
                  Методические материалы
                </CardTitle>
                <CardDescription>Шаблоны и образцы документов для разработки АООП</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button variant="outline" className="w-full justify-start">
                  <Icon name="FileText" className="mr-2 h-4 w-4" />
                  Шаблон пояснительной записки
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Icon name="FileText" className="mr-2 h-4 w-4" />
                  Образец учебного плана
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Icon name="FileText" className="mr-2 h-4 w-4" />
                  Программа коррекционной работы
                </Button>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === "legal" && (
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <div className="text-center space-y-4 mb-12">
              <Badge variant="outline">Раздел 3</Badge>
              <h2 className="text-4xl font-bold">Нормативно-правовая база</h2>
              <p className="text-muted-foreground">Ключевые документы, регламентирующие разработку и реализацию АООП</p>
            </div>

            <Tabs defaultValue="federal" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="federal">Федеральные</TabsTrigger>
                <TabsTrigger value="regional">Региональные</TabsTrigger>
                <TabsTrigger value="local">Локальные</TabsTrigger>
              </TabsList>

              <TabsContent value="federal" className="space-y-4 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Icon name="Scale" className="h-5 w-5 text-primary" />
                      Федеральный закон № 273-ФЗ "Об образовании в РФ"
                    </CardTitle>
                    <CardDescription>
                      Базовый закон, определяющий правовые основы образования лиц с ОВЗ
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      <strong>Ст. 79:</strong> организация получения образования обучающимися с ОВЗ
                    </p>
                    <Badge>Редакция от 2023 г.</Badge>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Icon name="BookOpen" className="h-5 w-5 text-primary" />
                      ФГОС НОО обучающихся с ОВЗ
                    </CardTitle>
                    <CardDescription>Приказ Минобрнауки России от 19.12.2014 № 1598</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      Устанавливает требования к АООП НОО для детей с ОВЗ (8 вариантов программ)
                    </p>
                    <Badge>Действующая редакция</Badge>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Icon name="Users" className="h-5 w-5 text-primary" />
                      ФГОС образования обучающихся с умственной отсталостью
                    </CardTitle>
                    <CardDescription>Приказ Минобрнауки России от 19.12.2014 № 1599</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      Требования к АООП для обучающихся с интеллектуальными нарушениями
                    </p>
                    <Badge>Действующая редакция</Badge>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Icon name="ClipboardList" className="h-5 w-5 text-primary" />
                      СанПиН для образовательных организаций
                    </CardTitle>
                    <CardDescription>Санитарные нормы и правила</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                      Требования к условиям обучения детей с ОВЗ (помещения, оборудование, режим)
                    </p>
                    <Badge>СП 2.4.3648-20</Badge>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="regional" className="space-y-4 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Региональные законы об образовании</CardTitle>
                    <CardDescription>Дополняют федеральное законодательство</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Устанавливают особенности организации образования лиц с ОВЗ на территории субъекта РФ
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Методические рекомендации региональных органов</CardTitle>
                    <CardDescription>Практические материалы для образовательных организаций</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Рекомендации по разработке АООП с учётом региональной специфики
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="local" className="space-y-4 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Устав образовательной организации</CardTitle>
                    <CardDescription>Основной локальный нормативный акт</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Определяет правовой статус ОО, особенности образовательного процесса
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Положение о разработке АООП</CardTitle>
                    <CardDescription>Локальный акт образовательной организации</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Регламентирует порядок разработки, утверждения и внесения изменений в АООП
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Положение о ПМПК образовательной организации</CardTitle>
                    <CardDescription>Психолого-медико-педагогический консилиум</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Определяет порядок работы консилиума по сопровождению обучающихся с ОВЗ
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <Card className="bg-muted/50">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="AlertCircle" className="h-5 w-5" />
                  Важно знать
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p>
                  • АООП разрабатывается на основе примерных адаптированных программ, размещённых в реестре примерных
                  основных общеобразовательных программ
                </p>
                <p>• Программа должна учитывать рекомендации ПМПК и индивидуальную программу реабилитации</p>
                <p>• АООП утверждается ежегодно приказом директора образовательной организации</p>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === "cases" && (
          <div className="max-w-4xl mx-auto space-y-8 animate-fade-in">
            <div className="text-center space-y-4 mb-12">
              <Badge variant="outline">Раздел 4</Badge>
              <h2 className="text-4xl font-bold">Примеры и практические кейсы</h2>
              <p className="text-muted-foreground">Реальные ситуации разработки и внедрения АООП</p>
            </div>

            <div className="space-y-6">
              <Card className="overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-primary to-secondary"></div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <Badge>Кейс № 1</Badge>
                      <CardTitle>Разработка АООП для ребёнка с нарушением слуха</CardTitle>
                      <CardDescription>Начальная школа, вариант 2.2</CardDescription>
                    </div>
                    <Icon name="Headphones" className="h-8 w-8 text-primary" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Ситуация:</h4>
                    <p className="text-sm text-muted-foreground">
                      В первый класс общеобразовательной школы поступил ребёнок с двусторонней сенсоневральной тугоухостью
                      III степени. ПМПК рекомендовала обучение по варианту 2.2 АООП НОО.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Решение:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-4 list-disc">
                      <li>Разработана АООП НОО (вариант 2.2) сроком на 5 лет</li>
                      <li>Введены коррекционные курсы: развитие слухового восприятия, произношения</li>
                      <li>Адаптирован учебный материал с использованием визуальной поддержки</li>
                      <li>Создана звукоусиливающая аппаратура в классе</li>
                    </ul>
                  </div>
                  <div className="pt-2">
                    <Badge variant="secondary">Результат: успешная адаптация</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-accent to-primary"></div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <Badge>Кейс № 2</Badge>
                      <CardTitle>АООП для обучающегося с РАС</CardTitle>
                      <CardDescription>Расстройство аутистического спектра, вариант 8.3</CardDescription>
                    </div>
                    <Icon name="Heart" className="h-8 w-8 text-accent" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Ситуация:</h4>
                    <p className="text-sm text-muted-foreground">
                      Обучающийся с РАС и лёгкой умственной отсталостью нуждается в специальных условиях обучения с
                      пролонгацией сроков обучения.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Решение:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-4 list-disc">
                      <li>АООП разработана на 6 лет (пролонгированные сроки)</li>
                      <li>Введены специальные курсы: альтернативная коммуникация, сенсорное развитие</li>
                      <li>Организовано сопровождение тьютора</li>
                      <li>Разработаны визуальные расписания и карточки PECS</li>
                    </ul>
                  </div>
                  <div className="pt-2">
                    <Badge variant="secondary">Результат: стабильная динамика развития</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="h-2 bg-gradient-to-r from-secondary to-accent"></div>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="space-y-2">
                      <Badge>Кейс № 3</Badge>
                      <CardTitle>Адаптация программы для ребёнка с ЗПР</CardTitle>
                      <CardDescription>Задержка психического развития, вариант 7.1</CardDescription>
                    </div>
                    <Icon name="Brain" className="h-8 w-8 text-secondary" />
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Ситуация:</h4>
                    <p className="text-sm text-muted-foreground">
                      Ребёнок с ЗПР обучается в инклюзивном классе. Необходима адаптация образовательной программы без
                      изменения сроков обучения.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Решение:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-4 list-disc">
                      <li>АООП НОО (вариант 7.1) в условиях инклюзии</li>
                      <li>Коррекционные курсы во внеурочное время</li>
                      <li>Адаптация методов обучения: дополнительная визуализация, пошаговые инструкции</li>
                      <li>Индивидуальный график контрольных работ</li>
                    </ul>
                  </div>
                  <div className="pt-2">
                    <Badge variant="secondary">Результат: освоение программы в нормативные сроки</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Icon name="Target" className="h-5 w-5" />
                  Общие выводы из практики
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-sm">
                <p>
                  ✓ <strong>Индивидуальный подход:</strong> каждая АООП создаётся с учётом особенностей конкретного
                  ребёнка
                </p>
                <p>
                  ✓ <strong>Междисциплинарное взаимодействие:</strong> важна работа команды специалистов (учителя,
                  психолога, логопеда, дефектолога)
                </p>
                <p>
                  ✓ <strong>Гибкость программы:</strong> АООП должна корректироваться в зависимости от динамики развития
                  обучающегося
                </p>
                <p>
                  ✓ <strong>Сотрудничество с семьёй:</strong> активное участие родителей — ключ к успешной реализации
                  программы
                </p>
              </CardContent>
            </Card>
          </div>
        )}

        {activeSection === "test" && (
          <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
            <div className="text-center space-y-4 mb-8">
              <Badge variant="outline">Интерактивный модуль</Badge>
              <h2 className="text-4xl font-bold">Тестирование знаний</h2>
              <p className="text-muted-foreground">Проверьте, насколько хорошо вы усвоили материал</p>
              {!testSubmitted && (
                <Progress value={33} className="h-2" />
              )}
            </div>

            {!testSubmitted ? (
              <Card>
                <CardHeader>
                  <CardTitle>Тест по основам АООП</CardTitle>
                  <CardDescription>Выберите правильный вариант ответа для каждого вопроса</CardDescription>
                </CardHeader>
                <CardContent className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="font-semibold">1. Что означает аббревиатура АООП?</h3>
                    <RadioGroup value={testAnswers.q1} onValueChange={(val) => setTestAnswers({ ...testAnswers, q1: val })}>
                      <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                        <RadioGroupItem value="a" id="q1a" />
                        <Label htmlFor="q1a" className="flex-1 cursor-pointer">
                          Адаптированная основная общеобразовательная программа
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                        <RadioGroupItem value="b" id="q1b" />
                        <Label htmlFor="q1b" className="flex-1 cursor-pointer">
                          Альтернативная образовательная программа
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                        <RadioGroupItem value="c" id="q1c" />
                        <Label htmlFor="q1c" className="flex-1 cursor-pointer">
                          Авторская образовательная программа
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold">2. Сколько основных разделов включает АООП?</h3>
                    <RadioGroup value={testAnswers.q2} onValueChange={(val) => setTestAnswers({ ...testAnswers, q2: val })}>
                      <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                        <RadioGroupItem value="a" id="q2a" />
                        <Label htmlFor="q2a" className="flex-1 cursor-pointer">
                          Два раздела
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                        <RadioGroupItem value="b" id="q2b" />
                        <Label htmlFor="q2b" className="flex-1 cursor-pointer">
                          Три раздела
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                        <RadioGroupItem value="c" id="q2c" />
                        <Label htmlFor="q2c" className="flex-1 cursor-pointer">
                          Четыре раздела
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-semibold">3. Какой нормативный документ является базовым для АООП?</h3>
                    <RadioGroup value={testAnswers.q3} onValueChange={(val) => setTestAnswers({ ...testAnswers, q3: val })}>
                      <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                        <RadioGroupItem value="a" id="q3a" />
                        <Label htmlFor="q3a" className="flex-1 cursor-pointer">
                          Устав образовательной организации
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                        <RadioGroupItem value="b" id="q3b" />
                        <Label htmlFor="q3b" className="flex-1 cursor-pointer">
                          Региональный закон об образовании
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                        <RadioGroupItem value="c" id="q3c" />
                        <Label htmlFor="q3c" className="flex-1 cursor-pointer">
                          ФГОС НОО обучающихся с ОВЗ
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <Button
                    onClick={handleTestSubmit}
                    disabled={Object.keys(testAnswers).length < 3}
                    className="w-full"
                    size="lg"
                  >
                    Завершить тестирование
                    <Icon name="Check" className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card className="border-2">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon name="Trophy" className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="text-3xl">Тест завершён!</CardTitle>
                  <CardDescription className="text-lg">Ваш результат</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <div className="text-6xl font-bold text-primary mb-2">{Math.round(score)}%</div>
                    <Progress value={score} className="h-3 mb-4" />
                    <p className="text-muted-foreground">
                      {score === 100
                        ? "Отлично! Вы полностью освоили материал!"
                        : score >= 66
                        ? "Хороший результат! Рекомендуем повторить некоторые темы."
                        : "Рекомендуем ещё раз изучить материал теоретического раздела."}
                    </p>
                  </div>

                  <div className="space-y-2 pt-4">
                    <Button
                      onClick={() => {
                        setTestAnswers({});
                        setTestSubmitted(false);
                      }}
                      className="w-full"
                      variant="outline"
                    >
                      <Icon name="RotateCcw" className="mr-2 h-4 w-4" />
                      Пройти тест заново
                    </Button>
                    <Button onClick={() => setActiveSection("theory")} className="w-full">
                      <Icon name="BookOpen" className="mr-2 h-4 w-4" />
                      Вернуться к теории
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        )}
      </main>

      <footer className="border-t mt-20 py-8 bg-card/50">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>Образовательный портал по методологии проектирования АООП</p>
          <p className="mt-2">© 2024 • Все материалы носят информационный характер</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-20"></div>
      <div className="absolute inset-0 code-rain opacity-10"></div>

      <nav className="fixed top-0 left-0 right-0 z-50 bg-dark-card border-b border-neon-blue/20">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold font-mono text-neon-blue neon-text">
              {'<'}Программист{'/>'}
            </div>
            <div className="flex gap-6 font-mono text-sm">
              <button onClick={() => scrollToSection('hero')} className="hover:text-neon-blue transition-colors">
                Главная
              </button>
              <button onClick={() => scrollToSection('profession')} className="hover:text-neon-blue transition-colors">
                Профессия
              </button>
              <button onClick={() => scrollToSection('expectations')} className="hover:text-neon-blue transition-colors">
                Ожидания
              </button>
              <button onClick={() => scrollToSection('conclusion')} className="hover:text-neon-blue transition-colors">
                Заключение
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section id="hero" className="relative z-10 min-h-screen flex items-center justify-center p-8 pt-24">
        <div className="text-center animate-fade-in">
          <div className="mb-8 relative">
            <div className="text-7xl md:text-9xl font-bold font-mono glitch-text">
              {'>'} Программист
            </div>
          </div>
          <div className="text-3xl md:text-4xl text-neon-purple font-semibold mb-6 animate-pulse">
            Профессия будущего
          </div>
          <div className="text-xl text-gray-400 mb-12 font-mono">
            <span className="typing-effect">Создание цифрового мира</span>
          </div>
          <Button 
            onClick={() => scrollToSection('profession')}
            className="bg-neon-blue hover:bg-neon-blue/80 text-white px-8 py-6 text-lg rounded-lg shadow-neon-blue"
          >
            Узнать больше
            <Icon name="ChevronDown" size={20} className="ml-2" />
          </Button>
          <div className="flex gap-4 justify-center items-center text-sm text-gray-500 font-mono mt-8">
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-neon-blue rounded-full animate-pulse"></div>
              status: ready
            </span>
            <span>|</span>
            <span>version: 1.0.0</span>
          </div>
        </div>
      </section>

      <section id="profession" className="relative z-10 min-h-screen flex items-center justify-center p-8 py-24">
        <div className="max-w-6xl mx-auto w-full">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 font-mono text-neon-blue neon-text">
              Суть профессии
            </h2>
            <p className="text-2xl text-gray-400">Что делает программист</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: 'Code2', title: 'Разработка ПО', desc: 'Создание приложений и систем для решения реальных задач' },
              { icon: 'Bug', title: 'Отладка', desc: 'Поиск и исправление ошибок в коде' },
              { icon: 'Layers', title: 'Архитектура', desc: 'Проектирование надежных решений' },
              { icon: 'Users', title: 'Командная работа', desc: 'Совместная разработка в команде' }
            ].map((task, idx) => (
              <Card
                key={idx}
                className="bg-dark-card border-neon-purple/30 p-8 hover:border-neon-purple transition-all duration-300 hover:shadow-neon-purple hover-scale group animate-fade-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-4 bg-neon-purple/20 rounded-lg group-hover:bg-neon-purple/30 transition-colors">
                    <Icon name={task.icon} size={36} className="text-neon-purple" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-3 font-mono">{task.title}</h3>
                    <p className="text-gray-400 text-lg">{task.desc}</p>
                    <div className="mt-4 font-mono text-xs text-neon-blue opacity-50">
                      {'// '} task_{idx + 1}.execute()
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <div className="max-w-3xl mx-auto bg-dark-card border border-neon-blue/30 rounded-lg p-8">
              <h3 className="text-3xl font-bold mb-4 text-neon-blue">Почему я выбрал эту профессию?</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                Программирование открывает безграничные возможности для творчества и самореализации. 
                Это профессия, где можно создавать что-то новое каждый день, решать сложные задачи 
                и видеть результат своей работы. В современном мире IT-технологии определяют будущее, 
                и я хочу быть частью этого процесса.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="expectations" className="relative z-10 min-h-screen flex items-center justify-center p-8 py-24">
        <div className="max-w-5xl mx-auto w-full">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl md:text-7xl font-bold mb-6 font-mono text-neon-purple neon-text">
              Мои ожидания
            </h2>
            <p className="text-2xl text-gray-400">От учебы в колледже</p>
          </div>
          <div className="space-y-6">
            {[
              'Освоить современные языки программирования',
              'Получить практические навыки разработки',
              'Работать над реальными проектами',
              'Найти единомышленников и создать команду',
              'Подготовиться к карьере в IT'
            ].map((goal, idx) => (
              <div
                key={idx}
                className="flex items-start gap-6 p-6 bg-dark-card border border-neon-blue/30 rounded-lg hover:border-neon-blue transition-all duration-300 hover:shadow-neon-blue animate-fade-in hover-scale"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-neon-blue/20 rounded-full flex items-center justify-center text-neon-blue font-mono font-bold text-xl">
                  {idx + 1}
                </div>
                <p className="text-xl md:text-2xl flex-1 pt-2">{goal}</p>
                <div className="text-neon-blue opacity-50">
                  <Icon name="CheckCircle2" size={28} />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: 'BookOpen', title: 'Теория', desc: 'Глубокие знания основ' },
              { icon: 'Laptop', title: 'Практика', desc: 'Реальные проекты' },
              { icon: 'Trophy', title: 'Результат', desc: 'Успешная карьера' }
            ].map((item, idx) => (
              <Card key={idx} className="bg-dark-card border-neon-purple/30 p-6 text-center hover:border-neon-purple transition-all hover:shadow-neon-purple">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-neon-purple/20 rounded-full">
                    <Icon name={item.icon} size={32} className="text-neon-purple" />
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                <p className="text-gray-400">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="conclusion" className="relative z-10 min-h-screen flex items-center justify-center p-8 py-24">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="mb-12">
            <div className="text-6xl md:text-8xl font-bold mb-8 font-mono">
              <span className="text-neon-blue neon-text">&lt;</span>
              <span className="text-white">Заключение</span>
              <span className="text-neon-blue neon-text">/&gt;</span>
            </div>
            <p className="text-3xl text-neon-purple font-semibold mb-8">
              Путь начинается здесь
            </p>
          </div>
          <div className="text-xl md:text-2xl leading-relaxed text-gray-300 mb-12 max-w-3xl mx-auto bg-dark-card border border-neon-blue/30 rounded-lg p-8">
            Программирование — это не просто профессия, это способ мышления и возможность создавать будущее своими руками. 
            Каждая строка кода — это шаг к реализации идей, которые могут изменить мир.
          </div>
          
          <div className="flex flex-wrap justify-center gap-8 text-gray-500 font-mono text-sm mb-12">
            <span className="flex items-center gap-2">
              <Icon name="Code2" size={20} className="text-neon-blue" />
              console.log('success')
            </span>
            <span className="flex items-center gap-2">
              <Icon name="Rocket" size={20} className="text-neon-purple" />
              deploy()
            </span>
            <span className="flex items-center gap-2">
              <Icon name="Heart" size={20} className="text-red-500" />
              passion = true
            </span>
          </div>

          <Button 
            onClick={() => scrollToSection('hero')}
            className="bg-neon-purple hover:bg-neon-purple/80 text-white px-8 py-6 text-lg rounded-lg shadow-neon-purple"
          >
            <Icon name="ArrowUp" size={20} className="mr-2" />
            Вернуться наверх
          </Button>
        </div>
      </section>

      <div className="fixed top-1/4 left-8 text-xs font-mono text-gray-700 select-none hidden lg:block pointer-events-none">
        <div>{'// function initPresentation() {'}</div>
        <div className="ml-4">{'const slides = [];'}</div>
        <div className="ml-4">{'slides.forEach(render);'}</div>
        <div>{'// }'}</div>
      </div>

      <div className="fixed bottom-1/4 right-8 text-xs font-mono text-gray-700 select-none hidden lg:block pointer-events-none">
        <div>{'/* Programmer */'}</div>
        <div>{'class Developer {'}</div>
        <div className="ml-4">{'learn();'}</div>
        <div className="ml-4">{'code();'}</div>
        <div className="ml-4">{'repeat();'}</div>
        <div>{'}'}</div>
      </div>

      <footer className="relative z-10 border-t border-neon-blue/20 bg-dark-card py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-500 font-mono text-sm">
            © 2024 | Презентация о профессии программиста
          </p>
        </div>
      </footer>
    </div>
  );
}

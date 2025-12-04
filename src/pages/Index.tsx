import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 0,
      title: 'Программист',
      subtitle: 'Профессия будущего',
      content: 'Создание цифрового мира'
    },
    {
      id: 1,
      title: 'Суть профессии',
      subtitle: 'Что делает программист',
      tasks: [
        { icon: 'Code2', title: 'Разработка ПО', desc: 'Создание приложений и систем' },
        { icon: 'Bug', title: 'Отладка', desc: 'Поиск и исправление ошибок' },
        { icon: 'Layers', title: 'Архитектура', desc: 'Проектирование решений' },
        { icon: 'Users', title: 'Командная работа', desc: 'Совместная разработка' }
      ]
    },
    {
      id: 2,
      title: 'Мои ожидания',
      subtitle: 'От учебы в колледже',
      goals: [
        'Освоить современные языки программирования',
        'Получить практические навыки разработки',
        'Работать над реальными проектами',
        'Найти единомышленников и создать команду',
        'Подготовиться к карьере в IT'
      ]
    },
    {
      id: 3,
      title: 'Заключение',
      subtitle: 'Путь начинается здесь',
      content: 'Программирование — это не просто профессия, это способ мышления и возможность создавать будущее своими руками'
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  return (
    <div className="min-h-screen bg-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 grid-background opacity-20"></div>
      <div className="absolute inset-0 code-rain opacity-10"></div>

      <div className="fixed top-8 right-8 z-50 flex gap-4">
        {slides.map((slide) => (
          <button
            key={slide.id}
            onClick={() => setCurrentSlide(slide.id)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === slide.id
                ? 'bg-neon-blue w-8 shadow-neon-blue'
                : 'bg-gray-600 hover:bg-gray-500'
            }`}
          />
        ))}
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center p-8">
        {currentSlide === 0 && (
          <div className="text-center animate-fade-in">
            <div className="mb-8 relative">
              <div className="text-8xl font-bold font-mono glitch-text" data-text="{'>'} Программист">
                {'>'} Программист
              </div>
            </div>
            <div className="text-3xl text-neon-purple font-semibold mb-6 animate-pulse">
              {slides[0].subtitle}
            </div>
            <div className="text-xl text-gray-400 mb-12 font-mono">
              <span className="typing-effect">{slides[0].content}</span>
            </div>
            <div className="flex gap-4 justify-center items-center text-sm text-gray-500 font-mono">
              <span className="flex items-center gap-2">
                <div className="w-2 h-2 bg-neon-blue rounded-full animate-pulse"></div>
                status: ready
              </span>
              <span>|</span>
              <span>version: 1.0.0</span>
            </div>
          </div>
        )}

        {currentSlide === 1 && (
          <div className="max-w-6xl mx-auto animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-6xl font-bold mb-4 font-mono text-neon-blue neon-text">
                {slides[1].title}
              </h2>
              <p className="text-2xl text-gray-400">{slides[1].subtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {slides[1].tasks?.map((task, idx) => (
                <Card
                  key={idx}
                  className="bg-dark-card border-neon-purple/30 p-6 hover:border-neon-purple transition-all duration-300 hover:shadow-neon-purple hover-scale group"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-neon-purple/20 rounded-lg group-hover:bg-neon-purple/30 transition-colors">
                      <Icon name={task.icon} size={32} className="text-neon-purple" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2 font-mono">{task.title}</h3>
                      <p className="text-gray-400">{task.desc}</p>
                      <div className="mt-3 font-mono text-xs text-neon-blue opacity-50">
                        {'// '} task_{idx + 1}.execute()
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {currentSlide === 2 && (
          <div className="max-w-4xl mx-auto animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-6xl font-bold mb-4 font-mono text-neon-purple neon-text">
                {slides[2].title}
              </h2>
              <p className="text-2xl text-gray-400">{slides[2].subtitle}</p>
            </div>
            <div className="space-y-4">
              {slides[2].goals?.map((goal, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 bg-dark-card border border-neon-blue/30 rounded-lg hover:border-neon-blue transition-all duration-300 hover:shadow-neon-blue animate-fade-in"
                  style={{ animationDelay: `${idx * 0.15}s` }}
                >
                  <div className="flex-shrink-0 w-8 h-8 bg-neon-blue/20 rounded-full flex items-center justify-center text-neon-blue font-mono font-bold">
                    {idx + 1}
                  </div>
                  <p className="text-xl flex-1 pt-1">{goal}</p>
                  <div className="text-neon-blue opacity-50">
                    <Icon name="CheckCircle2" size={24} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {currentSlide === 3 && (
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <div className="mb-8">
              <div className="text-7xl font-bold mb-6 font-mono">
                <span className="text-neon-blue neon-text">&lt;</span>
                <span className="text-white">{slides[3].title}</span>
                <span className="text-neon-blue neon-text">/&gt;</span>
              </div>
              <p className="text-2xl text-neon-purple font-semibold mb-8">
                {slides[3].subtitle}
              </p>
            </div>
            <div className="text-xl leading-relaxed text-gray-300 mb-12 max-w-3xl mx-auto">
              {slides[3].content}
            </div>
            <div className="flex justify-center gap-8 text-gray-500 font-mono text-sm">
              <span className="flex items-center gap-2">
                <Icon name="Code2" size={20} className="text-neon-blue" />
                console.log('success')
              </span>
              <span className="flex items-center gap-2">
                <Icon name="Rocket" size={20} className="text-neon-purple" />
                deploy()
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="fixed bottom-8 left-0 right-0 flex justify-center gap-4 z-50">
        <Button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="bg-neon-blue/20 hover:bg-neon-blue/30 text-neon-blue border border-neon-blue/50 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <Icon name="ChevronLeft" size={20} />
        </Button>
        <div className="flex items-center px-6 bg-dark-card border border-gray-700 rounded-lg font-mono">
          <span className="text-gray-500">slide:</span>
          <span className="text-neon-blue ml-2 font-bold">{currentSlide + 1}</span>
          <span className="text-gray-600 mx-1">/</span>
          <span className="text-gray-500">{slides.length}</span>
        </div>
        <Button
          onClick={nextSlide}
          disabled={currentSlide === slides.length - 1}
          className="bg-neon-blue/20 hover:bg-neon-blue/30 text-neon-blue border border-neon-blue/50 disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <Icon name="ChevronRight" size={20} />
        </Button>
      </div>

      <div className="fixed top-1/4 left-8 text-xs font-mono text-gray-700 select-none hidden lg:block">
        <div>{'// function initPresentation() {'}</div>
        <div className="ml-4">{'const slides = [];'}</div>
        <div className="ml-4">{'slides.forEach(render);'}</div>
        <div>{'// }'}</div>
      </div>

      <div className="fixed bottom-1/4 right-8 text-xs font-mono text-gray-700 select-none hidden lg:block">
        <div>{'/* Programmer */'}</div>
        <div>{'class Developer {'}</div>
        <div className="ml-4">{'learn();'}</div>
        <div className="ml-4">{'code();'}</div>
        <div className="ml-4">{'repeat();'}</div>
        <div>{'}'}</div>
      </div>
    </div>
  );
}

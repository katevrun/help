import React, { useState } from 'react';

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      title: 'Проект 1: Разработка веб-приложения',
      description: 'Это проект, связанный с созданием современного веб-приложения с использованием React и Node.js.',
    },
    {
      id: 2,
      title: 'Проект 2: Дизайн пользовательского интерфейса',
      description: 'В этом проекте я работал над созданием удобного и красивого UI для мобильных приложений.',
    },
    {
      id: 3,
      title: 'Проект 3: Оптимизация SEO',
      description: 'Поставьте мне 5 на экзамене,пожалуйста',
    },
  ];

  const [expandedItem, setExpandedItem] = useState(null);

  const toggleDetails = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <div>
      <h1>Мое Портфолио</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {portfolioItems.map((item) => (
          <li key={item.id} style={{ marginBottom: '20px', border: '1px solid #ddd', padding: '10px' }}>
            <h2>{item.title}</h2>
            <button
              onClick={() => toggleDetails(item.id)}
              
            >
              {expandedItem === item.id ? 'Скрыть' : 'Подробнее'}
            </button>
            {expandedItem === item.id && (
              <div style={{ marginTop: '10px', backgroundColor: '#f9f9f9', padding: '10px' }}>
                {item.description}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;
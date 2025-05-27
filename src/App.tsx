import { useState, useEffect } from 'react';
import './App.css';
import { marked } from 'marked';

function App() {
  const [activeDay, setActiveDay] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<string>('content'); // 'content', 'slides', 'quiz'
  const [content, setContent] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const days = Array.from({ length: 10 }, (_, i) => i + 1);

  useEffect(() => {
    loadContent();
  }, [activeDay, activeTab]);

  const loadContent = async () => {
    setLoading(true);
    try {
      if (activeTab === 'content') {
        const response = await fetch(`/assets/day${activeDay}_content.md`);
        const text = await response.text();
        setContent(marked.parse(text) as string);
      } else if (activeTab === 'slides') {
        // 投影片是完整的HTML，使用iframe加載
        setContent(`<iframe src="/assets/day${activeDay}_slides.html" width="100%" height="600px" frameborder="0"></iframe>`);
      } else if (activeTab === 'quiz') {
        // 測驗題是完整的HTML，使用iframe加載
        setContent(`<iframe src="/assets/day${activeDay}_quiz.html" width="100%" height="600px" frameborder="0"></iframe>`);
      }
    } catch (error) {
      console.error('Error loading content:', error);
      setContent('<p>內容載入失敗，請稍後再試。</p>');
    }
    setLoading(false);
  };

  const handleDayChange = (day: number) => {
    setActiveDay(day);
    setMenuOpen(false);
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="app-container">
      <header>
        <div className="header-content">
          <h1>《Adorning Fashion》十天課程</h1>
          <p>服飾珠寶的歷史與發展</p>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? '關閉選單' : '開啟選單'}
          </button>
        </div>
      </header>

      <div className="main-container">
        <nav className={`sidebar ${menuOpen ? 'open' : ''}`}>
          <h2>課程日程</h2>
          <ul className="day-list">
            {days.map((day) => (
              <li key={day} className={activeDay === day ? 'active' : ''}>
                <button onClick={() => handleDayChange(day)}>第 {day} 天</button>
              </li>
            ))}
          </ul>
        </nav>

        <main>
          <div className="content-header">
            <h2>第 {activeDay} 天</h2>
            <div className="tabs">
              <button 
                className={activeTab === 'content' ? 'active' : ''} 
                onClick={() => handleTabChange('content')}
              >
                課程內容
              </button>
              <button 
                className={activeTab === 'slides' ? 'active' : ''} 
                onClick={() => handleTabChange('slides')}
              >
                投影片
              </button>
              <button 
                className={activeTab === 'quiz' ? 'active' : ''} 
                onClick={() => handleTabChange('quiz')}
              >
                測驗題
              </button>
            </div>
          </div>

          <div className="content-container">
            {loading ? (
              <div className="loading">載入中...</div>
            ) : (
              <div 
                className="content" 
                dangerouslySetInnerHTML={{ __html: content }}
              />
            )}
          </div>
        </main>
      </div>

      <footer>
        <p>基於《Adorning Fashion: The History of Costume Jewellery to Modern Times》(Deanna Farneti Cera著)</p>
        <p>&copy; {new Date().getFullYear()} 服飾珠寶課程</p>
      </footer>
    </div>
  );
}

export default App;

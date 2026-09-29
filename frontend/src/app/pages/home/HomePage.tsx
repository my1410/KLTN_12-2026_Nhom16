import './home-page.scss'

const stats = [
  { value: '12K+', label: 'CV được phân tích' },
  { value: '3.8K', label: 'Việc làm đang tuyển' },
  { value: '820+', label: 'Doanh nghiệp tham gia' },
]

const featuredJobs = [
  {
    role: 'Frontend Developer',
    company: 'NovaTech Studio',
    salary: '18 - 28 triệu',
    location: 'Đà Nẵng',
    tags: ['React', 'TypeScript', 'UI'],
    match: 92,
  },
  {
    role: 'Backend NodeJS',
    company: 'Aster Labs',
    salary: '20 - 32 triệu',
    location: 'Hồ Chí Minh',
    tags: ['NodeJS', 'MySQL', 'API'],
    match: 88,
  },
  {
    role: 'Business Analyst',
    company: 'Mira Digital',
    salary: '15 - 24 triệu',
    location: 'Hybrid',
    tags: ['SRS', 'Agile', 'Data'],
    match: 84,
  },
]

const strengths = [
  { icon: 'bi-file-earmark-text', title: 'Phân tích CV', text: 'Trích xuất kỹ năng, học vấn, kinh nghiệm và dự án từ CV ứng viên.' },
  { icon: 'bi-briefcase', title: 'Phân tích JD', text: 'Chuẩn hóa yêu cầu tuyển dụng, cấp bậc và kỹ năng cần có từ mô tả công việc.' },
  { icon: 'bi-stars', title: 'Matching hai chiều', text: 'Gợi ý việc làm cho ứng viên và gợi ý ứng viên phù hợp cho doanh nghiệp.' },
]

const categories = ['Công nghệ thông tin', 'Marketing', 'Kế toán', 'Nhân sự', 'Thiết kế', 'Data Analyst']

function HomePage() {
  return (
    <div className="home-page">
      <header className="site-header">
        <nav className="container d-flex align-items-center justify-content-between py-3">
          <a className="brand d-inline-flex align-items-center gap-2" href="#top" aria-label="TuyenDungAI home">
            <span className="brand-mark">
              <i className="bi bi-stars" />
            </span>
            <span>TuyenDungAI</span>
          </a>

          <div className="nav-links d-none d-lg-flex align-items-center gap-4">
            <a href="#jobs">Việc làm</a>
            <a href="#cv-ai">Đánh giá CV</a>
            <a href="#employer">Doanh nghiệp</a>
            <a href="#categories">Ngành nghề</a>
          </div>

          <div className="d-flex align-items-center gap-2">
            <button className="btn btn-link login-link d-none d-sm-inline-flex">Đăng nhập</button>
            <button className="btn btn-primary signup-btn">Bắt đầu</button>
          </div>
        </nav>
      </header>

      <section id="top" className="hero-section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 hero-copy">
              <span className="eyebrow"><i className="bi bi-lightning-charge-fill" /> Tuyển dụng thông minh với AI</span>
              <h1>Tìm đúng việc, chọn đúng ứng viên nhanh hơn.</h1>
              <p className="hero-lead">
                Nền tảng hỗ trợ phân tích CV, đọc mô tả công việc và đánh giá mức độ phù hợp giữa ứng viên với từng vị trí tuyển dụng.
              </p>

              <div className="hero-actions d-flex flex-column flex-sm-row gap-3">
                <button className="btn btn-primary btn-lg"><i className="bi bi-upload me-2" />Tải CV để đánh giá</button>
                <button className="btn btn-light btn-lg"><i className="bi bi-search me-2" />Tìm việc ngay</button>
              </div>

              <div className="search-panel row g-2 align-items-center">
                <div className="col-md-5">
                  <label htmlFor="keyword" className="form-label">Từ khóa</label>
                  <div className="input-icon">
                    <i className="bi bi-search" />
                    <input id="keyword" className="form-control" placeholder="React, NodeJS, BA..." />
                  </div>
                </div>
                <div className="col-md-4">
                  <label htmlFor="location" className="form-label">Địa điểm</label>
                  <div className="input-icon">
                    <i className="bi bi-geo-alt" />
                    <input id="location" className="form-control" placeholder="Đà Nẵng" />
                  </div>
                </div>
                <div className="col-md-3 d-grid align-self-end">
                  <button className="btn btn-dark">Tìm kiếm</button>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="hero-visual" aria-label="Bảng phân tích tuyển dụng minh họa">
                <div className="visual-topbar">
                  <span />
                  <span />
                  <span />
                </div>
                <div className="match-card primary-card">
                  <div>
                    <small>AI Matching</small>
                    <strong>Frontend Developer</strong>
                  </div>
                  <div className="match-score">92%</div>
                </div>
                <div className="candidate-card card-one">
                  <span className="avatar avatar-blue">LM</span>
                  <div>
                    <strong>Lê Minh</strong>
                    <small>ReactJS · TypeScript · UI</small>
                  </div>
                  <i className="bi bi-check-circle-fill" />
                </div>
                <div className="candidate-card card-two">
                  <span className="avatar avatar-coral">AN</span>
                  <div>
                    <strong>An Nhiên</strong>
                    <small>NodeJS · MySQL · REST API</small>
                  </div>
                  <i className="bi bi-arrow-up-right-circle-fill" />
                </div>
                <div className="insight-panel">
                  <span>Kỹ năng trùng khớp</span>
                  <div className="skill-line"><b style={{ width: '88%' }} /></div>
                  <span>Kinh nghiệm liên quan</span>
                  <div className="skill-line accent"><b style={{ width: '72%' }} /></div>
                </div>
              </div>
            </div>
          </div>

          <div className="stats-strip">
            {stats.map((item) => (
              <div className="stat-item" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="jobs" className="section-block">
        <div className="container">
          <div className="section-heading d-flex flex-column flex-md-row justify-content-between gap-3">
            <div>
              <span className="section-kicker">Việc làm nổi bật</span>
              <h2>Các vị trí phù hợp đang chờ ứng viên tốt.</h2>
            </div>
            <button className="btn btn-outline-primary align-self-md-end">Xem tất cả</button>
          </div>

          <div className="row g-4">
            {featuredJobs.map((job) => (
              <div className="col-md-6 col-xl-4" key={job.role}>
                <article className="job-card">
                  <div className="d-flex align-items-start justify-content-between gap-3">
                    <div>
                      <span className="company-dot" />
                      <h3>{job.role}</h3>
                      <p>{job.company}</p>
                    </div>
                    <span className="match-badge">{job.match}%</span>
                  </div>
                  <div className="job-meta">
                    <span><i className="bi bi-cash-coin" />{job.salary}</span>
                    <span><i className="bi bi-geo-alt" />{job.location}</span>
                  </div>
                  <div className="tag-row">
                    {job.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  <button className="btn btn-light w-100">Xem chi tiết</button>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cv-ai" className="section-block ai-section">
        <div className="container">
          <div className="row g-4 align-items-stretch">
            {strengths.map((item) => (
              <div className="col-md-4" key={item.title}>
                <article className="strength-card h-100">
                  <i className={`bi ${item.icon}`} />
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="employer" className="section-block employer-section">
        <div className="container">
          <div className="employer-panel">
            <div>
              <span className="section-kicker">Dành cho doanh nghiệp</span>
              <h2>Upload JD, hệ thống tự đề xuất ứng viên phù hợp.</h2>
              <p>
                Nhà tuyển dụng có thể đăng tin, quản lý hồ sơ ứng tuyển, xem điểm phù hợp và mời ứng viên tiềm năng vào vòng phỏng vấn.
              </p>
            </div>
            <button className="btn btn-dark btn-lg"><i className="bi bi-briefcase me-2" />Đăng tin tuyển dụng</button>
          </div>
        </div>
      </section>

      <section id="categories" className="section-block category-section">
        <div className="container">
          <div className="section-heading text-center mx-auto">
            <span className="section-kicker">Ngành nghề phổ biến</span>
            <h2>Khám phá cơ hội theo kỹ năng và định hướng nghề nghiệp.</h2>
          </div>
          <div className="category-cloud">
            {categories.map((category) => <button className="category-chip" key={category}>{category}</button>)}
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage

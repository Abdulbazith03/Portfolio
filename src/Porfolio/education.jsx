import './port.css';

const Education = () => {
  const educationData = [
    { class: '10th', percent: 72 },
    { class: '12th', percent: 70 },
    { class: 'College', percent: 70 },
  ];

  return (
    <div id='education' className="education-section container">
      <h2 className="text-center education-title mb-5">Eduaction</h2>
      <div className="row justify-content-center mb-5" >
        {educationData.map((item, index) => (
          <div className="col-md-4 col-sm-6 d-flex justify-content-center" key={index}>
            <div className="edu-box">
              <div
                className="circle"
                style={{ background: `conic-gradient(white ${item.percent}%, transparent 0%)` }}
              >
                <span className="percent-text">{item.percent}%</span>
              </div>
              <div className="class-label">{item.class}</div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;

import "../css/timetable.css";

export default function Timetables() {
  return (
    <div className="download-container">
      <h1 className="download-heading">Class Time-Table (Session: 2021-22)</h1>
      <p>Download Class Time Table for MCA, MSc, BCA(H), and BSc(H) w.e.f. 10/03/2022</p>
      <p>Download Main Exam Time Table for Institute of Computer Science, Vikram University Ujjain</p>

      <table className="time-table">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Programme</th>
            <th>Time-Table (Jul 2021 - Dec 2021)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1.</td>
            <td>MCA (Master of Computer Application)</td>
            <td>
              <a href="/downloads/example.pdf" target="_blank" rel="noopener noreferrer">
                Download
              </a>
            </td>
          </tr>
          <tr>
            <td>2.</td>
            <td>M.Sc. (Computer Science / Data Science / AI and Machine Learning / Information Security / Information Technology)</td>
            <td>
              <a href="/downloads/example.pdf" target="_blank" rel="noopener noreferrer">
                Download
              </a>
            </td>
          </tr>
          <tr>
            <td>3.</td>
            <td>BCA (Yearly pattern)</td>
            <td>
              <a href="/downloads/example.pdf" target="_blank" rel="noopener noreferrer">
                Download
              </a>
            </td>
          </tr>
          <tr>
            <td>4.</td>
            <td>BCA (Honors) and B.Sc. (Honors) Computer Science</td>
            <td>
              <a href="/downloads/example.pdf" target="_blank" rel="noopener noreferrer">
                Download
              </a>
            </td>
          </tr>
          <tr>
            <td>5.</td>
            <td>PG Diploma</td>
            <td>
              <a href="/downloads/example.pdf" target="_blank" rel="noopener noreferrer">
                Download
              </a>
            </td>
          </tr>
          <tr>
            <td>6.</td>
            <td>Diploma</td>
            <td>
              <a href="/downloads/example.pdf" target="_blank" rel="noopener noreferrer">
                Download
              </a>
            </td>
          </tr>
          <tr>
            <td>7.</td>
            <td>Certificate Courses</td>
            <td>
              <a href="/downloads/example.pdf" target="_blank" rel="noopener noreferrer">
                Download
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

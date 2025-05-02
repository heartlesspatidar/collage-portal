
import "../css/SyllabusDownload.css";

export default function SyllabusDownload() {
  const syllabusData = [
    "Ph.D. (Course Work)", "MCA (Master of Computer Application)", "M.Sc. (Computer Science)", 
    "M.Sc.( Information Technology)", "M.Sc. (CS with Data Science)", "M.Sc. (CS with AI and Machine Learning)", 
    "M.Sc. (CS with Information Security)", "BCA-I SEM(Hon.) / BSc-CS-I SEM(Hon.) (NEP) Revised", 
    "BCA-II SEM(Hon.)/ BSc-CS-II SEM(Hon.) (NEP) Revised", "BCA-II SEM(Hon.)/ BSc-CS-II SEM(Hon.) (NEP) Old", 
    "BCA-III SEM(Hon.) / BSc-CS-III SEM(Hon.) (NEP)", "BCA-IV SEM(Hon.) / BSc-CS-IV SEM(Hon.)", 
    "BCA-V SEM(Hon.)/ BSc-CS-V SEM(Hon.) (NEP)- Revised", "BCA-VI SEM(Hon.)/ BSc-CS-VI SEM(Hon.) (NEP)", 
    "PGDCSA", "PGDCSA (Data Science)", "PGDCSA (AI & Machine Learning)", "PGDCSA (Web Development and Software Testing)", 
    "PG Diploma in Tally and ERP", "PG Diploma in Information Security and Cyber Law", 
    "PG Diploma in Modern Technologies in Computer Science", "PG Diploma in Data Analytics", "PG Diploma in Cyber Security", 
    "PG Diploma in dot net technology", "PG Diploma in Cloud Computing & IoT", "PG Diploma in Database Administration", 
    "PG Diploma in Web Designing & Web Development", "PG Diploma in IT Management", "PG Diploma in Modern programming Languages", 
    "Diploma in Tally and ERP", "Diploma in Information Security and Cyber Law", "Diploma in Modern Technologies in Computer Science", 
    "Diploma in Data Analytics", "Diploma in Cyber Security", "Diploma in Graphical Animated Web Designing", 
    "Diploma in Computer Applications", "Diploma in Data Processing & Data Entry Operations", 
    "Diploma in Office Automation", "Diploma in Database Technologies", "Diploma in Web Designing & Web Development", 
    "Diploma in IT Management", "Diploma in Modern Programming Language", "Certificate Course in Tally", 
    "Certificate Course in ERP", "Certificate Course in Management Information System(MIS)", "Certificate Course in Artificial Intelligence", 
    "Certificate Course in Data Mining", "Certificate Course in Information Security", "Certificate Course in Internet of Things(IoT)", 
    "Certificate Course in Machine Learning", "Certificate Course in Network Security", "Certificate in Data Analytics", 
    "Certificate in Python for Analytics", "Certificate Course in Data Communication and Computer Network", 
    "Certificate Course in Information Security and Cyber law", "Certificate Course in Legal Aspects of Information Security", 
    "Certificate Course in Modern Technologies in Computer Science", "Certificate Course in ASP.NET Technology", 
    "Certificate Course in VB.NET Technology", "Certificate Course in Computer Operations", "Certificate Course in Big Data Analytics", 
    "Certificate Course in Database Technologies", "Certificate Course in Fundamental IT and PC packages", 
    "Certificate Course in DBMS and SQL", "Certificate Course in C and C++ Programming Language", 
    "Certificate Course in Python Programming Language", "Certificate Course in HTML and JAVASCRIPT Programming Language", 
    "Certificate Course in PHP Language"
  ];

  return (
    <div className="syllabus-download-container">
      <h2>Syllabus</h2>
      <p className="note">
        Note: After downloading syllabus, confirm its authenticity with the academic co-ordinator of the department.
      </p>

      <table className="syllabus-table">
        <thead>
          <tr>
            <th>S.No.</th>
            <th>Programme</th>
            <th>Syllabus</th>
          </tr>
        </thead>
        <tbody>
          {syllabusData.map((programme, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{programme}</td>
              <td>
                <a href="/example.pdf" download className="download-link">Download</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

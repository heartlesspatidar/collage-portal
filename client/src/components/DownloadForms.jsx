import "../css/DownloadForms.css";

export default function DownloadForms() {
  return (
    <div className="download-container py-10 px-4 bg-gray-100 min-h-screen flex flex-col items-center">
      <h1 className="download-heading text-3xl font-bold text-blue-700 mb-8">
        Download Forms
      </h1>
      <div className="table-container w-full max-w-3xl bg-white rounded-lg shadow-lg overflow-x-auto">
        <table className="min-w-full text-left">
          <tbody>
            {[
              "BCA(Regular)/BCA(H)/B.Sc.(H) Admission Form 2021-22",
              "PGDCSA(PLAIN/DS/WEB DEV./AI & ML) Admission Form 2021-22",
              "Pre Information Details Regarding Exam Form Approval",
              "No Dues Form for issuing TC / Last Year Marksheet",
              "Admission Enquiry Form",
              "Degree Form",
              "Enrollment Form",
              "Migration Form",
              "Provisional Degree Certificate Form",
              "Examination Form",
              "Change in Name and Surname",
              "Return Library Deposit"
            ].map((text, idx) => (
              <tr key={idx} className="hover:bg-blue-50 transition-all duration-200 border-b">
                <td className="px-4 py-3 font-semibold text-gray-600">{idx + 1}.</td>
                <td className="px-4 py-3 text-blue-600 hover:underline">
                  <a href="/example.pdf" target="_blank" rel="noopener noreferrer">
                    {text}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

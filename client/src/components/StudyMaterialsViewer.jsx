import { useState } from "react";
import "../css/StudyMaterialsViewer.css";
import DownloadForms from "./DownloadForms";
import Timetables from "./Timetables";
import Syllabus from "./SyllabusDownload";

export default function StudyMaterialsViewer() {
  const [activeTab, setActiveTab] = useState('forms');

  return (
    <div className="study-materials-viewer">
      <div className="tabs">
        <button 
          onClick={() => setActiveTab('forms')} 
          className={activeTab === 'forms' ? 'active' : ''}>
          Download Forms
        </button>
        <button 
          onClick={() => setActiveTab('timetables')} 
          className={activeTab === 'timetables' ? 'active' : ''}>
          Timetables
        </button>
        <button 
          onClick={() => setActiveTab('syllabus')} 
          className={activeTab === 'syllabus' ? 'active' : ''}>
          Syllabus
        </button>
      </div>

      <div className="content">
        <div className={activeTab === 'forms' ? 'active' : ''}>
          <DownloadForms />
        </div>
        <div className={activeTab === 'timetables' ? 'active' : ''}>
          <Timetables />
        </div>
        <div className={activeTab === 'syllabus' ? 'active' : ''}>
          <Syllabus />
        </div>
      </div>
    </div>
  );
}

function downloadResume() {

  const resumeUrl = 'Resume.pdf';
  
  const link = document.createElement('a');
  link.href = resumeUrl;
  link.target = '_blank'; 
  link.download = 'Resume.pdf'; 

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);
}

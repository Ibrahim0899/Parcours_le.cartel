import sys, os
try:
    import pypdf
    import docx2txt
except ImportError:
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "pypdf", "docx2txt"])
    import pypdf
    import docx2txt

d = "Pitchs"
for f in os.listdir(d):
    path = os.path.join(d, f)
    print("\n--- " + f + " ---")
    if f.endswith('.pdf'):
        reader = pypdf.PdfReader(path)
        for page in reader.pages:
            print(page.extract_text())
    elif f.endswith('.docx'):
        print(docx2txt.process(path))

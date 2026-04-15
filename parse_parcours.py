import pypdf

path = "Parcours-dInclusion-via-le-E-sport-et-les-Metiers-du-Numerique_compressed.pdf"
reader = pypdf.PdfReader(path)
for i, page in enumerate(reader.pages):
    print(f"\n--- PAGE {i} ---")
    print(page.extract_text())

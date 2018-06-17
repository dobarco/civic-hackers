from PyPDF2 import PdfFileReader


def text_extractor(path):
    text = ""
    with open(path, 'rb') as f:
        pdf = PdfFileReader(f)

        # get the first page
        num_pages = pdf.getNumPages()
        i = 0

        while i < num_pages:
            page = pdf.getPage(i)
            text += page.extractText()
            i += 1

    return text



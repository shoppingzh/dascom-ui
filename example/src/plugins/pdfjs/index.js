import * as PDFJS from 'pdfjs-dist'
import PDFJSWorker from 'pdfjs-dist/es5/build/pdf.worker.entry'
PDFJS.GlobalWorkerOptions.workerSrc = PDFJSWorker

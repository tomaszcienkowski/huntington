The program was written as an HTML file with vanilla JavaScript. 

For the sake of simplicity, the program is contained in a single HTML file with three sections that are interchangeably displayed and hidden rather than in three separate files.

For the sake of privacy, the program is entirely executed inside the user's browser. The files the user uploads and the information the program returns are not sent to an external server at any point of the execution. 

For the sake of reliability, the program uses a number of imported functions that assess string similarity. Because the diease outcome is determied only by a small region of the HTT gene called Exon 1 and similar mutations in any other regions are irrelevant, it is essential to precisely locate Exon 1. The string similarity functions are used to find the substring most similar to that which that normally precedes Exon 1. Additionally, once the extraction and the analysis are completed, the program measures the similarity of the string that follows the extracted region to that which normally follows Exon 1. If at any point, string similarity between analyzed sequences and expected sequence is low, the program informs the user of the error rather than produce unreliable results.



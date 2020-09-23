## Design

The program was written as an HTML file with vanilla JavaScript. Here are the three main objectives I followed when making design choices in this project.

* Privacy

In order to protect the sensitive genetic data the user upload, the program is entirely executed inside the user's own browser. Neither the files nor any information extracted from them are sent to an external server for processing.

* Reliability 

Although the diease outcome is determied only by a specific mutation in a small region of the HTT gene, similar mutations may also occur in any other part of that gene or even in a different gene. It is critical, therefore, to extract only the relevant small region of the HTT that determines the outcome. The difficulty is that every person's genome is slightly different so exact string matching is not an option. The program uses instead a number of imported string similarity to maximize the chance that the correct region is
extracted. It does so by slicing the file into smaller substrings and then looking for that among them which is most similar to the expected sequence preceding the region of interest.  Additionally, once the extraction and the analysis are completed, the program measures the similarity of the string that follows the extracted region to that which should follow it based on the Human Genomic Library. If at any point, string similarity between analyzed sequences and expected sequence is low, the program informs the user of the error rather instead of producing an unreliable risk report.

* Simplicity

For the sake of simplicity, the program is contained in a single HTML file with three sections that are interchangeably displayed and hidden rather than in three separate files.


# Chapter 03 image provenance

Verified 2026-11-06. Both binaries were visually inspected, not inferred from filenames.

## Original opening page

- Local: `cardano-liber-de-ludo-aleae-1663.jpg`.
- Gerolamo Cardano, *Liber de ludo aleae*, *Opera omnia*, vol. I, Lyon, 1663, printed p. 262. The image visibly reads LIBER DE LUDO ALEAE and 262.
- Institutional identity cross-check: [University of Milan, Opera omnia](https://cardano.unimi.it/opera-omnia/), volume I, entry 1.10, [digitized treatise](https://cardano.unimi.it/wp-content/uploads/opera_omnia/vol_1_s_10.pdf). No explicit reproduction licence was found for that particular PDF; it was inspected as research and is **not** redistributed here.
- Actual reproduced scan: Claudio Ruggeri, OPAL Libri antichi, University of Turin, hosted by [Internet Archive](https://archive.org/details/imgmar3940MiscellaneaOpal/page/n309). The item explicitly states **CC0 1.0 Universal**, both in its Usage field and `metadata.licenseurl` in [the metadata API](https://archive.org/metadata/imgmar3940MiscellaneaOpal).
- [Download](https://archive.org/download/imgmar3940MiscellaneaOpal/page/n309.jpg). The item's scandata maps leaf 309 to printed page 262. Kept as downloaded, no synthetic restoration.
- [CC0 terms](https://creativecommons.org/publicdomain/zero/1.0/).
- Wellcome's catalogue was also checked, but its full-volume images require authentication; they were not used.

## Cardano engraving

- Local: `cardano-portrait-engraving.jpg`.
- [Specific Wikimedia file](https://commons.wikimedia.org/wiki/File:Hieronimus_Cardanus.jpg), *A Portfolio of Portraits of Eminent Mathematicians* (1905), unidentified artist; Public Domain Mark on the file page.
- Downloaded using the package's portrait retrieval script. Later engraving, not a contemporary photograph. Alt text describes the actual engraving rather than repeating the package's inaccurate “profile” wording.

Captions, local full-image links, institutional credits, and rights links appear in both language versions at the manuscript's gallery insertion point. Research PDFs and API snapshots are diagnostic files under ignored `tests/artifacts/chance/`, not runtime dependencies.

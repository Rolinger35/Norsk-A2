const questions = [
  // --- Verb tenses ---
 {
    type: "verb",
    prompt: "I går ___ jeg fisk.",
    options: ["spiser", "spiste", "har spist"],
    answer: "spiste"
  },
  {
    type: "verb",
    prompt: "Hver dag ___ hun kaffe.",
    options: ["drakk", "drikker", "har drukket"],
    answer: "drikker"
  },
  {
    type: "verb",
    prompt: "Han ___ på skolen hver dag.",
    options: ["gikk", "går", "har gått"],
    answer: "går"
  },
  {
    type: "verb",
    prompt: "I helgen ___ vi en film.",
    options: ["ser", "så", "har sett"],
    answer: "så"
  },
  {
    type: "verb",
    prompt: "Hun ___ til Sverige mange ganger.",
    options: ["drar", "dro", "har dratt"],
    answer: "har dratt"
  },
  {
    type: "verb",
    prompt: "Vi ___ på kino i går.",
    options: ["har gått", "går", "gikk"],
    answer: "gikk"
  },
  {
    type: "verb",
    prompt: "De ___ allerede spist.",
    options: ["har", "hadde", "har vært"],
    answer: "har"
  },
  {
    type: "verb",
    prompt: "Han ___ bodd i Oslo i tre år.",
    options: ["har", "hadde", "var"],
    answer: "har"
  },

  // --- Adjectives ---
  {
    type: "adj",
    prompt: "Han har en ___ jakke.",
    options: ["blå", "blått", "blåe"],
    answer: "blå"
  },
  {
    type: "adj",
    prompt: "Vi bor i et ___ hus.",
    options: ["grønt", "grønn", "grønne"],
    answer: "grønt"
  },
  {
    type: "adj",
    prompt: "Jeg har en ___ genser.",
    options: ["varm", "varmt", "varme"],
    answer: "varm"
  },
  {
    type: "adj",
    prompt: "De bor i et ___ hus.",
    options: ["gammel", "gammelt", "gamle"],
    answer: "gammelt"
  },
  {
    type: "adj",
    prompt: "Barna har ___ klær.",
    options: ["rene", "rent", "ren"],
    answer: "rene"
  },
  {
    type: "adj",
    prompt: "Han kjøpte et ___ bord.",
    options: ["dyrt", "dyr", "dyre"],
    answer: "dyrt"
  },

  // --- Articles ---
  {
    type: "article",
    prompt: "___ eple er grønt.",
    options: ["Et", "En", "Ei"],
    answer: "Et"
  },
  {
    type: "article",
    prompt: "___ bok er ny.",
    options: ["Ei", "Et", "En"],
    answer: "Ei"
  },
  {
    type: "article",
    prompt: "___ bord er rundt.",
    options: ["En", "Et", "Ei"],
    answer: "Et"
  },
  {
    type: "article",
    prompt: "Jeg ser ___ mann i parken.",
    options: ["en", "ei", "et"],
    answer: "en"
  },
  {
    type: "article",
    prompt: "Vi har ___ vindu i stua.",
    options: ["en", "ei", "et"],
    answer: "et"
  },
  {
    type: "article",
    prompt: "Hun kjøper ___ bok i butikken.",
    options: ["en", "ei", "et"],
    answer: "ei"
  },
  {
    type: "article",
    prompt: "Hun leser ___ avis hver morgen.",
    options: ["ei", "en", "et"],
    answer: "ei"
  },
  {
    type: "article",
    prompt: "Jeg drikker ___ kaffe.",
    options: ["en", "et", "ei"],
    answer: "en"
  },

  // --- Word order ---
  {
    type: "order",
    prompt: "Sett sammen setningen:",
    words: ["går", "jeg", "til", "butikken"],
    answer: "jeg går til butikken"
  },
  {
    type: "order",
    prompt: "Sett sammen setningen:",
    words: ["nå", "jeg", "skal", "hjem"],
    answer: "jeg skal hjem nå"
  },
  {
    type: "order",
    prompt: "Sett sammen setningen (negasjon):",
    words: ["snakker", "jeg", "ikke", "fransk"],
    answer: "jeg snakker ikke fransk"
  },
  {
    type: "order",
    prompt: "Sett sammen setningen (V2-regelen):",
    words: ["I dag", "spiser", "jeg", "frokost"],
    answer: "I dag spiser jeg frokost"
  },
  {
    type: "order",
    prompt: "Sett sammen setningen (med 'ikke'):",
    words: ["vi", "spiser", "ikke", "kjøtt"],
    answer: "vi spiser ikke kjøtt"
  },
  {
    type: "order",
    prompt: "Sett sammen setningen (med modalverb):",
    words: ["må", "jeg", "stå", "opp", "tidlig"],
    answer: "jeg må stå opp tidlig"
  },
  {
    type: "order",
    prompt: "Sett sammen setningen (V2 med adverb):",
    words: ["hver dag", "drikker", "jeg", "kaffe"],
    answer: "hver dag drikker jeg kaffe"
  },

  // --- Modal verbs ---
  {
    type: "verb",
    prompt: "Jeg ___ gå nå.",
    options: ["må", "vil", "bør"],
    answer: "må"
  },
  {
    type: "verb",
    prompt: "___ du spille gitar?",
    options: ["Kan", "Vil", "Må"],
    answer: "Kan"
  },
  {
    type: "verb",
    prompt: "Han ___ ikke komme i dag.",
    options: ["kan", "bør", "må"],
    answer: "kan"
  },
  {
    type: "verb",
    prompt: "Vi ___ gjøre leksene før middag.",
    options: ["bør", "vil", "kan"],
    answer: "bør"
  },
  {
    type: "verb",
    prompt: "De ___ besøke bestemor i helgen.",
    options: ["skal", "må", "bør"],
    answer: "skal"
  },
  {
    type: "order",
    prompt: "Sett sammen setningen:",
    words: ["jeg", "vil", "spise", "is"],
    answer: "jeg vil spise is"
  },
  {
    type: "order",
    prompt: "Sett sammen setningen:",
    words: ["han", "skal", "dra", "på ferie"],
    answer: "han skal dra på ferie"
  },
  {
    type: "order",
    prompt: "Sett sammen setningen:",
    words: ["vi", "må", "trene", "mer"],
    answer: "vi må trene mer"
  },

  // --- Explanations ---
  {
    type: "article",
    prompt: "___ jente heter Maria.",
    options: ["Ei", "Et", "En"],
    answer: "Ei",
    explanation: "‘Jente’ er et hunkjønnsord – derfor bruker vi ‘ei’."
  },
  {
    type: "adj",
    prompt: "Han har et ___ rom.",
    options: ["stort", "stor", "store"],
    answer: "stort",
    explanation: "Adjektivet må være i intetkjønn fordi ‘rom’ er et ‘et’-ord."
  },
  {
    type: "verb",
    prompt: "I går ___ vi tidlig.",
    options: ["stod opp", "står opp", "har stått opp"],
    answer: "stod opp",
    explanation: "‘I går’ viser fortid – vi bruker preteritum."
  },
  {
    type: "order",
    prompt: "Sett sammen setningen (V2-regelen):",
    words: ["alltid", "spiser", "jeg", "frokost"],
    answer: "jeg spiser alltid frokost",
    explanation: "Verb skal stå på plass 2 i norske hovedsetninger."
  },
  // --- Adverbs ---
  {
  type: "order",
  prompt: "Sett sammen setningen (tid først):",
  words: ["I dag", "drar", "vi", "på", "tur"],
  answer: "I dag drar vi på tur"
},
{
  type: "order",
  prompt: "Sett sammen setningen (negasjon):",
  words: ["han", "kommer", "ikke", "hjem"],
  answer: "han kommer ikke hjem"
},
{
  type: "order",
  prompt: "Sett sammen setningen (adverb + verb):",
  words: ["hun", "snakker", "alltid", "sant"],
  answer: "hun snakker alltid sant"
},
{
  type: "verb",
  prompt: "Vi trener ___.",
  options: ["ofte", "ute", "ikke"],
  answer: "ofte"
},
{
  type: "verb",
  prompt: "Barna leker ___ i hagen.",
  options: ["der", "ute", "aldri"],
  answer: "ute"
},
{
  type: "verb",
  prompt: "Han synger ___.",
  options: ["pent", "sakte", "alltid"],
  answer: "pent"
},
{
  type: "verb",
  prompt: "Jeg er ___ hjemme på kvelden.",
  options: ["ofte", "fort", "sant"],
  answer: "ofte"
},
{
  type: "verb",
  prompt: "Hun løper veldig ___.",
  options: ["fort", "ofte", "aldri"],
  answer: "fort"
},
{
  type: "verb",
  prompt: "De er ___ på jobb nå.",
  options: ["ikke", "ute", "alltid"],
  answer: "ikke"
},
{
  type: "verb",
  prompt: "Vi er ___ hjemme om kvelden.",
  options: ["ofte", "sakte", "der"],
  answer: "ofte"
}
// --- drag drop ---
  {
  type: "drag",
  prompt: "Sett ordene i riktig rekkefølge:",
  words: ["jeg", "ikke", "spiser", "kjøtt"],
  answer: "jeg spiser ikke kjøtt"
},
{
  type: "drag",
  prompt: "Sett ordene i riktig rekkefølge:",
  words: ["vi", "alltid", "har", "brød", "til", "frokost"],
  answer: "vi har alltid brød til frokost"
},
{
  type: "drag",
  prompt: "Sett ordene i riktig rekkefølge:",
  words: ["hun", "kommer", "aldri", "for", "sent"],
  answer: "hun kommer aldri for sent"
},
{
  type: "drag",
  prompt: "Sett ordene i riktig rekkefølge:",
  words: ["jeg", "skal", "nå", "dra", "hjem"],
  answer: "jeg skal dra hjem nå"
},
{
  type: "drag",
  prompt: "Sett ordene i riktig rekkefølge:",
  words: ["de", "jobber", "ofte", "i", "helgene"],
  answer: "de jobber ofte i helgene"
},
{
  type: "drag",
  prompt: "Sett ordene i riktig rekkefølge:",
  words: ["han", "går", "sakte", "til", "skolen"],
  answer: "han går sakte til skolen"
}
// --- Prepositions ---
  {
  type: "verb",
  prompt: "Boka ligger ___ bordet.",
  options: ["på", "under", "i"],
  answer: "på"
},
{
  type: "verb",
  prompt: "Katten er ___ stolen.",
  options: ["under", "på", "bak"],
  answer: "under"
},
{
  type: "verb",
  prompt: "Vi møtes ___ skolen.",
  options: ["ved", "i", "under"],
  answer: "ved"
},
{
  type: "verb",
  prompt: "Jeg går ___ butikken.",
  options: ["til", "på", "fra"],
  answer: "til"
},
{
  type: "verb",
  prompt: "Han kommer ___ jobb nå.",
  options: ["fra", "til", "på"],
  answer: "fra"
},
{
  type: "verb",
  prompt: "De går ___ parken.",
  options: ["gjennom", "under", "over"],
  answer: "gjennom"
},
{
  type: "verb",
  prompt: "Vi skal reise ___ Norge i sommer.",
  options: ["til", "på", "i"],
  answer: "til"
},
{
  type: "verb",
  prompt: "Barna sitter ___ bordet.",
  options: ["rundt", "gjennom", "under"],
  answer: "rundt"
},
{
  type: "verb",
  prompt: "Hun bor ___ byen.",
  options: ["i", "på", "til"],
  answer: "i"
},
{
  type: "verb",
  prompt: "Han står ___ meg i køen.",
  options: ["bak", "foran", "ved"],
  answer: "bak"
},
{
  type: "verb",
  prompt: "Jeg reiser ___ jobb klokka åtte.",
  options: ["på", "til", "fra"],
  answer: "til"
},
{
  type: "verb",
  prompt: "Vi drar på ferie ___ sommeren.",
  options: ["om", "i", "på"],
  answer: "om"
},
{
  type: "verb",
  prompt: "Han sover ___ senga.",
  options: ["i", "på", "ved"],
  answer: "i"
},
{
  type: "order",
  prompt: "Sett sammen setningen:",
  words: ["jeg", "går", "til", "skolen"],
  answer: "jeg går til skolen"
},
{
  type: "order",
  prompt: "Sett sammen setningen:",
  words: ["boka", "ligger", "på", "bordet"],
  answer: "boka ligger på bordet"
}
// --- Prepositions ---
  {
  type: "verb",
  prompt: "Jeg har ___ penger i dag.",
  options: ["mye", "mange", "flere"],
  answer: "mye"
},
{
  type: "verb",
  prompt: "Hun kjenner ___ mennesker i byen.",
  options: ["mange", "mye", "flere"],
  answer: "mange"
},
{
  type: "verb",
  prompt: "Vi har bare ___ melk igjen.",
  options: ["litt", "noen", "få"],
  answer: "litt"
},
{
  type: "verb",
  prompt: "Har du ___ spørsmål?",
  options: ["noen", "noe", "mye"],
  answer: "noen"
},
{
  type: "verb",
  prompt: "De har ___ venner i Oslo.",
  options: ["mange", "mye", "litt"],
  answer: "mange"
},
{
  type: "verb",
  prompt: "Vi trenger ___ hjelp med leksene.",
  options: ["litt", "noen", "flere"],
  answer: "litt"
},
{
  type: "verb",
  prompt: "Jeg har ___ å gjøre i dag.",
  options: ["mye", "mange", "få"],
  answer: "mye"
},
{
  type: "verb",
  prompt: "___ vet svaret.",
  options: ["Alle", "Alt", "Ingen"],
  answer: "Alle"
},
{
  type: "verb",
  prompt: "Jeg ser ___ på bordet.",
  options: ["ingenting", "ingen", "noen"],
  answer: "ingenting"
},
{
  type: "verb",
  prompt: "Han har ___ venner enn før.",
  options: ["flere", "færre", "mye"],
  answer: "flere"
}
// --- Past Tense ---
{
  type: "verb",
  prompt: "I går ___ jeg hjemme.",
  options: ["var", "er", "har vært"],
  answer: "var"
},
{
  type: "verb",
  prompt: "Vi ___ pizza i går kveld.",
  options: ["spiste", "spiser", "har spist"],
  answer: "spiste"
},
{
  type: "verb",
  prompt: "Han ___ til jobb med buss i morges.",
  options: ["dro", "drar", "har dratt"],
  answer: "dro"
},
{
  type: "verb",
  prompt: "___ du filmen i går?",
  options: ["Så", "Ser", "Har sett"],
  answer: "Så"
},
{
  type: "verb",
  prompt: "De ___ på hytta i helgen.",
  options: ["var", "er", "har vært"],
  answer: "var"
},
{
  type: "verb",
  prompt: "Jeg ___ et brev til henne.",
  options: ["skrev", "skriver", "har skrevet"],
  answer: "skrev"
},
{
  type: "verb",
  prompt: "Vi ___ mye i fjor sommer.",
  options: ["reiste", "reiser", "har reist"],
  answer: "reiste"
},
{
  type: "verb",
  prompt: "Hun ___ kaffe før møtet.",
  options: ["drakk", "drikker", "har drukket"],
  answer: "drakk"
},
{
  type: "verb",
  prompt: "Barna ___ ute hele dagen.",
  options: ["lekte", "leker", "har lekt"],
  answer: "lekte"
},
{
  type: "verb",
  prompt: "Jeg ___ nyheter på TV i går.",
  options: ["så", "ser", "har sett"],
  answer: "så"
},
{
  type: "order",
  prompt: "Sett sammen setningen:",
  words: ["jeg", "sto", "opp", "klokka", "sju"],
  answer: "jeg sto opp klokka sju"
},
{
  type: "order",
  prompt: "Sett sammen setningen:",
  words: ["vi", "gikk", "på", "kino"],
  answer: "vi gikk på kino"
},
{
  type: "order",
  prompt: "Sett sammen setningen:",
  words: ["han", "kjøpte", "en", "jakke"],
  answer: "han kjøpte en jakke"
},
{
  type: "verb",
  prompt: "Hun ___ til Spania i fjor.",
  options: ["reiste", "reiser", "har reist"],
  answer: "reiste"
},
{
  type: "verb",
  prompt: "De ___ hjemme i helgen.",
  options: ["ble", "blir", "har blitt"],
  answer: "ble"
},
{
  type: "verb",
  prompt: "Jeg ___ en ny bok i helga.",
  options: ["begynte", "begynner", "har begynt"],
  answer: "begynte"
},
{
  type: "verb",
  prompt: "Vi ___ ikke så mye den dagen.",
  options: ["gjorde", "gjør", "har gjort"],
  answer: "gjorde"
},
{
  type: "verb",
  prompt: "___ du med foreldrene dine i går?",
  options: ["Snakket", "Snakker", "Har snakket"],
  answer: "Snakket"
},
{
  type: "verb",
  prompt: "De ___ sammen hele kvelden.",
  options: ["danset", "danser", "har danset"],
  answer: "danset"
},
{
  type: "verb",
  prompt: "Jeg ___ norsk for et år siden.",
  options: ["begynte", "begynner", "har begynt"],
  answer: "begynte"
}


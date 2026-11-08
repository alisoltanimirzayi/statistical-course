/* Generated from the complete Chapter 04 manuscripts. */
const POINTS_CHAPTERS = {
  "en": {
    "title": "The Problem of Points — The Value of an Unfinished Game",
    "hero": "A game stops. Who owns the future that will never be played?",
    "intro": "Counting possible outcomes made uncertainty calculable. Dividing the prize of an interrupted game demanded a further step: assign a value to what might have happened. This step helped turn the arithmetic of chance into a theory of expectation.",
    "journey": "Chapter 01 asked *whom do we count?* Chapter 02 asked *how do we compare populations?* Chapter 03 asked *how do we measure the chance of an event?* **Here we ask what an uncertain future is worth.** These chapters follow a teaching sequence, not an assertion that European discoveries happened in that exact chronological order: population statistics and probability evolved in overlapping traditions.",
    "readingTime": "23–27 min",
    "sections": [
      {
        "title": "The wager that could no longer be finished",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Imagine two players who have agreed to a game. Each deposits 40 coins, making an 80-coin prize. They will play fair, independent rounds until either player has won three rounds. Player A has already won two; Player B has won one. Before the next round can be played, someone calls the game off. They cannot simply finish it. Who should receive the 80 coins?",
            "html": "<p>Imagine two players who have agreed to a game. Each deposits 40 coins, making an 80-coin prize. They will play fair, independent rounds until either player has won three rounds. Player A has already won two; Player B has won one. Before the next round can be played, someone calls the game off. They cannot simply finish it. Who should receive the 80 coins?</p>"
          },
          {
            "kind": "paragraph",
            "text": "The question appears deceptively small, yet it asks something new. If the game had been completed, the winner would take everything. But the fact that A is ahead does not mean A has already won. Giving A all 80 ignores B's remaining chance; splitting it 40–40 ignores A's advantage. Dividing the prize according to rounds already won—two thirds to A and one third to B—looks reasonable, but it does not take account of what remains to be played. What ought to count is not just the past score, but the different futures still open to each player.",
            "html": "<p>The question appears deceptively small, yet it asks something new. If the game had been completed, the winner would take everything. But the fact that A is ahead does not mean A has already won. Giving A all 80 ignores B's remaining chance; splitting it 40–40 ignores A's advantage. Dividing the prize according to rounds already won—two thirds to A and one third to B—looks reasonable, but it does not take account of what remains to be played. What ought to count is not just the past score, but the different futures still open to each player.</p>"
          },
          {
            "kind": "paragraph",
            "text": "Problems of this kind circulated among late-medieval and Renaissance writers long before 1654. Luca Pacioli discussed a division-of-stakes question in his 1494 *Summa*; Tartaglia and Cardano also worked on related problems. The problem therefore was not invented by Pascal or Fermat. What became distinctive in the mid-seventeenth century was the drive to make the value of the remaining possibilities exact and generalizable, rather than relying on a plausible-looking proportional division. A dispute over a few coins became a way of asking whether an **unrealized possibility could have a defensible present value** [S1–S3].",
            "html": "<p>Problems of this kind circulated among late-medieval and Renaissance writers long before 1654. Luca Pacioli discussed a division-of-stakes question in his 1494 <em>Summa</em>; Tartaglia and Cardano also worked on related problems. The problem therefore was not invented by Pascal or Fermat. What became distinctive in the mid-seventeenth century was the drive to make the value of the remaining possibilities exact and generalizable, rather than relying on a plausible-looking proportional division. A dispute over a few coins became a way of asking whether an <strong>unrealized possibility could have a defensible present value</strong> <sup><a href=\"#points-source-1\">[S1]</a> <a href=\"#points-source-2\">[S2]</a> <a href=\"#points-source-3\">[S3]</a></sup>.</p>"
          },
          {
            "kind": "paragraph",
            "text": "There was a broader intellectual setting. Commercial exchange, annuities, insurance arrangements, wagers, and contracts all involve payments now and outcomes later. Fairness in such arrangements had been discussed morally and legally; mathematical calculation could not replace those concerns, but it could clarify one part of them. What would the *chance* of the final prize be worth under stated rules? In France, the problem came to Blaise Pascal (1623–1662), apparently in connection with the gambler known as the Chevalier de Méré. Pascal and Pierre de Fermat (1601–1665), a lawyer and mathematician in Toulouse, exchanged letters in 1654 to resolve it. Not every letter survives, and the original problem should not be dramatized as a verbatim conversation around a table [S1–S4].",
            "html": "<p>There was a broader intellectual setting. Commercial exchange, annuities, insurance arrangements, wagers, and contracts all involve payments now and outcomes later. Fairness in such arrangements had been discussed morally and legally; mathematical calculation could not replace those concerns, but it could clarify one part of them. What would the <em>chance</em> of the final prize be worth under stated rules? In France, the problem came to Blaise Pascal (1623–1662), apparently in connection with the gambler known as the Chevalier de Méré. Pascal and Pierre de Fermat (1601–1665), a lawyer and mathematician in Toulouse, exchanged letters in 1654 to resolve it. Not every letter survives, and the original problem should not be dramatized as a verbatim conversation around a table <sup><a href=\"#points-source-1\">[S1]</a> <a href=\"#points-source-2\">[S2]</a> <a href=\"#points-source-3\">[S3]</a> <a href=\"#points-source-4\">[S4]</a></sup>.</p>"
          },
          {
            "kind": "gallery",
            "text": "*[Insert the genuine letter/reproduction and two documented historical-figure portraits here; the scene is historical reconstruction, not a photo or a recorded meeting.]*",
            "html": "<div data-points-gallery></div>"
          }
        ]
      },
      {
        "title": "The missing rounds, not the rounds already played",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "Return to our two players. A needs **one more win** to take the prize. B needs **two**. Suppose every further round gives either player a 50% chance of winning, independently of earlier rounds. The next round decides a great deal. If A wins it, the entire game ends immediately. If B wins, the score becomes 2–2, and then the final round is fair again. A therefore has a one-half chance of winning immediately and an additional one-half times one-half chance of winning after a B victory. In modern symbols:",
            "html": "<p>Return to our two players. A needs <strong>one more win</strong> to take the prize. B needs <strong>two</strong>. Suppose every further round gives either player a 50% chance of winning, independently of earlier rounds. The next round decides a great deal. If A wins it, the entire game ends immediately. If B wins, the score becomes 2–2, and then the final round is fair again. A therefore has a one-half chance of winning immediately and an additional one-half times one-half chance of winning after a B victory. In modern symbols:</p>"
          },
          {
            "kind": "formula",
            "text": "\\[\nP(A\\text{ eventually wins})=\\tfrac12+\\tfrac12\\cdot\\tfrac12=\\tfrac34.\n\\]",
            "html": "<div class=\"points-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\" dir=\"ltr\"><mi>P</mi><mo>(</mo><mtext>A eventually wins</mtext><mo>)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>×</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>=</mo><mfrac><mn>3</mn><mn>4</mn></mfrac></math></div>"
          },
          {
            "kind": "paragraph",
            "text": "Likewise, B can win only by taking **both** the next two rounds:",
            "html": "<p>Likewise, B can win only by taking <strong>both</strong> the next two rounds:</p>"
          },
          {
            "kind": "formula",
            "text": "\\[\nP(B\\text{ eventually wins})=\\tfrac12\\cdot\\tfrac12=\\tfrac14.\n\\]",
            "html": "<div class=\"points-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\" dir=\"ltr\"><mi>P</mi><mo>(</mo><mtext>B eventually wins</mtext><mo>)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>×</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>4</mn></mfrac></math></div>"
          },
          {
            "kind": "paragraph",
            "text": "This is a change of viewpoint. A's two wins in the past are not two thirds of the total prize. They specify a **state of the unfinished game**, from which we calculate future winning chances. The fair division of an 80-coin prize, on the conventional monetary-expectation criterion, becomes **60 coins to A and 20 to B**. The prize is divided according to the probabilities of ultimately winning, not according to the proportion of completed rounds.",
            "html": "<p>This is a change of viewpoint. A's two wins in the past are not two thirds of the total prize. They specify a <strong>state of the unfinished game</strong>, from which we calculate future winning chances. The fair division of an 80-coin prize, on the conventional monetary-expectation criterion, becomes <strong>60 coins to A and 20 to B</strong>. The prize is divided according to the probabilities of ultimately winning, not according to the proportion of completed rounds.</p>"
          },
          {
            "kind": "paragraph",
            "text": "This result depends on rules stated in advance: the rounds must be genuinely fair, independent, and the winner must take the entire 80. If player A has a skill advantage in each round, the 60–20 division need not be fair. And if the players value risk differently, the amount each *would accept* to walk away could diverge from the mathematical expected monetary value. The historical breakthrough was a method of making one kind of fairness precise, not a timeless answer to every ethical question about gambling.",
            "html": "<p>This result depends on rules stated in advance: the rounds must be genuinely fair, independent, and the winner must take the entire 80. If player A has a skill advantage in each round, the 60–20 division need not be fair. And if the players value risk differently, the amount each <em>would accept</em> to walk away could diverge from the mathematical expected monetary value. The historical breakthrough was a method of making one kind of fairness precise, not a timeless answer to every ethical question about gambling.</p>"
          },
          {
            "kind": "paragraph",
            "text": "We can express the same result without enumerating every potential future. At a tie of 2–2, A's claim to the 80 coins is worth 40: each player has an equal chance of the decisive win. At the earlier score 2–1, the next round gives A either 80 (if A wins) or a continuation worth 40 (if B wins). Hence the value is",
            "html": "<p>We can express the same result without enumerating every potential future. At a tie of 2–2, A's claim to the 80 coins is worth 40: each player has an equal chance of the decisive win. At the earlier score 2–1, the next round gives A either 80 (if A wins) or a continuation worth 40 (if B wins). Hence the value is</p>"
          },
          {
            "kind": "formula",
            "text": "\\[\nV(2,1)=\\tfrac12(80)+\\tfrac12(40)=60.\n\\]",
            "html": "<div class=\"points-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\" dir=\"ltr\"><mi>V</mi><mo>(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo>)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>×</mo><mn>80</mn><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>×</mo><mn>40</mn><mo>=</mo><mn>60</mn></math></div>"
          },
          {
            "kind": "paragraph",
            "text": "This way of **working backward from possible futures** is closely associated with Pascal's recursive reasoning; Fermat approached the problem through systematic enumeration of equiprobable continuations. In simple cases the two methods agree exactly, though historically they sparked careful discussion about how outcomes ought to be counted when a game might end before all hypothetical rounds are played [S1, S3, S4].",
            "html": "<p>This way of <strong>working backward from possible futures</strong> is closely associated with Pascal's recursive reasoning; Fermat approached the problem through systematic enumeration of equiprobable continuations. In simple cases the two methods agree exactly, though historically they sparked careful discussion about how outcomes ought to be counted when a game might end before all hypothetical rounds are played <sup><a href=\"#points-source-1\">[S1]</a> <a href=\"#points-source-3\">[S3]</a> <a href=\"#points-source-4\">[S4]</a></sup>.</p>"
          }
        ]
      },
      {
        "title": "Watch the future branches become a price",
        "blocks": [
          {
            "kind": "lab",
            "text": "*[Interactive placement: insert `PointsLab` immediately here. The full functioning module is in `interactive/points-lab.js` and `points-lab.css`.]*",
            "html": "<div id=\"chapter04PointsLab\"></div>"
          },
          {
            "kind": "paragraph",
            "text": "The interactive opens at **first to 3 wins, current score 2–1, 80 coins, fair rounds**. It displays a decision tree, current state, each player's chance of eventual victory, and the resulting division. Learners should switch between **“Unplayed futures”** and **“Work backward”**, play simulated completions, and try changing the score and the chance of A winning each round. This is not a decorative calculator: it is the intellectual hinge of the chapter.",
            "html": "<p>The interactive opens at <strong>first to 3 wins, current score 2–1, 80 coins, fair rounds</strong>. It displays a decision tree, current state, each player's chance of eventual victory, and the resulting division. Learners should switch between <strong>“Unplayed futures”</strong> and <strong>“Work backward”</strong>, play simulated completions, and try changing the score and the chance of A winning each round. This is not a decorative calculator: it is the intellectual hinge of the chapter.</p>"
          },
          {
            "kind": "paragraph",
            "text": "**Pause here and predict:** Without running the simulation, what would happen if the score became 2–2? Both claims should become 40. What if B instead needs only one further win and A needs two? The advantage should reverse. Watch the value change while the coins on the table remain 80.",
            "html": "<p><strong>Pause here and predict:</strong> Without running the simulation, what would happen if the score became 2–2? Both claims should become 40. What if B instead needs only one further win and A needs two? The advantage should reverse. Watch the value change while the coins on the table remain 80.</p>"
          },
          {
            "kind": "paragraph",
            "text": "One might count all possible two-round sequences: AA, AB, BA, BB. Three of these sequences count as wins for A and one for B, if we agree to imagine “unused” flips after an early victory. The artificially extended sequences are a bookkeeping device; the real game stops when someone reaches the target. As long as each complete two-round string has equal probability and unused flips do not alter the previously determined winner, this method produces the same three-quarters. But it is a common mistake to treat each *path that stops at a different time* as equally likely. A one-round ending and a two-round ending need not have equal probability.",
            "html": "<p>One might count all possible two-round sequences: AA, AB, BA, BB. Three of these sequences count as wins for A and one for B, if we agree to imagine “unused” flips after an early victory. The artificially extended sequences are a bookkeeping device; the real game stops when someone reaches the target. As long as each complete two-round string has equal probability and unused flips do not alter the previously determined winner, this method produces the same three-quarters. But it is a common mistake to treat each <em>path that stops at a different time</em> as equally likely. A one-round ending and a two-round ending need not have equal probability.</p>"
          },
          {
            "kind": "paragraph",
            "text": "There is an important difference between an exact probability and the outcomes of playing the game many times. If A wins 75 of 100 simulated completions, that happens to match the theoretical chance; another set of 100 may produce 69 or 81. Simulation shows how a probabilistic model behaves, but the 60–20 calculation comes from the stated rules, not from a lucky batch of simulated trials. This continues the distinction introduced in Chapter 03 between mathematical chance and empirical frequency.",
            "html": "<p>There is an important difference between an exact probability and the outcomes of playing the game many times. If A wins 75 of 100 simulated completions, that happens to match the theoretical chance; another set of 100 may produce 69 or 81. Simulation shows how a probabilistic model behaves, but the 60–20 calculation comes from the stated rules, not from a lucky batch of simulated trials. This continues the distinction introduced in Chapter 03 between mathematical chance and empirical frequency.</p>"
          }
        ]
      },
      {
        "title": "From one interrupted game to a rule for uncertain value",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "What has really been calculated? Not a prediction of who must win. We have attached a monetary number to a position whose payoff is uncertain. Let X be the eventual amount received. For any position with mutually exclusive outcomes x₁, x₂, … and probabilities p₁, p₂, …, its **expected monetary value** is",
            "html": "<p>What has really been calculated? Not a prediction of who must win. We have attached a monetary number to a position whose payoff is uncertain. Let X be the eventual amount received. For any position with mutually exclusive outcomes x₁, x₂, … and probabilities p₁, p₂, …, its <strong>expected monetary value</strong> is</p>"
          },
          {
            "kind": "formula",
            "text": "\\[\nE[X]=\\sum_i p_i x_i.\n\\]",
            "html": "<div class=\"points-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\" dir=\"ltr\"><mi>E</mi><mo>[</mo><mi>X</mi><mo>]</mo><mo>=</mo><munder><mo>∑</mo><mi>i</mi></munder><msub><mi>p</mi><mi>i</mi></msub><msub><mi>x</mi><mi>i</mi></msub></math></div>"
          },
          {
            "kind": "paragraph",
            "text": "For A, X is 80 with probability 3/4 and 0 with probability 1/4, so E[X] = (3/4)×80 + (1/4)×0 = **60**. The number 60 is not the amount A is guaranteed to get if play continues. It is the probability-weighted value of the possible payoffs. It is also the price at which, under assumptions of linear monetary valuation and no transaction costs, a neutral buyer and seller can regard the position as fairly exchangeable.",
            "html": "<p>For A, X is 80 with probability 3/4 and 0 with probability 1/4, so E[X] = (3/4)×80 + (1/4)×0 = <strong>60</strong>. The number 60 is not the amount A is guaranteed to get if play continues. It is the probability-weighted value of the possible payoffs. It is also the price at which, under assumptions of linear monetary valuation and no transaction costs, a neutral buyer and seller can regard the position as fairly exchangeable.</p>"
          },
          {
            "kind": "paragraph",
            "text": "This gives us a critical distinction. **Probability** answers “How likely is an outcome?” **Expectation** answers “What is the average value of the payoffs, weighted by their chances?” A rare but enormous prize may have a larger expected payout than a common but small one. Conversely, a positive expected value does not mean a wager is sensible for someone who cannot tolerate a possible loss. Evaluating risk, welfare, and utility requires ideas beyond this early rule.",
            "html": "<p>This gives us a critical distinction. <strong>Probability</strong> answers “How likely is an outcome?” <strong>Expectation</strong> answers “What is the average value of the payoffs, weighted by their chances?” A rare but enormous prize may have a larger expected payout than a common but small one. Conversely, a positive expected value does not mean a wager is sensible for someone who cannot tolerate a possible loss. Evaluating risk, welfare, and utility requires ideas beyond this early rule.</p>"
          },
          {
            "kind": "paragraph",
            "text": "There is also an elegant connection to our earlier chapters. A census creates a counted population; a rate relates events to an exposure; a probability assigns weights to possible outcomes; and an expectation uses those weights to summarize a quantity that has not yet been observed. They are not one single chronological chain of invention. They are successive **logical moves** from counting, to comparison, to uncertainty, to valuation. The learner is now at the fourth move.",
            "html": "<p>There is also an elegant connection to our earlier chapters. A census creates a counted population; a rate relates events to an exposure; a probability assigns weights to possible outcomes; and an expectation uses those weights to summarize a quantity that has not yet been observed. They are not one single chronological chain of invention. They are successive <strong>logical moves</strong> from counting, to comparison, to uncertainty, to valuation. The learner is now at the fourth move.</p>"
          }
        ]
      },
      {
        "title": "Why these letters mattered—and what they did not yet achieve",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "The problem of points offered a precise answer to a finite, well-defined game. But its limits appear as soon as we leave the tidy table. Are the players genuinely equally skilled? Does the outcome of one round affect the next? What if a player's chance of winning is unknown? How should we act when a possible loss would be ruinous? Mathematical expectation cannot settle those questions without assumptions or additional concepts.",
            "html": "<p>The problem of points offered a precise answer to a finite, well-defined game. But its limits appear as soon as we leave the tidy table. Are the players genuinely equally skilled? Does the outcome of one round affect the next? What if a player's chance of winning is unknown? How should we act when a possible loss would be ruinous? Mathematical expectation cannot settle those questions without assumptions or additional concepts.</p>"
          },
          {
            "kind": "paragraph",
            "text": "Still, the 1654 correspondence had an unusually productive afterlife. Pascal's and Fermat's reasoning linked enumeration, recursion, combinatorial methods, and the valuation of uncertain positions. The correspondence circulated before a full textbook account existed. In 1657 the Dutch mathematician **Christiaan Huygens (1629–1695)** published *De ratiociniis in ludo aleae* (On Reasoning in Games of Chance), in Frans van Schooten's *Exercitationes mathematicae*. It is commonly described as the **first printed treatise devoted to probability**. Huygens explicitly explained how to determine the worth of a chance in a game and how to divide a stake if players agree to stop [S5–S7].",
            "html": "<p>Still, the 1654 correspondence had an unusually productive afterlife. Pascal's and Fermat's reasoning linked enumeration, recursion, combinatorial methods, and the valuation of uncertain positions. The correspondence circulated before a full textbook account existed. In 1657 the Dutch mathematician <strong>Christiaan Huygens (1629–1695)</strong> published <em>De ratiociniis in ludo aleae</em> (On Reasoning in Games of Chance), in Frans van Schooten's <em>Exercitationes mathematicae</em>. It is commonly described as the <strong>first printed treatise devoted to probability</strong>. Huygens explicitly explained how to determine the worth of a chance in a game and how to divide a stake if players agree to stop <sup><a href=\"#points-source-5\">[S5]</a> <a href=\"#points-source-6\">[S6]</a> <a href=\"#points-source-7\">[S7]</a></sup>.</p>"
          },
          {
            "kind": "source",
            "html": "<div data-points-huygens></div>"
          },
          {
            "kind": "paragraph",
            "text": "From there the idea expanded rather than disappearing. Jakob Bernoulli's *Ars Conjectandi* (published 1713) connected chance with repeated observations; de Moivre and Laplace made combinatorial probability and expectation increasingly powerful; actuarial practice made valuation of uncertain future payments a practical profession. Later probability and statistical theory placed expected values within broader mathematical frameworks, while decision theory and economics asked when monetary expectation was insufficient to represent what people actually prefer.",
            "html": "<p>From there the idea expanded rather than disappearing. Jakob Bernoulli's <em>Ars Conjectandi</em> (published 1713) connected chance with repeated observations; de Moivre and Laplace made combinatorial probability and expectation increasingly powerful; actuarial practice made valuation of uncertain future payments a practical profession. Later probability and statistical theory placed expected values within broader mathematical frameworks, while decision theory and economics asked when monetary expectation was insufficient to represent what people actually prefer.</p>"
          },
          {
            "kind": "paragraph",
            "text": "The enduring achievement is therefore not a universal recipe for gambling profits. It is the realization that **future possibilities can have a present mathematical value without requiring certainty about which future will occur**. Our unfinished game stops here, but its intellectual descendants do not. A natural next question follows: when possibilities are too many to count one by one, or when the chance of each result is unknown, what kind of mathematical model can represent them—and how can observations teach us which model to trust? That question leads toward probability distributions, repeated trials, and eventually inference.",
            "html": "<p>The enduring achievement is therefore not a universal recipe for gambling profits. It is the realization that <strong>future possibilities can have a present mathematical value without requiring certainty about which future will occur</strong>. Our unfinished game stops here, but its intellectual descendants do not. A natural next question follows: when possibilities are too many to count one by one, or when the chance of each result is unknown, what kind of mathematical model can represent them—and how can observations teach us which model to trust? That question leads toward probability distributions, repeated trials, and eventually inference.</p>"
          }
        ]
      }
    ],
    "tails": [
      {
        "title": "Brief reflection",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "1. With the score 2–1 in a fair first-to-three game, why is splitting the prize 2:1 not correct? State the winning probability of each player.\n2. A has a 70% chance to win each independent round. At 2–1, what is A's chance to win the game? (Answer: 0.7 + 0.3×0.7 = **0.91**, so 72.8 of 80 coins.)\n3. If a 60-coin expected payout is available, does every person necessarily value the position at 60 coins? Explain the role of risk preference.",
            "html": "<ol><li>With the score 2–1 in a fair first-to-three game, why is splitting the prize 2:1 not correct? State the winning probability of each player.</li><li>A has a 70% chance to win each independent round. At 2–1, what is A's chance to win the game? (Answer: 0.7 + 0.3×0.7 = <strong>0.91</strong>, so 72.8 of 80 coins.)</li><li>If a 60-coin expected payout is available, does every person necessarily value the position at 60 coins? Explain the role of risk preference.</li></ol>"
          },
          {
            "kind": "paragraph",
            "text": "**Answer guidance:** 1. The score is the state, not the payout ratio; A = 3/4, B = 1/4, giving 60 and 20. 2. A wins next round or survives a B win and wins the deciding round. 3. No; mathematical monetary expectation is not the same as personal willingness to pay or utility.",
            "html": "<p><strong>Answer guidance:</strong> 1. The score is the state, not the payout ratio; A = 3/4, B = 1/4, giving 60 and 20. 2. A wins next round or survives a B win and wins the deciding round. 3. No; mathematical monetary expectation is not the same as personal willingness to pay or utility.</p>"
          }
        ]
      },
      {
        "title": "Key vocabulary",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "*Problem of points; interrupted game; independent rounds; sample space; probability of eventual victory; expected monetary value; backward recursion; fair division; risk preference.*",
            "html": "<p><em>Problem of points; interrupted game; independent rounds; sample space; probability of eventual victory; expected monetary value; backward recursion; fair division; risk preference.</em></p>"
          }
        ]
      },
      {
        "title": "Primary and historical references",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "- **[S1]** Pascal–Fermat correspondence, 1654, translated text and source discussion: https://www.york.ac.uk/depts/maths/histstat/pascal.htm\n- **[S2]** History of the earlier problem and manuscripts: https://www.gtfp.cs.rhul.ac.uk/pulskamp/Problem_of_points/points.html\n- **[S3]** Anders Hald, *A History of Probability and Statistics and Their Applications Before 1750* (1990), chapter on Pascal and Fermat: https://doi.org/10.1002/0471725161.ch5\n- **[S4]** Original-correspondence translation: https://www.probabilityandfinance.com/pulskamp/Pascal/Sources/pasfer.pdf\n- **[S5]** Huygens, *De ratiociniis in ludo aleae* (1657), digitized original, ETH-Bibliothek: https://www.e-rara.ch/zut/content/titleinfo/2486116\n- **[S6]** Huygens's original treatise in English translation: https://math.dartmouth.edu/~doyle/docs/huygens/huygens.pdf\n- **[S7]** Ian Hacking, *The Emergence of Probability*, chapter “Expectation (1657)”: https://doi.org/10.1017/CBO9780511817557.012",
            "html": "<p>- <strong><sup><a href=\"#points-source-1\">[S1]</a></sup></strong> Pascal–Fermat correspondence, 1654, translated text and source discussion: https://www.york.ac.uk/depts/maths/histstat/pascal.htm\n- <strong><sup><a href=\"#points-source-2\">[S2]</a></sup></strong> History of the earlier problem and manuscripts: https://www.gtfp.cs.rhul.ac.uk/pulskamp/Problem_of_points/points.html\n- <strong><sup><a href=\"#points-source-3\">[S3]</a></sup></strong> Anders Hald, <em>A History of Probability and Statistics and Their Applications Before 1750</em> (1990), chapter on Pascal and Fermat: https://doi.org/10.1002/0471725161.ch5\n- <strong><sup><a href=\"#points-source-4\">[S4]</a></sup></strong> Original-correspondence translation: https://www.probabilityandfinance.com/pulskamp/Pascal/Sources/pasfer.pdf\n- <strong><sup><a href=\"#points-source-5\">[S5]</a></sup></strong> Huygens, <em>De ratiociniis in ludo aleae</em> (1657), digitized original, ETH-Bibliothek: https://www.e-rara.ch/zut/content/titleinfo/2486116\n- <strong><sup><a href=\"#points-source-6\">[S6]</a></sup></strong> Huygens's original treatise in English translation: https://math.dartmouth.edu/~doyle/docs/huygens/huygens.pdf\n- <strong><sup><a href=\"#points-source-7\">[S7]</a></sup></strong> Ian Hacking, <em>The Emergence of Probability</em>, chapter “Expectation (1657)”: https://doi.org/10.1017/CBO9780511817557.012</p>"
          }
        ]
      }
    ]
  },
  "fa": {
    "title": "مسئلهٔ تقسیم جایزه: ارزش بازیِ ناتمام",
    "hero": "بازی نیمه‌تمام مانده است؛ سهم هر بازیکن از آینده‌ای که رخ نخواهد داد چقدر است؟",
    "intro": "در فصل پیش آموختیم که می‌توان احتمال رخدادهای نامعلوم را حساب کرد. اما اگر نتیجهٔ یک بازی هنوز معلوم نیست و بازی ناگهان متوقف می‌شود، چه کسی چه سهمی از جایزه دارد؟ تلاش برای پاسخ‌دادن به همین پرسش، ریاضیات احتمال را یک گام به مفهوم «امید ریاضی» نزدیک کرد.",
    "journey": "فصل نخست پرسید «چه کسانی و چه چیزهایی را می‌شماریم؟»؛ فصل دوم «جمعیت‌ها را چگونه مقایسه می‌کنیم؟»؛ فصل سوم «احتمال یک رویداد را چگونه به‌دست می‌آوریم؟» و اکنون پرسش فصل چهارم این است: **چگونه می‌توان برای آینده‌ای نامعلوم، ارزشی در زمان حال تعیین کرد؟** این توالی، مسیر یادگیری ماست؛ نباید آن را عینِ ترتیب زمانی همهٔ کشفیات آماری تصور کرد. سنت‌های آمار جمعیتی و حساب احتمال در دوره‌هایی هم‌زمان و در مسیرهایی متفاوت رشد کرده‌اند.",
    "readingTime": "۲۳ تا ۲۷ دقیقه",
    "sections": [
      {
        "title": "وقتی بازی پیش از تعیین برنده متوقف می‌شود",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "دو نفر را در نظر بگیرید که قرار گذاشته‌اند بر سر یک جایزه بازی کنند. هر کدام ۴۰ سکه گذاشته‌اند و مجموع جایزه ۸۰ سکه است. قرار است چند دور بازی کنند و هرکس زودتر **سه دور** را ببرد، تمام جایزه را بردارد. همهٔ دورها منصفانه‌اند؛ یعنی احتمال برد هر یک در هر دور یک‌دوم است و نتیجهٔ دورها به هم وابسته نیست. تا اینجا بازیکن الف دو دور و بازیکن ب یک دور را برده است. ناگهان بازی باید متوقف شود. حالا با ۸۰ سکه چه باید کرد؟",
            "html": "<p>دو نفر را در نظر بگیرید که قرار گذاشته‌اند بر سر یک جایزه بازی کنند. هر کدام ۴۰ سکه گذاشته‌اند و مجموع جایزه ۸۰ سکه است. قرار است چند دور بازی کنند و هرکس زودتر <strong>سه دور</strong> را ببرد، تمام جایزه را بردارد. همهٔ دورها منصفانه‌اند؛ یعنی احتمال برد هر یک در هر دور یک‌دوم است و نتیجهٔ دورها به هم وابسته نیست. تا اینجا بازیکن الف دو دور و بازیکن ب یک دور را برده است. ناگهان بازی باید متوقف شود. حالا با ۸۰ سکه چه باید کرد؟</p>"
          },
          {
            "kind": "paragraph",
            "text": "در نگاه نخست می‌شود چند پاسخ داد. شاید بگوییم الف جلو افتاده، پس همهٔ جایزه برای اوست؛ اما ب هنوز می‌تواند برنده شود. شاید بگوییم چون هر دو نفر ۴۰ سکه آورده‌اند، جایزه هم باید نصف شود؛ اما این پاسخ برتری الف را نادیده می‌گیرد. راه سوم آن است که جایزه را به نسبت بردهای قبلی تقسیم کنیم: دو سهم برای الف و یک سهم برای ب. این روش از دو پیشنهاد قبلی معقول‌تر به نظر می‌رسد، ولی باز هم نکته‌ای را فراموش می‌کند: **حق هر بازیکن تنها به آنچه تاکنون رخ داده وابسته نیست؛ به آنچه هنوز ممکن است رخ دهد نیز بستگی دارد.**",
            "html": "<p>در نگاه نخست می‌شود چند پاسخ داد. شاید بگوییم الف جلو افتاده، پس همهٔ جایزه برای اوست؛ اما ب هنوز می‌تواند برنده شود. شاید بگوییم چون هر دو نفر ۴۰ سکه آورده‌اند، جایزه هم باید نصف شود؛ اما این پاسخ برتری الف را نادیده می‌گیرد. راه سوم آن است که جایزه را به نسبت بردهای قبلی تقسیم کنیم: دو سهم برای الف و یک سهم برای ب. این روش از دو پیشنهاد قبلی معقول‌تر به نظر می‌رسد، ولی باز هم نکته‌ای را فراموش می‌کند: <strong>حق هر بازیکن تنها به آنچه تاکنون رخ داده وابسته نیست؛ به آنچه هنوز ممکن است رخ دهد نیز بستگی دارد.</strong></p>"
          },
          {
            "kind": "paragraph",
            "text": "این پرسش در سال ۱۶۵۴ ناگهان از هیچ پدید نیامد. ریاضی‌دانان و نویسندگان پیش از آن، از جمله لوکا پاچیولی در *سوما*ی ۱۴۹۴، و سپس تارتالیا و کاردانو، دربارهٔ تقسیم جایزهٔ بازیِ ناتمام نوشته بودند. بنابراین نمی‌توان پاسکال و فرما را «مخترع مسئله» نامید. سهم مهم آنان این بود که مسئله را به صورتی حل کردند که ارزشِ موقعیتِ هر بازیکن از **احتمال آینده‌های ممکن** به دست آید، نه از نسبتی ظاهراً منصفانه میان بردهای گذشته. <span dir=\"ltr\">[S1–S3]</span>",
            "html": "<p>این پرسش در سال ۱۶۵۴ ناگهان از هیچ پدید نیامد. ریاضی‌دانان و نویسندگان پیش از آن، از جمله لوکا پاچیولی در <em>سوما</em>ی ۱۴۹۴، و سپس تارتالیا و کاردانو، دربارهٔ تقسیم جایزهٔ بازیِ ناتمام نوشته بودند. بنابراین نمی‌توان پاسکال و فرما را «مخترع مسئله» نامید. سهم مهم آنان این بود که مسئله را به صورتی حل کردند که ارزشِ موقعیتِ هر بازیکن از <strong>احتمال آینده‌های ممکن</strong> به دست آید، نه از نسبتی ظاهراً منصفانه میان بردهای گذشته. <sup><a href=\"#points-source-1\">[S1]</a> <a href=\"#points-source-2\">[S2]</a> <a href=\"#points-source-3\">[S3]</a></sup></p>"
          },
          {
            "kind": "paragraph",
            "text": "چنین مسئله‌ای فقط سرگرمیِ بازیکنان نبود. در دادوستد، بیمه، پرداخت‌های مشروط و قراردادهای مالی نیز گاهی باید امروز دربارهٔ چیزی تصمیم گرفت که نتیجه‌اش در آینده معلوم می‌شود. بحث دربارهٔ انصاف و بهای عادلانه، پیش از پیدایش نظریهٔ احتمال هم وجود داشت. محاسبهٔ ریاضی قرار نبود به‌تنهایی همهٔ مسائل اخلاقی را حل کند؛ اما می‌توانست یک جنبهٔ مهم را روشن کند: **امکانِ رسیدن به جایزه، پیش از آن‌که جایزه به دست آید، چقدر می‌ارزد؟**",
            "html": "<p>چنین مسئله‌ای فقط سرگرمیِ بازیکنان نبود. در دادوستد، بیمه، پرداخت‌های مشروط و قراردادهای مالی نیز گاهی باید امروز دربارهٔ چیزی تصمیم گرفت که نتیجه‌اش در آینده معلوم می‌شود. بحث دربارهٔ انصاف و بهای عادلانه، پیش از پیدایش نظریهٔ احتمال هم وجود داشت. محاسبهٔ ریاضی قرار نبود به‌تنهایی همهٔ مسائل اخلاقی را حل کند؛ اما می‌توانست یک جنبهٔ مهم را روشن کند: <strong>امکانِ رسیدن به جایزه، پیش از آن‌که جایزه به دست آید، چقدر می‌ارزد؟</strong></p>"
          },
          {
            "kind": "paragraph",
            "text": "در فرانسهٔ سدهٔ هفدهم، این مسئله ظاهراً از مسیر فردی علاقه‌مند به قمار، معروف به شوالیه دو مِره، به بلز پاسکال (۱۶۲۳–۱۶۶۲) رسید. پاسکال با پیر دو فرما (۱۶۰۱–۱۶۶۵)، حقوقدان و ریاضی‌دان ساکن تولوز، نامه‌نگاری کرد. نامه‌های سال ۱۶۵۴ از نخستین اسناد مهم در تاریخ شکل‌گیری نظریهٔ ریاضی احتمال‌اند؛ بااین‌حال همهٔ نامه‌های اولیه باقی نمانده‌اند. پس نباید صحنه‌ای خیالی از گفت‌وگوی حضوری آن‌ها را به‌عنوان رویدادی مستند روایت کرد. <span dir=\"ltr\">[S1, S4]</span>",
            "html": "<p>در فرانسهٔ سدهٔ هفدهم، این مسئله ظاهراً از مسیر فردی علاقه‌مند به قمار، معروف به شوالیه دو مِره، به بلز پاسکال (۱۶۲۳–۱۶۶۲) رسید. پاسکال با پیر دو فرما (۱۶۰۱–۱۶۶۵)، حقوقدان و ریاضی‌دان ساکن تولوز، نامه‌نگاری کرد. نامه‌های سال ۱۶۵۴ از نخستین اسناد مهم در تاریخ شکل‌گیری نظریهٔ ریاضی احتمال‌اند؛ بااین‌حال همهٔ نامه‌های اولیه باقی نمانده‌اند. پس نباید صحنه‌ای خیالی از گفت‌وگوی حضوری آن‌ها را به‌عنوان رویدادی مستند روایت کرد. <sup><a href=\"#points-source-1\">[S1]</a> <a href=\"#points-source-4\">[S4]</a></sup></p>"
          },
          {
            "kind": "gallery",
            "text": "*[در این نقطه نسخهٔ معتبر نامه یا صفحهٔ نخست رسالهٔ هویگنس و تصاویر شخصیت‌ها نمایش داده شود.]*",
            "html": "<div data-points-gallery></div>"
          }
        ]
      },
      {
        "title": "برای تقسیم جایزه، باید آینده را بشماریم",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "حالا به بازی خودمان برگردیم. الف فقط **یک برد دیگر** لازم دارد، اما ب باید **دو دور پشت سر هم** برنده شود. اگر الف دور بعد را ببرد، بازی تمام است. اگر ب ببرد، نتیجهٔ بردها دو به دو می‌شود و دور بعدی، برندهٔ نهایی را تعیین می‌کند. بنابراین الف دو راه برای بردن دارد: یا همین دور آینده را ببرد، یا آن دور را ببازد و دور بعد را ببرد.",
            "html": "<p>حالا به بازی خودمان برگردیم. الف فقط <strong>یک برد دیگر</strong> لازم دارد، اما ب باید <strong>دو دور پشت سر هم</strong> برنده شود. اگر الف دور بعد را ببرد، بازی تمام است. اگر ب ببرد، نتیجهٔ بردها دو به دو می‌شود و دور بعدی، برندهٔ نهایی را تعیین می‌کند. بنابراین الف دو راه برای بردن دارد: یا همین دور آینده را ببرد، یا آن دور را ببازد و دور بعد را ببرد.</p>"
          },
          {
            "kind": "paragraph",
            "text": "احتمال راه اول یک‌دوم است. احتمال راه دوم نیز برابر است با یک‌دوم ضرب‌در یک‌دوم؛ چون فرض کرده‌ایم نتیجهٔ دو دور مستقل است. پس احتمال برد نهایی الف چنین می‌شود:",
            "html": "<p>احتمال راه اول یک‌دوم است. احتمال راه دوم نیز برابر است با یک‌دوم ضرب‌در یک‌دوم؛ چون فرض کرده‌ایم نتیجهٔ دو دور مستقل است. پس احتمال برد نهایی الف چنین می‌شود:</p>"
          },
          {
            "kind": "formula",
            "text": "\\[\nP(\\text{برد نهایی الف})=\\frac12+\\frac12\\times\\frac12=\\frac34.\n\\]",
            "html": "<div class=\"points-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\" dir=\"ltr\"><mi>P</mi><mo>(</mo><mtext>برد نهایی الف</mtext><mo>)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>×</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>=</mo><mfrac><mn>3</mn><mn>4</mn></mfrac></math></div>"
          },
          {
            "kind": "paragraph",
            "text": "ب تنها زمانی برنده می‌شود که هر دو دور بعدی را ببرد:",
            "html": "<p>ب تنها زمانی برنده می‌شود که هر دو دور بعدی را ببرد:</p>"
          },
          {
            "kind": "formula",
            "text": "\\[\nP(\\text{برد نهایی ب})=\\frac12\\times\\frac12=\\frac14.\n\\]",
            "html": "<div class=\"points-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\" dir=\"ltr\"><mi>P</mi><mo>(</mo><mtext>برد نهایی ب</mtext><mo>)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>×</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>4</mn></mfrac></math></div>"
          },
          {
            "kind": "paragraph",
            "text": "نتیجه روشن است: شانس نهایی الف سه‌چهارم و شانس نهایی ب یک‌چهارم است. اگر قرار باشد جایزه بر اساس **ارزش پولی موردانتظار** تقسیم شود، از ۸۰ سکه باید **۶۰ سکه به الف و ۲۰ سکه به ب** برسد. اکنون دلیلِ درست‌نبودنِ تقسیم دو به یک را می‌فهمیم. تعداد بردهای گذشته صرفاً جای فعلی بازیکنان را مشخص می‌کند؛ آنچه سهم منصفانه را در مدل ما تعیین می‌کند، احتمال رسیدن هر بازیکن به جایزه در ادامهٔ بازی است.",
            "html": "<p>نتیجه روشن است: شانس نهایی الف سه‌چهارم و شانس نهایی ب یک‌چهارم است. اگر قرار باشد جایزه بر اساس <strong>ارزش پولی موردانتظار</strong> تقسیم شود، از ۸۰ سکه باید <strong>۶۰ سکه به الف و ۲۰ سکه به ب</strong> برسد. اکنون دلیلِ درست‌نبودنِ تقسیم دو به یک را می‌فهمیم. تعداد بردهای گذشته صرفاً جای فعلی بازیکنان را مشخص می‌کند؛ آنچه سهم منصفانه را در مدل ما تعیین می‌کند، احتمال رسیدن هر بازیکن به جایزه در ادامهٔ بازی است.</p>"
          },
          {
            "kind": "paragraph",
            "text": "این محاسبه یک شرط مهم دارد: هر دور باید واقعاً با احتمال مساوی و مستقل برگزار شود. اگر الف مهارت بیشتری داشته باشد و احتمال برد او در هر دور مثلاً ۷۰ درصد باشد، تقسیم ۶۰ به ۲۰ دیگر جواب مسئله نیست. همچنین آنچه از دید «امید پولی» عادلانه است، لزوماً با مبلغی که افرادِ ریسک‌گریز برای کنارکشیدن از بازی می‌پذیرند برابر نیست. ما تنها یکی از معانی دقیق انصاف را بررسی می‌کنیم، نه همهٔ آن‌ها را.",
            "html": "<p>این محاسبه یک شرط مهم دارد: هر دور باید واقعاً با احتمال مساوی و مستقل برگزار شود. اگر الف مهارت بیشتری داشته باشد و احتمال برد او در هر دور مثلاً ۷۰ درصد باشد، تقسیم ۶۰ به ۲۰ دیگر جواب مسئله نیست. همچنین آنچه از دید «امید پولی» عادلانه است، لزوماً با مبلغی که افرادِ ریسک‌گریز برای کنارکشیدن از بازی می‌پذیرند برابر نیست. ما تنها یکی از معانی دقیق انصاف را بررسی می‌کنیم، نه همهٔ آن‌ها را.</p>"
          },
          {
            "kind": "paragraph",
            "text": "برای حل مسئله حتی لازم نیست تمام آینده‌های ممکن را تا آخر روی کاغذ فهرست کنیم. می‌توانیم از پایان به ابتدا برگردیم. اگر نتیجه دو به دو شده باشد، هرکس در دور تعیین‌کننده شانس یک‌دوم دارد؛ پس ارزش سهم الف در آن لحظه **۴۰ سکه** است. در وضعیت دو به یک، دور بعد یا جایزهٔ کامل ۸۰سکه‌ای را به الف می‌دهد، یا او را در موقعیتِ برابرِ ۴۰سکه‌ای قرار می‌دهد. بنابراین:",
            "html": "<p>برای حل مسئله حتی لازم نیست تمام آینده‌های ممکن را تا آخر روی کاغذ فهرست کنیم. می‌توانیم از پایان به ابتدا برگردیم. اگر نتیجه دو به دو شده باشد، هرکس در دور تعیین‌کننده شانس یک‌دوم دارد؛ پس ارزش سهم الف در آن لحظه <strong>۴۰ سکه</strong> است. در وضعیت دو به یک، دور بعد یا جایزهٔ کامل ۸۰سکه‌ای را به الف می‌دهد، یا او را در موقعیتِ برابرِ ۴۰سکه‌ای قرار می‌دهد. بنابراین:</p>"
          },
          {
            "kind": "formula",
            "text": "\\[\nV(2,1)=\\frac12\\times80+\\frac12\\times40=60.\n\\]",
            "html": "<div class=\"points-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\" dir=\"ltr\"><mi>V</mi><mo>(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo>)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>×</mo><mn>80</mn><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>×</mo><mn>40</mn><mo>=</mo><mn>60</mn></math></div>"
          },
          {
            "kind": "paragraph",
            "text": "این شیوهٔ «حل‌کردن از انتهای شاخه‌های ممکن به ابتدای آن‌ها» همان منطق بازگشتی است که با کار پاسکال پیوند دارد. فرما راهی مبتنی بر شمارش منظمِ ادامه‌های هم‌احتمالِ بازی به کار می‌گرفت. روش‌ها در مثال ما به یک نتیجه می‌رسند، ولی اختلاف‌نظرهای تاریخی دربارهٔ نحوهٔ شمردنِ دنباله‌هایی که بازی پیش از پایان آن‌ها متوقف می‌شود، نشان می‌دهد حتی تعیین «حالت‌های ممکن» نیز ظرافت دارد. <span dir=\"ltr\">[S1, S3, S4]</span>",
            "html": "<p>این شیوهٔ «حل‌کردن از انتهای شاخه‌های ممکن به ابتدای آن‌ها» همان منطق بازگشتی است که با کار پاسکال پیوند دارد. فرما راهی مبتنی بر شمارش منظمِ ادامه‌های هم‌احتمالِ بازی به کار می‌گرفت. روش‌ها در مثال ما به یک نتیجه می‌رسند، ولی اختلاف‌نظرهای تاریخی دربارهٔ نحوهٔ شمردنِ دنباله‌هایی که بازی پیش از پایان آن‌ها متوقف می‌شود، نشان می‌دهد حتی تعیین «حالت‌های ممکن» نیز ظرافت دارد. <sup><a href=\"#points-source-1\">[S1]</a> <a href=\"#points-source-3\">[S3]</a> <a href=\"#points-source-4\">[S4]</a></sup></p>"
          }
        ]
      },
      {
        "title": "آینده‌های ممکن را پیش چشم خود ببینید",
        "blocks": [
          {
            "kind": "lab",
            "text": "*[ابزار تعاملی `PointsLab` دقیقاً در این نقطه قرار بگیرد.]*",
            "html": "<div id=\"chapter04PointsLab\"></div>"
          },
          {
            "kind": "paragraph",
            "text": "ابزار با وضعیت **اولین نفر با سه برد، نتیجهٔ فعلی دو به یک، جایزهٔ ۸۰ سکه و دورهای منصفانه** آغاز می‌شود. درخت احتمال نشان می‌دهد اگر الف یا ب دور بعد را ببرد چه می‌شود. در نمای «بازگشت از پایان»، ارزش هر شاخه از انتها محاسبه می‌شود و به گرهٔ فعلی می‌رسد. می‌توانید امتیازها، تعداد بردهای لازم، احتمال برد الف در هر دور و مقدار جایزه را تغییر دهید یا ادامهٔ بازی را بارها شبیه‌سازی کنید.",
            "html": "<p>ابزار با وضعیت <strong>اولین نفر با سه برد، نتیجهٔ فعلی دو به یک، جایزهٔ ۸۰ سکه و دورهای منصفانه</strong> آغاز می‌شود. درخت احتمال نشان می‌دهد اگر الف یا ب دور بعد را ببرد چه می‌شود. در نمای «بازگشت از پایان»، ارزش هر شاخه از انتها محاسبه می‌شود و به گرهٔ فعلی می‌رسد. می‌توانید امتیازها، تعداد بردهای لازم، احتمال برد الف در هر دور و مقدار جایزه را تغییر دهید یا ادامهٔ بازی را بارها شبیه‌سازی کنید.</p>"
          },
          {
            "kind": "paragraph",
            "text": "پیش از فشردن دکمه، حدس بزنید اگر نتیجه دو به دو شود چه اتفاقی می‌افتد. در صورت منصفانه‌بودن دور تعیین‌کننده، سهم‌ها ۴۰ و ۴۰ خواهند شد. اگر الف یک برد لازم داشته باشد ولی ب تنها یک برد تا پیروزی فاصله داشته باشد، دیگر کسی در موقعیت برتر نیست. حالا احتمال برد الف را به ۷۰ درصد تغییر دهید: در نتیجهٔ دو به یک، شانس نهایی او **۹۱ درصد** و ارزش سهمش از ۸۰ سکه **۷۲٫۸ سکه** می‌شود.",
            "html": "<p>پیش از فشردن دکمه، حدس بزنید اگر نتیجه دو به دو شود چه اتفاقی می‌افتد. در صورت منصفانه‌بودن دور تعیین‌کننده، سهم‌ها ۴۰ و ۴۰ خواهند شد. اگر الف یک برد لازم داشته باشد ولی ب تنها یک برد تا پیروزی فاصله داشته باشد، دیگر کسی در موقعیت برتر نیست. حالا احتمال برد الف را به ۷۰ درصد تغییر دهید: در نتیجهٔ دو به یک، شانس نهایی او <strong>۹۱ درصد</strong> و ارزش سهمش از ۸۰ سکه <strong>۷۲٫۸ سکه</strong> می‌شود.</p>"
          },
          {
            "kind": "paragraph",
            "text": "می‌توان همان وضعیت دو به یک را با چهار دنبالهٔ فرضیِ دو دوری نیز دید: «الف–الف»، «الف–ب»، «ب–الف» و «ب–ب». سه دنباله به پیروزی الف می‌انجامد؛ البته در دو دنبالهٔ اول بازی با همان برد نخست الف تمام شده و نتیجهٔ دور بعدی فقط یک ابزار محاسباتی است. این دنباله‌ها را نباید با مسیرهای واقعیِ پایان‌یافته در زمان‌های متفاوت اشتباه گرفت: احتمال یک مسیر یک‌دوری لزوماً با احتمال مسیر دو‌دوری برابر نیست.",
            "html": "<p>می‌توان همان وضعیت دو به یک را با چهار دنبالهٔ فرضیِ دو دوری نیز دید: «الف–الف»، «الف–ب»، «ب–الف» و «ب–ب». سه دنباله به پیروزی الف می‌انجامد؛ البته در دو دنبالهٔ اول بازی با همان برد نخست الف تمام شده و نتیجهٔ دور بعدی فقط یک ابزار محاسباتی است. این دنباله‌ها را نباید با مسیرهای واقعیِ پایان‌یافته در زمان‌های متفاوت اشتباه گرفت: احتمال یک مسیر یک‌دوری لزوماً با احتمال مسیر دو‌دوری برابر نیست.</p>"
          },
          {
            "kind": "paragraph",
            "text": "اگر صد بار ادامهٔ بازی را شبیه‌سازی کنیم، ممکن است الف ۷۵ بار برنده شود؛ شاید هم ۶۹ یا ۸۱ بار. هیچ‌کدام تناقضی با احتمال سه‌چهارم ندارد. شبیه‌سازی نشان می‌دهد مدل چگونه رفتار می‌کند، اما **ارزش ۶۰ سکه را از قواعد بازی محاسبه کردیم، نه از یک نتیجهٔ تصادفیِ شبیه‌سازی**. این همان تمایز میان احتمال نظری و فراوانی مشاهده‌شده است که در فصل سوم با آن آشنا شدیم.",
            "html": "<p>اگر صد بار ادامهٔ بازی را شبیه‌سازی کنیم، ممکن است الف ۷۵ بار برنده شود؛ شاید هم ۶۹ یا ۸۱ بار. هیچ‌کدام تناقضی با احتمال سه‌چهارم ندارد. شبیه‌سازی نشان می‌دهد مدل چگونه رفتار می‌کند، اما <strong>ارزش ۶۰ سکه را از قواعد بازی محاسبه کردیم، نه از یک نتیجهٔ تصادفیِ شبیه‌سازی</strong>. این همان تمایز میان احتمال نظری و فراوانی مشاهده‌شده است که در فصل سوم با آن آشنا شدیم.</p>"
          }
        ]
      },
      {
        "title": "از شانسِ برد تا ارزشِ یک موقعیت",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "در واقع چه چیزی را به دست آورده‌ایم؟ نه نام برندهٔ قطعی را، بلکه ارزش امروزِ موقعیتی را که پرداخت نهایی‌اش نامعلوم است. فرض کنید X مبلغی باشد که الف در پایان دریافت می‌کند. او با احتمال سه‌چهارم ۸۰ سکه و با احتمال یک‌چهارم صفر سکه می‌گیرد. **امید ریاضیِ پولی** او برابر است با:",
            "html": "<p>در واقع چه چیزی را به دست آورده‌ایم؟ نه نام برندهٔ قطعی را، بلکه ارزش امروزِ موقعیتی را که پرداخت نهایی‌اش نامعلوم است. فرض کنید X مبلغی باشد که الف در پایان دریافت می‌کند. او با احتمال سه‌چهارم ۸۰ سکه و با احتمال یک‌چهارم صفر سکه می‌گیرد. <strong>امید ریاضیِ پولی</strong> او برابر است با:</p>"
          },
          {
            "kind": "formula",
            "text": "\\[\nE[X]=\\sum_i p_i x_i.\n\\]",
            "html": "<div class=\"points-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\" dir=\"ltr\"><mi>E</mi><mo>[</mo><mi>X</mi><mo>]</mo><mo>=</mo><munder><mo>∑</mo><mi>i</mi></munder><msub><mi>p</mi><mi>i</mi></msub><msub><mi>x</mi><mi>i</mi></msub></math></div>"
          },
          {
            "kind": "paragraph",
            "text": "در این مثال:",
            "html": "<p>در این مثال:</p>"
          },
          {
            "kind": "formula",
            "text": "\\[\nE[X]=\\frac34\\times80+\\frac14\\times0=60.\n\\]",
            "html": "<div class=\"points-formula\"><math xmlns=\"http://www.w3.org/1998/Math/MathML\" display=\"block\" dir=\"ltr\"><mi>E</mi><mo>[</mo><mi>X</mi><mo>]</mo><mo>=</mo><mfrac><mn>3</mn><mn>4</mn></mfrac><mo>×</mo><mn>80</mn><mo>+</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mo>×</mo><mn>0</mn><mo>=</mo><mn>60</mn></math></div>"
          },
          {
            "kind": "paragraph",
            "text": "عدد ۶۰ قرار نیست در هر بار ادامهٔ بازی به الف پرداخت شود؛ اگر بازی واقعاً ادامه یابد، پرداخت او یا صفر است یا ۸۰. عدد ۶۰ **میانگینِ وزن‌دارِ پرداخت‌های ممکن بر اساس احتمال آن‌ها** است. اگر هزینهٔ معامله، محدودیت نقدینگی و تفاوت سلیقهٔ افراد نسبت به خطر را کنار بگذاریم، این عدد می‌تواند مبنایی برای قیمت‌گذاریِ منصفانهٔ موقعیت باشد.",
            "html": "<p>عدد ۶۰ قرار نیست در هر بار ادامهٔ بازی به الف پرداخت شود؛ اگر بازی واقعاً ادامه یابد، پرداخت او یا صفر است یا ۸۰. عدد ۶۰ <strong>میانگینِ وزن‌دارِ پرداخت‌های ممکن بر اساس احتمال آن‌ها</strong> است. اگر هزینهٔ معامله، محدودیت نقدینگی و تفاوت سلیقهٔ افراد نسبت به خطر را کنار بگذاریم، این عدد می‌تواند مبنایی برای قیمت‌گذاریِ منصفانهٔ موقعیت باشد.</p>"
          },
          {
            "kind": "paragraph",
            "text": "به این ترتیب تفاوت دو مفهوم روشن می‌شود: **احتمال** می‌پرسد «چقدر امکان دارد این نتیجه رخ دهد؟» و **امید ریاضی** می‌پرسد «وقتی مقدارِ پیامدهای ممکن را هم در نظر بگیریم، ارزش متوسطِ وزن‌دار آن‌ها چقدر است؟» ممکن است بردن یک جایزهٔ بسیار بزرگ بعید باشد، اما ارزش موردانتظارِ آن از جایزه‌ای کوچک و پُراحتمال بیشتر شود. بااین‌حال یک موقعیت با امید پولی مثبت لزوماً برای همهٔ انسان‌ها انتخاب مطلوبی نیست. کسی که با یک باخت به ورشکستگی می‌رسد، ممکن است از شرطی با امید ریاضی مثبت هم صرف‌نظر کند. فهم این تفاوت، در آینده ما را به نظریهٔ تصمیم و مفهوم مطلوبیت خواهد رساند.",
            "html": "<p>به این ترتیب تفاوت دو مفهوم روشن می‌شود: <strong>احتمال</strong> می‌پرسد «چقدر امکان دارد این نتیجه رخ دهد؟» و <strong>امید ریاضی</strong> می‌پرسد «وقتی مقدارِ پیامدهای ممکن را هم در نظر بگیریم، ارزش متوسطِ وزن‌دار آن‌ها چقدر است؟» ممکن است بردن یک جایزهٔ بسیار بزرگ بعید باشد، اما ارزش موردانتظارِ آن از جایزه‌ای کوچک و پُراحتمال بیشتر شود. بااین‌حال یک موقعیت با امید پولی مثبت لزوماً برای همهٔ انسان‌ها انتخاب مطلوبی نیست. کسی که با یک باخت به ورشکستگی می‌رسد، ممکن است از شرطی با امید ریاضی مثبت هم صرف‌نظر کند. فهم این تفاوت، در آینده ما را به نظریهٔ تصمیم و مفهوم مطلوبیت خواهد رساند.</p>"
          },
          {
            "kind": "paragraph",
            "text": "این فصل جایگاه خود را در مسیر درس‌ها نیز روشن می‌کند. سرشماری، مجموعهٔ واحدهایی را تعیین می‌کند که می‌خواهیم بشماریم. نرخ، رخدادهای مشاهده‌شده را نسبت به جمعیت و زمان می‌سنجد. احتمال، به نتایج ممکنِ هنوز رخ‌نداده وزن می‌دهد. امید ریاضی یک گام جلوتر می‌رود و **مقدار پیامدهای ممکن** را با وزنِ احتمالشان ترکیب می‌کند. این‌ها چهار گامِ منطقی در مسیر فهم آمارند؛ نه ادعایی دربارهٔ اینکه تمام این اندیشه‌ها دقیقاً به همین ترتیب در تاریخ پدید آمده‌اند.",
            "html": "<p>این فصل جایگاه خود را در مسیر درس‌ها نیز روشن می‌کند. سرشماری، مجموعهٔ واحدهایی را تعیین می‌کند که می‌خواهیم بشماریم. نرخ، رخدادهای مشاهده‌شده را نسبت به جمعیت و زمان می‌سنجد. احتمال، به نتایج ممکنِ هنوز رخ‌نداده وزن می‌دهد. امید ریاضی یک گام جلوتر می‌رود و <strong>مقدار پیامدهای ممکن</strong> را با وزنِ احتمالشان ترکیب می‌کند. این‌ها چهار گامِ منطقی در مسیر فهم آمارند؛ نه ادعایی دربارهٔ اینکه تمام این اندیشه‌ها دقیقاً به همین ترتیب در تاریخ پدید آمده‌اند.</p>"
          }
        ]
      },
      {
        "title": "سرنوشت تاریخی یک راه‌حل برای بازی ناتمام",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "نامه‌های سال ۱۶۵۴ پاسکال و فرما فقط تکلیف یک جایزه را روشن نکردند. روش‌های شمارشِ آینده‌های ممکن و محاسبهٔ بازگشتی، ابزاری فراهم کردند که می‌شد آن را به پرسش‌های دیگر نیز برد. البته محدودیتشان هم روشن بود: اگر شانس برد هر دور معلوم نباشد، اگر دورها به هم وابسته باشند، یا اگر پیامدِ یک زیان برای فرد بسیار سنگین باشد، حساب سادهٔ ما دیگر به‌تنهایی کافی نیست. این محدودیت‌ها از اهمیت روش نمی‌کاهند؛ نشان می‌دهند چه مسئله‌های تازه‌ای از دل آن زاده شد.",
            "html": "<p>نامه‌های سال ۱۶۵۴ پاسکال و فرما فقط تکلیف یک جایزه را روشن نکردند. روش‌های شمارشِ آینده‌های ممکن و محاسبهٔ بازگشتی، ابزاری فراهم کردند که می‌شد آن را به پرسش‌های دیگر نیز برد. البته محدودیتشان هم روشن بود: اگر شانس برد هر دور معلوم نباشد، اگر دورها به هم وابسته باشند، یا اگر پیامدِ یک زیان برای فرد بسیار سنگین باشد، حساب سادهٔ ما دیگر به‌تنهایی کافی نیست. این محدودیت‌ها از اهمیت روش نمی‌کاهند؛ نشان می‌دهند چه مسئله‌های تازه‌ای از دل آن زاده شد.</p>"
          },
          {
            "kind": "paragraph",
            "text": "سه سال بعد، در **۱۶۵۷**، کریستیان هویگنس (۱۶۲۹–۱۶۹۵) در رسالهٔ *دربارهٔ محاسبه در بازی‌های بخت*، که در مجموعهٔ آثار فرانس فان سخوتن چاپ شد، روشی منظم برای ارزش‌گذاری شانس‌ها و تقسیم جایزه در بازی ناتمام عرضه کرد. این اثر را معمولاً **نخستین رسالهٔ چاپ‌شدهٔ مستقل دربارهٔ نظریهٔ احتمال** می‌دانند. نکتهٔ اصلی او نیز همین بود: می‌توان پیش از معلوم‌شدنِ نتیجه، ارزش یک فرصتِ نامطمئن را محاسبه کرد. <span dir=\"ltr\">[S5–S7]</span>",
            "html": "<p>سه سال بعد، در <strong>۱۶۵۷</strong>، کریستیان هویگنس (۱۶۲۹–۱۶۹۵) در رسالهٔ <em>دربارهٔ محاسبه در بازی‌های بخت</em>، که در مجموعهٔ آثار فرانس فان سخوتن چاپ شد، روشی منظم برای ارزش‌گذاری شانس‌ها و تقسیم جایزه در بازی ناتمام عرضه کرد. این اثر را معمولاً <strong>نخستین رسالهٔ چاپ‌شدهٔ مستقل دربارهٔ نظریهٔ احتمال</strong> می‌دانند. نکتهٔ اصلی او نیز همین بود: می‌توان پیش از معلوم‌شدنِ نتیجه، ارزش یک فرصتِ نامطمئن را محاسبه کرد. <sup><a href=\"#points-source-5\">[S5]</a> <a href=\"#points-source-6\">[S6]</a> <a href=\"#points-source-7\">[S7]</a></sup></p>"
          },
          {
            "kind": "source",
            "html": "<div data-points-huygens></div>"
          },
          {
            "kind": "paragraph",
            "text": "این فکر در تاریخ ماند و گسترش یافت. در سده‌های بعد، یاکوب برنولی در *هنر حدس‌زدن* (چاپ ۱۷۱۳) احتمال را با تکرار تجربه‌ها پیوند زد؛ دو مواور و لاپلاس محاسبات احتمال را صورت‌بندی و بسط دادند؛ و بیمه، محاسبات عمر و تصمیم‌گیری اقتصادی به ارزش‌گذاریِ پرداخت‌های آینده نیازمند شدند. نظریهٔ جدید احتمال برای امید ریاضی جایگاهی بنیادی در نظر گرفت. در عین حال، نظریهٔ تصمیم و اقتصاد نشان دادند که **امید پولی** با **مطلوبیت شخصی** یکسان نیست.",
            "html": "<p>این فکر در تاریخ ماند و گسترش یافت. در سده‌های بعد، یاکوب برنولی در <em>هنر حدس‌زدن</em> (چاپ ۱۷۱۳) احتمال را با تکرار تجربه‌ها پیوند زد؛ دو مواور و لاپلاس محاسبات احتمال را صورت‌بندی و بسط دادند؛ و بیمه، محاسبات عمر و تصمیم‌گیری اقتصادی به ارزش‌گذاریِ پرداخت‌های آینده نیازمند شدند. نظریهٔ جدید احتمال برای امید ریاضی جایگاهی بنیادی در نظر گرفت. در عین حال، نظریهٔ تصمیم و اقتصاد نشان دادند که <strong>امید پولی</strong> با <strong>مطلوبیت شخصی</strong> یکسان نیست.</p>"
          },
          {
            "kind": "paragraph",
            "text": "پس مسئلهٔ تقسیم جایزه نه از میان رفت و نه به همان صورت اولیه باقی ماند. راه‌حل آن در چارچوب نظریه‌ای بزرگ‌تر جذب شد. میراث ماندگارش این است: **برای چیزی که هنوز رخ نداده، می‌توان ارزشی ریاضی در زمان حال به دست آورد، بی‌آنکه بدانیم کدام آینده واقعاً رخ خواهد داد.** بازی اینجا تمام می‌شود، اما پرسش تازه‌ای آغاز می‌شود: اگر نتایج ممکن آن‌قدر زیاد باشند که نتوان آن‌ها را یکی‌یکی شمرد، یا اگر احتمالشان نامعلوم باشد، چگونه باید آن‌ها را مدل کرد و از داده‌ها درباره‌شان آموخت؟ این پرسش راه را برای توزیع‌های احتمال و سپس استنباط آماری باز می‌کند.",
            "html": "<p>پس مسئلهٔ تقسیم جایزه نه از میان رفت و نه به همان صورت اولیه باقی ماند. راه‌حل آن در چارچوب نظریه‌ای بزرگ‌تر جذب شد. میراث ماندگارش این است: <strong>برای چیزی که هنوز رخ نداده، می‌توان ارزشی ریاضی در زمان حال به دست آورد، بی‌آنکه بدانیم کدام آینده واقعاً رخ خواهد داد.</strong> بازی اینجا تمام می‌شود، اما پرسش تازه‌ای آغاز می‌شود: اگر نتایج ممکن آن‌قدر زیاد باشند که نتوان آن‌ها را یکی‌یکی شمرد، یا اگر احتمالشان نامعلوم باشد، چگونه باید آن‌ها را مدل کرد و از داده‌ها درباره‌شان آموخت؟ این پرسش راه را برای توزیع‌های احتمال و سپس استنباط آماری باز می‌کند.</p>"
          }
        ]
      }
    ],
    "tails": [
      {
        "title": "پرسش‌های کوتاه برای درنگ",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "۱. چرا تقسیم جایزه به نسبت دو برد در برابر یک برد، در وضعیت دو به یک لزوماً درست نیست؟ پاسخ: چون باید به شانس برد نهایی توجه کرد؛ در مدل منصفانه احتمال‌ها سه‌چهارم و یک‌چهارم و سهم‌ها ۶۰ و ۲۰ سکه‌اند.",
            "html": "<p>۱. چرا تقسیم جایزه به نسبت دو برد در برابر یک برد، در وضعیت دو به یک لزوماً درست نیست؟ پاسخ: چون باید به شانس برد نهایی توجه کرد؛ در مدل منصفانه احتمال‌ها سه‌چهارم و یک‌چهارم و سهم‌ها ۶۰ و ۲۰ سکه‌اند.</p>"
          },
          {
            "kind": "paragraph",
            "text": "۲. اگر احتمال برد الف در هر دور مستقل ۷۰ درصد باشد، در وضعیت دو به یک شانس نهایی الف چقدر است؟ پاسخ: `0.7 + 0.3 × 0.7 = 0.91`؛ سهم موردانتظار از ۸۰ سکه برابر ۷۲٫۸ است.",
            "html": "<p>۲. اگر احتمال برد الف در هر دور مستقل ۷۰ درصد باشد، در وضعیت دو به یک شانس نهایی الف چقدر است؟ پاسخ: <bdi dir=\"ltr\"><code>0.7 + 0.3 × 0.7 = 0.91</code></bdi>؛ سهم موردانتظار از ۸۰ سکه برابر ۷۲٫۸ است.</p>"
          },
          {
            "kind": "paragraph",
            "text": "۳. آیا همهٔ افراد حاضرند برای موقعیتی با امید پولی ۶۰ سکه، دقیقاً ۶۰ سکه بپردازند؟ خیر؛ ترجیحِ ریسک، محدودیت مالی و مطلوبیت هم مهم‌اند.",
            "html": "<p>۳. آیا همهٔ افراد حاضرند برای موقعیتی با امید پولی ۶۰ سکه، دقیقاً ۶۰ سکه بپردازند؟ خیر؛ ترجیحِ ریسک، محدودیت مالی و مطلوبیت هم مهم‌اند.</p>"
          }
        ]
      },
      {
        "title": "واژگان اصلی",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "*مسئلهٔ تقسیم جایزه؛ بازی ناتمام؛ دورهای مستقل؛ احتمال برد نهایی؛ ارزش پولیِ موردانتظار؛ امید ریاضی؛ محاسبهٔ بازگشتی؛ تقسیم منصفانه؛ ترجیح ریسک.*",
            "html": "<p><em>مسئلهٔ تقسیم جایزه؛ بازی ناتمام؛ دورهای مستقل؛ احتمال برد نهایی؛ ارزش پولیِ موردانتظار؛ امید ریاضی؛ محاسبهٔ بازگشتی؛ تقسیم منصفانه؛ ترجیح ریسک.</em></p>"
          }
        ]
      },
      {
        "title": "منابع اصلی و پژوهشی",
        "blocks": [
          {
            "kind": "paragraph",
            "text": "- **[S1]** نامه‌نگاری پاسکال و فرما، ۱۶۵۴: https://www.york.ac.uk/depts/maths/histstat/pascal.htm\n- **[S2]** پیشینهٔ تاریخی مسئله: https://www.gtfp.cs.rhul.ac.uk/pulskamp/Problem_of_points/points.html\n- **[S3]** اندرس هالد، تاریخ احتمال تا ۱۷۵۰: https://doi.org/10.1002/0471725161.ch5\n- **[S4]** متن ترجمه‌شدهٔ نامه‌ها: https://www.probabilityandfinance.com/pulskamp/Pascal/Sources/pasfer.pdf\n- **[S5]** نسخهٔ ۱۶۵۷ رسالهٔ هویگنس در کتابخانهٔ ETH: https://www.e-rara.ch/zut/content/titleinfo/2486116\n- **[S6]** ترجمهٔ انگلیسی رسالهٔ هویگنس: https://math.dartmouth.edu/~doyle/docs/huygens/huygens.pdf\n- **[S7]** ایان هکینگ، دربارهٔ تاریخ «امید ریاضی»: https://doi.org/10.1017/CBO9780511817557.012",
            "html": "<p>- <strong><sup><a href=\"#points-source-1\">[S1]</a></sup></strong> نامه‌نگاری پاسکال و فرما، ۱۶۵۴: https://www.york.ac.uk/depts/maths/histstat/pascal.htm\n- <strong><sup><a href=\"#points-source-2\">[S2]</a></sup></strong> پیشینهٔ تاریخی مسئله: https://www.gtfp.cs.rhul.ac.uk/pulskamp/Problem_of_points/points.html\n- <strong><sup><a href=\"#points-source-3\">[S3]</a></sup></strong> اندرس هالد، تاریخ احتمال تا ۱۷۵۰: https://doi.org/10.1002/0471725161.ch5\n- <strong><sup><a href=\"#points-source-4\">[S4]</a></sup></strong> متن ترجمه‌شدهٔ نامه‌ها: https://www.probabilityandfinance.com/pulskamp/Pascal/Sources/pasfer.pdf\n- <strong><sup><a href=\"#points-source-5\">[S5]</a></sup></strong> نسخهٔ ۱۶۵۷ رسالهٔ هویگنس در کتابخانهٔ ETH: https://www.e-rara.ch/zut/content/titleinfo/2486116\n- <strong><sup><a href=\"#points-source-6\">[S6]</a></sup></strong> ترجمهٔ انگلیسی رسالهٔ هویگنس: https://math.dartmouth.edu/~doyle/docs/huygens/huygens.pdf\n- <strong><sup><a href=\"#points-source-7\">[S7]</a></sup></strong> ایان هکینگ، دربارهٔ تاریخ «امید ریاضی»: https://doi.org/10.1017/CBO9780511817557.012</p>"
          }
        ]
      }
    ]
  }
};
LESSONS.probability={...POINTS_CHAPTERS.en,kicker:POINTS_CHAPTERS.en.title};
LESSONS_FA.probability={...POINTS_CHAPTERS.fa,kicker:POINTS_CHAPTERS.fa.title};

# Scoring & Evaluation

Your algorithm is not evaluated on absolute profit alone. We utilize a risk-adjusted utility function designed to reward consistent returns and heavily penalize volatility. 

## The Objective Function

Your final score is calculated using the following piecewise function:

<div class="arithmatex">
\[
\text{Score} = 
\begin{cases} 
\mu \cdot \frac{\text{SR}^2}{\text{SR}^2+1}, & \mu \ge 0 \text{ and } \sigma \ge 10^{-10} \\
\mu, & \mu < 0 \text{ or } \sigma < 10^{-10}
\end{cases}
\]
</div>

**Where:**

* \(\mu = \text{Mean(PL)}\)
* \(\sigma = \text{StdDev(PL)}\)
* \(\text{SR} = \sqrt{250} \times \frac{\mu}{\sigma}\)

**How it works:** If your strategy loses money on average (\(\mu < 0\)), your score is simply your mean daily loss. If your strategy is profitable (\(\mu \ge 0\)) with meaningful variance in daily PL, your mean profit is scaled by a factor of \(\frac{\text{SR}^2}{\text{SR}^2+1}\). Strategies with high returns but massive volatility (low SR) will see their scores severely discounted. If your daily PL has almost no variance (\(\sigma < 10^{-10}\), e.g. a near-constant tiny gain every day), the Sharpe scaling is skipped and your score is just \(\mu\) directly - this mainly matters for strategies sitting right at the [minimum trading activity](rules.md#system-activity-constraints) threshold.

## Judging Criteria

In the final round, your performance is assessed on both quantitative results and qualitative methodology:

* **Quantitative Performance (50%):** Assessed using the Objective Function above against unseen, out-of-sample data.
* **Technical Presentation (50%):** Finalists present their methodology to a panel of researchers and traders. Judges evaluate:
    * Clarity of technical maturity and strategy logic.
    * Quality of communication and presentation style.
    * Team cohesion and Q&A responsiveness.

## Dataset Release Schedule

The evaluation utilizes a total of **2,000 days** of simulated price data, released in stages to test out-of-sample performance and prevent overfitting. At every stage, the live leaderboard is always scored on days you have **not** been given yet - never on data already sitting in your local `prices.txt` - so the leaderboard reflects real predictive performance rather than hindsight.

**Confirmed so far:**

| Date | Stage | You receive locally | Leaderboard/scoring window | Window size |
| :--- | :--- | :--- | :--- | :--- |
| **July 8** | Testing Round starts | Days 1–500 | Days 501–750 (hidden) | 250 days |

The exact release structure for the General Round and Finals - including how much data is released at each step and how the leaderboard window moves - is still being finalised. **This section will be updated once that's confirmed**, ahead of the General Round starting. In broad terms: expect further stages to release progressively more historical data while continuing to score you on days you haven't seen yet, working toward the full 2,000-day dataset by the end of Finals.
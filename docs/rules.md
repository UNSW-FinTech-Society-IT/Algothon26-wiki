# Challenge Brief

Your objective is to develop a quantitative trading strategy that maximizes risk-adjusted returns within our simulated market universe.

## The Trading Universe
You are tasked with trading a universe of **51 distinct assets** over a sequence of days. 

* **Asset 0:** Ticker symbol `ALGO`.
* **Assets 1 through 50:** Synthetic financial instruments with randomised tickers.

Assets receive one price update per day. Your algorithm will process this price history and execute buy or sell orders to adjust your portfolio. You are permitted to take both positive (long) and negative (short) positions.

## Position Limits
Risk management is critical. Your dollar position (calculated as `current price × absolute share size`) in every asset is strictly capped.

| Asset | Maximum Position (Long or Short) |
| :--- | :--- |
| **Asset 0 (ALGO)** | $100,000 |
| **Assets 1–50** | $10,000 |

**This is a limit on what you hold, not on what you trade, and it is re-checked every single day using that day's price - not just on days you place a new order.** The dollar cap itself is fixed, but since it's converted to a share-count ceiling using the current price (`max shares = dollar cap ÷ today's price`), that ceiling moves with the market. Concretely: if you buy exactly $100,000 of ALGO today and never touch your position again, a price rise tomorrow can still force a partial sell tomorrow, purely from that price movement - even though you placed no new order. Every day, whatever position your algorithm returns (including "no change from yesterday") gets clipped to fit that day's ceiling before it's recorded.

There is **no** separate limit on how much you can trade in a single day - only the resulting end-of-day position is capped. You could in principle move from the maximum short position to the maximum long position in one day; nothing stops that beyond the commission it would cost you.

**There is also no starting capital or total portfolio budget.** The only constraint on your risk-taking is the per-instrument position limit above - there is no cap on your combined exposure across the whole portfolio. In principle you could hold the maximum position in every one of the 51 instruments at once; nothing tracks or limits total capital usage across your positions, only how much you hold in any single asset at a time.

## Trading Commissions
To accurately simulate market microstructure, a commission is deducted from your PnL for every dollar traded (both buying and selling).

| Asset | Commission Rate |
| :--- | :--- |
| **Asset 0 (ALGO)** | 0.00002 (0.2 basis points) |
| **Assets 1–50** | 0.0001 (1.0 basis point) |

## Technical Implementation
Your algorithm must be contained entirely within a single Python file named **`teamName.py`** (replace `teamName` with your registered team name).

Within this file, you must implement the following function in the global scope:

`def getMyPosition(prcSoFar):`

* **Input:** `prcSoFar` is a NumPy array of shape `(51, numDays)`. It contains the full price history of all assets up to the current day. Day 0 is the earliest, and day `(numDays - 1)` is the most recent.
* **Output:** The function must return a 1D NumPy vector of exactly 51 integers (positive or negative). These integers represent your **desired total share positions** for assets 0 through 50 at the end of the current day.

## System & Activity Constraints
* **Execution Time Limit:** Your algorithm must have a maximum total runtime of **10 minutes (600 seconds)** when evaluated against the provided datasets. Submissions that exceed this limit are terminated and scored as a failure.
* **Minimum Trading Activity:** Your strategy must trade a minimum **total dollar volume** of **$25,000** across the Testing Round's 250-day evaluation window. This is measured as the sum of `price × |shares traded|` across every trade in the window - not a count of trades, since a trade count can be padded cheaply with many tiny trades. Strategies that fail to meet this threshold are flagged as inactive and receive an automatic score of zero. *(The equivalent threshold for the General Round and Finals evaluation windows will be confirmed alongside the rest of that schedule - see [Dataset Release Schedule](evaluation.md#dataset-release-schedule).)*

## Accepted Packages
Your algorithm is graded inside an isolated, network-disabled sandbox. Without declaring anything, `teamName.py` may import:

* `numpy`
* `pandas`
* `scipy`
* `scikit-learn`
* `statsmodels`
* `matplotlib`

If you need a package outside this list, declare it in a `requirements.txt` alongside your submission - see the [Submission Guide](submission.md) for packaging details. Note that network access is disabled at grading time, so packages that rely on making network calls (e.g. to download data) will not function inside `getMyPosition`, declared or not.
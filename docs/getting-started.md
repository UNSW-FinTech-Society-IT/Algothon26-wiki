# Getting Started

To successfully participate in the Algothon, you will need to set up a local development environment capable of handling data analysis and backtesting.

## 1. The Starter Code
All necessary data and the evaluation engine have been pre-packaged into our official GitHub repository. We highly recommend cloning this repository to use as the baseline for your algorithm.

1. Navigate to the [Algothon 2026 GitHub Repository](https://github.com/UNSW-FinTech-Society-IT/algothon26-starter-code).
2. Clone the repository to your local machine.
3. The repository will contain:
    * `prices.txt`: The training data.
    * `eval.py`: The official evaluation script used by our judges.
    * `teamName.py`: A boilerplate file for your algorithm.
    * `requirements-dev.txt`: The exact package set available at grading time - for setting up your local environment only, **do not include this file in your submission**.

## 2. Local Environment Setup
We recommend Python 3.12. For local development you're free to use whatever tools you like (Anaconda, a plain venv, Poetry, etc.) - but the packages actually available when your algorithm is **graded** are a fixed, explicit set, not the full Anaconda distribution. See [Accepted Packages](rules.md#accepted-packages) for the exact list.

To minimise "works on my machine, fails on submission" surprises, we recommend matching the grading environment locally using the `requirements-dev.txt` from the starter repo:
```bash
python -m venv .venv
.venv\Scripts\activate      # Windows
source .venv/bin/activate   # macOS/Linux
pip install -r requirements-dev.txt
```

If your own algorithm needs a package beyond this list, do not add it to `requirements-dev.txt` - create a **separate** `requirements.txt` listing only the extra package(s) and include that in your submission `.zip` instead. See the [Submission Guide](submission.md) for details.

## 3. Testing Your Algorithm
Before submitting your model to the live leaderboard, you must ensure it executes correctly against the provided evaluation script. 

Run your code locally using:
```bash
python eval.py
```

If your code does not compile or throws errors when run against `eval.py`, it will automatically fail on the competition servers.



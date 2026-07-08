# Submission Guide

All algorithm submissions will be processed through our official portal. Please read these packaging instructions carefully—improperly formatted submissions will be automatically rejected by the evaluation server.

## Code Formatting Requirements

1. **File Naming:** Your entry file **must** be named `teamName.py` (e.g., if your team is "AlphaQuant", your file must be `AlphaQuant.py`). 
2. **Function Signature:** The file must contain the function `def getMyPosition(prcSoFar):` in the global scope.
3. **No External Data:** Your algorithm must not attempt to download external data, scrape websites, or read local files other than the inputs explicitly passed to `getMyPosition`. 

## Packaging Your Submission

You must submit your code as a `.zip` file containing your repository. 

* **Do not nest the folder.** When the `.zip` file is unpacked, it should immediately expose your `teamName.py` file (and `requirements.txt` if applicable), not another folder.

* **Non-Standard Packages:** If you are using libraries outside the [accepted package list](rules.md#accepted-packages) (`numpy`, `pandas`, `scipy`, `scikit-learn`, `statsmodels`, `matplotlib`), you **must** include a valid `requirements.txt` file in your `.zip`. Failure to declare non-standard packages will result in a runtime error on our servers and immediate disqualification. Note network access is disabled during grading, so packages requiring internet access will not function regardless of declaration.

    Your `requirements.txt` should list **only the extra package(s) beyond the accepted list** - one per line, an exact version pin is optional but recommended. For example, if your algorithm uses `xgboost` and a specific version of `lightgbm`:

    ```text title="requirements.txt"
    xgboost
    lightgbm==4.5.0
    ```

    !!! warning "Do not list accepted packages"
        Do not include `numpy`, `pandas`, `scipy`, `scikit-learn`, `statsmodels`, or `matplotlib` in your `requirements.txt` - these are already pinned in the grading environment, and redeclaring them (even at the same version) will cause your submission to be rejected. If you set up your local environment using the starter repo's `requirements-dev.txt`, do not submit that file - it lists the full accepted set for local testing, not your submission's extras.

## Where to Submit
All rounds submit through the same portal:

* **Live Leaderboard:** [Submit Here](https://www.algothon.au/leaderboard) *(opens July 8)*

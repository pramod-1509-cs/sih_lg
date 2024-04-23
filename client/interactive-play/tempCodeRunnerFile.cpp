#include <iostream>
#include <string>
#include <vector>

using namespace std;

string removeOuterParentheses(const string &S) {
    if (S.size() <= 2) {
        return ""; // Empty string or single parenthesis
    }

    string result;
    int opened = 0;

    for (size_t i = 1; i < S.size() - 1; ++i) {
        char c = S[i];
        if (c == '(' && opened++ > 0) {
            result += c;
        }
        if (c == ')' && opened-- > 0) {
            result += c;
        }
    }

    return result;
}

vector<string> decomposeString(const string &S) {
    if (S.size() <= 2) {
        if (S.size() == 2) {
            return { "" }; // Return empty string for single parenthesis "()"
        } else {
            return {}; // Empty string
        }
    }

    vector<string> decomposedStrings;
    int opened = 0;
    int start = 0;

    for (size_t i = 1; i < S.size() - 1; ++i) {
        if (S[i] == '(') {
            opened++;
        } else {
            opened--;
        }

        if (opened == 0) {
            decomposedStrings.push_back(removeOuterParentheses(S.substr(start, i - start + 1)));
            start = i + 1;
        }
    }

    return decomposedStrings;
}

int main() {
    string input;
    getline(cin, input);

    vector<string> decomposed = decomposeString(input);

    string result;
    for (size_t i = 0; i < decomposed.size(); ++i) {
        result += decomposed[i];
    }

    cout << result << endl;

    return 0;
}

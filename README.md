### What is Mutation Testing?
Mutation Testing is a type of Software Testing that is performed to design new software tests and also evaluate the quality of already existing software tests. 

Mutation testing is related to modification a program in small ways. It focuses to help the tester develop effective tests or locate weaknesses in the test data used for the program. Faults (or mutations) are automatically seeded into your code, then your tests are run. If your tests fail then the mutation is killed, if your tests pass then the mutation lived. The quality of your tests can be gauged from the percentage of mutations killed.
![[Pasted image 20241122222244.png]]
### Why do we need Mutation Testing?
Traditional test coverage (i.e. line, statement, branch, etc.) measures only which code is executed by your tests. It does not check that your tests are actually able to detect faults in the executed code. It is therefore only able to identify code that is definitely not tested.
### Libraries and Frameworks Used
- **JavaScript:** Stryker
	- Stryker started as a pure JavaScript mutation testing framework, which is why it was referred to as **Stryker**, but it has since been rebranded to **StrykerJS**.
	- Today, StrykerJS supports most JavaScript projects, including TypeScript, React, Angular, VueJS, Svelte, and NodeJS.
- **Python:** MutPy
	- Mutpy is a Mutation testing tool in Python that generates mutants and computes a mutation score. It supports the standard unittest module, generates YAML/HTML reports, and has colorful output.
### Objective of Mutation Testing
The primary objective of mutation testing is to demonstrate the impact of these mutations by effectively “killing“ them. 

**A mutant can be killed in 2 ways:**
1. **Weak Mutant Killing:** Given a mutant m $\in$ M that modifies a location *l* in a program *P*, and a test *t*, *t* is said to weakly kill *m* if the state of the execution of *P* on *t* is different from the state of execution of *m* immediately after *l*.
2. **Strong Mutant Killing:** Given a mutant m $\in$ M for a ground string program *P* and a test *t*, *t* is said to strongly kill *m* if the output of *t* on *P* is different from the output of *t* on *m*.

We have chosen mutation testing as our strategy, focusing specifically on strongly killing mutants. This method systematically evaluates the code's robustness by ensuring that mutations cause significant changes in the program's behavior, thereby improving the effectiveness and reliability of the testing process.
### Available Mutation Operators
A mutation operator provides a set of rules for making syntactic modifications to a program by substituting parts of the source code. Since mutations rely on these operators, researchers have developed a variety of them tailored to different programming languages, such as Java. The effectiveness of these mutation operators is crucial to the success of mutation testing. Researchers have extensively studied numerous mutation operators. 

**Below are some examples of mutation operators for imperative languages:**
- Statement deletion
- Statement duplication or insertion, e.g. goto fail;
- Replacement of boolean subexpressions with true and false
- Replacement of some arithmetic operations with others, e.g. + with \*, - with /
- Replacement of some boolean relations with others, e.g. $>$ with $\geq$, == and $\leq$
- Replacement of variables with others from the same scope (variable types must be compatible)
- Remove method body
### Mutation Testing Levels
- **Unit Mutation:** Unit mutation focuses on individual components like functions or methods. It delves into the internal workings of these units, making changes such as altering operators or tweaking logic. This testing method assesses how well the test suite can detect modifications within these isolated components, ensuring each piece of the software puzzle functions correctly on its own.
- **Integration Mutation:** Integration mutation (sometimes called interface mutation) works by creating mutants on the connections between components. Most of the mutations are around method calls, and both the calling (caller) and the called (callee) method are considered.

For the purpose of this project, we have focused our efforts on Unit Mutation Testing.
### Mutation Score
The mutation score is defined as the percentage of killed mutants with the total number of mutants:

$$
\text{Mutation Score} = \frac{\text{Killed Mutants}}{\text{Total Mutants}} \times 100

$$
Test cases are deemed mutation adequate if they achieve a score of 100%. Experimental studies have demonstrated that mutation testing is a highly effective method for evaluating test case adequacy. However, its primary limitation lies in the significant cost of generating mutants and running each test case against the mutated program.
### Details of Source Code
The codebase comprises of various algorithms and computations. Our idea was to create a set of codes with decent number of operators, such as +, -, \*, /, $>$, $<$, etc. It is our belief that such pieces of codes are good candidates for mutation testing as they provide a significant chance for mutations to occur.

ADD DETAILS ABOUT FILES, 1 LINE PER FILE.
#### Lines of Code (only the source code)
TODO


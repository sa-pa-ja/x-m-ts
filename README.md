# Using `tsconfig.json` or `jsconfig.json`

1. By invoking **tsc** with no input files, in which case the compiler searches for the `tsconfig.json` file starting in the current directory and continuing up the parent directory chain.

2. By invoking **tsc** with no input files and a `--project` (or just `-p`) command line option that specifies the path of a directory containing a `tsconfig.json` file, or a path to valid `.json` file containing the configurations.

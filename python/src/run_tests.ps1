# Find all Python test files in the current directory and its subdirectories
$pythonFiles = Get-ChildItem -Recurse -Filter "*_test.py"

# Run MutPy on each Python file
foreach ($file in $pythonFiles) {
    # get the name of the file by stripping the _test from it
    $fileName = $file.Name.Substring(0, $file.Name.Length - 8)
    # Write-Output "Running MutPy on $fileName"
    Write-Output "Running MutPy on $file"
    python.exe C:\Users\Vidhish17\AppData\Local\Packages\PythonSoftwareFoundation.Python.3.11_qbz5n2kfra8p0\LocalCache\local-packages\Python311\Scripts\mut.py --target $fileName --unit-test $file -m --runner pytest --report-html Output/$fileName/
}
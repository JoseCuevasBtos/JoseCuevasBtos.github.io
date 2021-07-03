BEGIN {
	i = par = 0
	print "\\begin{document}"
	print "\\maketitle"
	print "\\tableofcontents"
}

{
	if ($1 == "\\poemtitle") {
		if (i != 0) {
			print "\\end{verse}\n"
		}
		print "\\clearpage"
		print $0
		print "\\begin{verse}"
		i++
		par = 0
	} else
		print $0
}

END {
	print "\\end{verse}"
	print "\\end{document}"
}

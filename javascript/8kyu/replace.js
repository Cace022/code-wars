function correct(string)
{
	var correctstring = string.replace (/5/g, 'S')
                              .replace (/0/g, 'O')
                              .replace (/1/g, 'I');
  return correctstring;
}
SITEDIR = frisco@locus:/Data/Media/Development/jagrammar.io/site/

.PHONY:	publish
publish: 
	rsync -av site/ $(SITEDIR)


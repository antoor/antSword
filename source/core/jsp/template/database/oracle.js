//
// oracle 模板
//
// @params
// :encode  SHELL编码
// :conn    数据库连接字符串
// :sql     执行SQL语句
// :db      数据库名
// :table   表名

module.exports = (arg1, arg2, arg3, arg4, arg5, arg6) => ({
    show_databases: {
      _: 'yv66vgAAADIBbQoADQCjCQB3AKQJAHcApQgApgkAdwCnCACoCQB3AKkIAKoKAAsAqwgArAcArQoACwCuBwCvCgCwALEHALIIALMHALQHALUKAA0AtggAeAoACwC3CgC4ALkKALgAuggAeggAuwkAdwC8CAC9CQB3AL4IAL8JAHcAwAcAwQgAwgoAHwDDCADECADFCADGCADHCADICwARAMkLAA8AygsAEQDKCwAPAMsKAHcAzAoAdwDNCgAfAM4HAM8KAC4AowgA0AoALgDRCgASANIKAC4A0gsAEQDTCgAfANIKAHcA1AoA1QDWCgBCANcKAEIA2AoAdwDZCADaCgB3ANsIANwIAN0KAAsA3ggA3wcA4AcA4QgA4goACwDjCACBCADkCgBCAOUIAOYHAOcKAEkA6AcA6QgA6goASwDrCADsCgBCAMMKAO0A7goA7QDvCADwCgBCAPEKAO0A8ggA8woAQgDrCgD0APUKAEIA9ggA9woAQgD4BwD5CgBCAPoKAFsA+woAQgD8CgBCAP0KAC4A/ggA/woAWwEACgBbAQEIAQIIAQMHAQQIAQUIAJYKAEIBBggBBwoAQgEICgEJAQoLAQsBDAsBDQEOCwEPARALAREBEgsBEQETCwEPARQLAQ8BFQgBFggBFwoAdwEYBwEZAQAHcmVxdWVzdAEAJ0xqYXZheC9zZXJ2bGV0L2h0dHAvSHR0cFNlcnZsZXRSZXF1ZXN0OwEACHJlc3BvbnNlAQAoTGphdmF4L3NlcnZsZXQvaHR0cC9IdHRwU2VydmxldFJlc3BvbnNlOwEAB2VuY29kZXIBABJMamF2YS9sYW5nL1N0cmluZzsBAAJjcwEADHJhbmRvbVByZWZpeAEAA2tleQEABmVuY29kZQEABjxpbml0PgEAAygpVgEABENvZGUBAA9MaW5lTnVtYmVyVGFibGUBAAZlcXVhbHMBABUoTGphdmEvbGFuZy9PYmplY3Q7KVoBAA1TdGFja01hcFRhYmxlBwC1BwEZBwCvBwC1BwDBBwDhAQA4KExqYXZhL2xhbmcvU3RyaW5nO0xqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZzsBAApFeGNlcHRpb25zAQAMYmFzZTY0RW5jb2RlAQAWKFtCKUxqYXZhL2xhbmcvU3RyaW5nOwEACkFlc0VuY3J5cHQBAAJFQwEAJihMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9TdHJpbmc7AQAGZGVjb2RlBwD5BwEEAQAKZXhlY3V0ZVNRTAEAbyhMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztaKUxqYXZhL2xhbmcvU3RyaW5nOwcBGgcBGwcBHAcBHQcBHgEADXNob3dEYXRhYmFzZXMBAApTb3VyY2VGaWxlAQATU2hvd19kYXRhYmFzZXMuamF2YQwAggCDDAB4AHkMAHoAewEADmFudHN3b3JkQUVTS2V5DACAAH0BAA9hbnRzd29yZERlZmF1bHQMAIEAfQEAHWphdmF4LnNlcnZsZXQuanNwLlBhZ2VDb250ZXh0DAEfASABAApnZXRSZXF1ZXN0AQAPamF2YS9sYW5nL0NsYXNzDAEhASIBABBqYXZhL2xhbmcvT2JqZWN0BwEjDAEkASUBACVqYXZheC9zZXJ2bGV0L2h0dHAvSHR0cFNlcnZsZXRSZXF1ZXN0AQALZ2V0UmVzcG9uc2UBACZqYXZheC9zZXJ2bGV0L2h0dHAvSHR0cFNlcnZsZXRSZXNwb25zZQEAE2phdmEvbGFuZy9FeGNlcHRpb24MASYBJwwBKAEpBwEqDAErASwMAS0BLgEAFGFudHN3b3JkcmFuZG9tUHJlZml4DAB/AH0BAAZiYXNlNjQMAHwAfQEAD2FudHN3b3JkQ2hhcnNldAwAfgB9AQAWamF2YS9sYW5nL1N0cmluZ0J1ZmZlcgEAAAwAggEvAQADLT58AQADfDwtAQARYW50c3dvcmRhcmdlbmNvZGUBAA9hbnRzd29yZGFyZ2Nvbm4BAAl0ZXh0L2h0bWwMATABLwwBMQEvDAEyAJUMAJYAlQwAoACPDAEzATQBABdqYXZhL2xhbmcvU3RyaW5nQnVpbGRlcgEACUVSUk9SOi8vIAwBMwE1DAE2ATcMATgBOQwAfACPBwE6DAE7AS8MAIYAhwwBPAE9DACRAJIBAANhZXMMAJMAjwEAEGphdmEudXRpbC5CYXNlNjQBAApnZXRFbmNvZGVyDAE+ASIBAA5lbmNvZGVUb1N0cmluZwEAAltCAQAQamF2YS9sYW5nL1N0cmluZwEAFnN1bi5taXNjLkJBU0U2NEVuY29kZXIMAT8BQAEAAQoMAUEBQgEAAQ0BACFqYXZheC9jcnlwdG8vc3BlYy9JdlBhcmFtZXRlclNwZWMMAIIBQwEAH2phdmF4L2NyeXB0by9zcGVjL1NlY3JldEtleVNwZWMBAANBRVMMAIIBRAEAEUFFUy9DRkIvTm9QYWRkaW5nBwFFDAFGAUcMAUgBSQEABVVURi04DAE8AUoMAUsBTAEAA2hleAcBTQwBTgFPDAFQAVEBABAwMTIzNDU2Nzg5QUJDREVGDAFSATcBAB1qYXZhL2lvL0J5dGVBcnJheU91dHB1dFN0cmVhbQwBUwFUDACCAVUMAVYBVwwBWAFZDAEzAVoBAAEsDAFbAVUMATYAlQEAFnN1bi5taXNjLkJBU0U2NERlY29kZXIBAAxkZWNvZGVCdWZmZXIBACBqYXZhL2xhbmcvQ2xhc3NOb3RGb3VuZEV4Y2VwdGlvbgEACmdldERlY29kZXIMAVwBNwEAAg0KDAFdAV4HAV8MAWABYQcBGwwBYgFjBwEcDAFkAWUHAR0MAWYBZwcBHgwBaAFUDAFpAVEMAWoBawwBbAFRAQApU0VMRUNUIFVTRVJOQU1FIEZST00gQUxMX1VTRVJTIE9SREVSIEJZIDEBAAEJDACZAJoBAB5kYXRhYmFzZS9vcmFjbGUvU2hvd19kYXRhYmFzZXMBABNbTGphdmEvbGFuZy9TdHJpbmc7AQATamF2YS9zcWwvQ29ubmVjdGlvbgEAEmphdmEvc3FsL1N0YXRlbWVudAEAEmphdmEvc3FsL1Jlc3VsdFNldAEAGmphdmEvc3FsL1Jlc3VsdFNldE1ldGFEYXRhAQAHZm9yTmFtZQEAJShMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9DbGFzczsBABFnZXREZWNsYXJlZE1ldGhvZAEAQChMamF2YS9sYW5nL1N0cmluZztbTGphdmEvbGFuZy9DbGFzczspTGphdmEvbGFuZy9yZWZsZWN0L01ldGhvZDsBABhqYXZhL2xhbmcvcmVmbGVjdC9NZXRob2QBAAZpbnZva2UBADkoTGphdmEvbGFuZy9PYmplY3Q7W0xqYXZhL2xhbmcvT2JqZWN0OylMamF2YS9sYW5nL09iamVjdDsBAAhnZXRDbGFzcwEAEygpTGphdmEvbGFuZy9DbGFzczsBABBnZXREZWNsYXJlZEZpZWxkAQAtKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL3JlZmxlY3QvRmllbGQ7AQAXamF2YS9sYW5nL3JlZmxlY3QvRmllbGQBAA1zZXRBY2Nlc3NpYmxlAQAEKFopVgEAA2dldAEAJihMamF2YS9sYW5nL09iamVjdDspTGphdmEvbGFuZy9PYmplY3Q7AQAVKExqYXZhL2xhbmcvU3RyaW5nOylWAQAOc2V0Q29udGVudFR5cGUBABRzZXRDaGFyYWN0ZXJFbmNvZGluZwEADGdldFBhcmFtZXRlcgEABmFwcGVuZAEALChMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9TdHJpbmdCdWZmZXI7AQAtKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZ0J1aWxkZXI7AQAIdG9TdHJpbmcBABQoKUxqYXZhL2xhbmcvU3RyaW5nOwEACWdldFdyaXRlcgEAFygpTGphdmEvaW8vUHJpbnRXcml0ZXI7AQATamF2YS9pby9QcmludFdyaXRlcgEABXByaW50AQAIZ2V0Qnl0ZXMBAAQoKVtCAQAJZ2V0TWV0aG9kAQALbmV3SW5zdGFuY2UBABQoKUxqYXZhL2xhbmcvT2JqZWN0OwEAB3JlcGxhY2UBAEQoTGphdmEvbGFuZy9DaGFyU2VxdWVuY2U7TGphdmEvbGFuZy9DaGFyU2VxdWVuY2U7KUxqYXZhL2xhbmcvU3RyaW5nOwEABShbQilWAQAXKFtCTGphdmEvbGFuZy9TdHJpbmc7KVYBABNqYXZheC9jcnlwdG8vQ2lwaGVyAQALZ2V0SW5zdGFuY2UBACkoTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZheC9jcnlwdG8vQ2lwaGVyOwEABGluaXQBAEIoSUxqYXZhL3NlY3VyaXR5L0tleTtMamF2YS9zZWN1cml0eS9zcGVjL0FsZ29yaXRobVBhcmFtZXRlclNwZWM7KVYBABYoTGphdmEvbGFuZy9TdHJpbmc7KVtCAQAHZG9GaW5hbAEABihbQilbQgEAEWphdmEvbGFuZy9JbnRlZ2VyAQAIcGFyc2VJbnQB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',
      [arg1]: '#{newbase64::encode}',
      [arg2]: '#{newbase64::conn}'
    },
    show_tables: {
      _: 'yv66vgAAADIBcgoADQCmCQB5AKcJAHkAqAgAqQkAeQCqCACrCQB5AKwIAK0KAAsArggArwcAsAoACwCxBwCyCgCzALQHALUIALYHALcHALgKAA0AuQgAegoACwC6CgC7ALwKALsAvQgAfAgAvgkAeQC/CADACQB5AMEIAMIJAHkAwwcAxAgAxQoAHwDGCADHCADICADJCADKCADLCADMCwARAM0LAA8AzgsAEQDOCwAPAM8KAHkA0AoAeQDRCgAfANIHANMKAC8ApggA1AoALwDVCgASANYKAC8A1gsAEQDXCgAfANYKAHkA2AoA2QDaCgBDANsKAEMA3AoAeQDdCADeCgB5AN8IAOAIAOEKAAsA4ggA4wcA5AcA5QgA5goACwDnCACDCADoCgBDAOkIAOoHAOsKAEoA7AcA7QgA7goATADvCADwCgBDAMYKAPEA8goA8QDzCAD0CgBDAPUKAPEA9ggA9woAQwDvCgD4APkKAEMA+ggA+woAQwD8BwD9CgBDAP4KAFwA/woAQwEACgBDAQEKAC8BAggBAwoAXAEECgBcAQUIAQYIAQcHAQgIAQkIAJgKAEMBCggBCwoAQwEMCgENAQ4LAQ8BEAsBEQESCwETARQLARUBFgsBFQEXCwETARgLARMBGQgBGggBGwgBHAoAeQEdBwEeAQAHcmVxdWVzdAEAJ0xqYXZheC9zZXJ2bGV0L2h0dHAvSHR0cFNlcnZsZXRSZXF1ZXN0OwEACHJlc3BvbnNlAQAoTGphdmF4L3NlcnZsZXQvaHR0cC9IdHRwU2VydmxldFJlc3BvbnNlOwEAB2VuY29kZXIBABJMamF2YS9sYW5nL1N0cmluZzsBAAJjcwEADHJhbmRvbVByZWZpeAEAA2tleQEABmVuY29kZQEABjxpbml0PgEAAygpVgEABENvZGUBAA9MaW5lTnVtYmVyVGFibGUBAAZlcXVhbHMBABUoTGphdmEvbGFuZy9PYmplY3Q7KVoBAA1TdGFja01hcFRhYmxlBwC4BwEeBwCyBwC4BwDEBwDlAQA4KExqYXZhL2xhbmcvU3RyaW5nO0xqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZzsBAApFeGNlcHRpb25zAQAMYmFzZTY0RW5jb2RlAQAWKFtCKUxqYXZhL2xhbmcvU3RyaW5nOwEACkFlc0VuY3J5cHQBAAJFQwEAJihMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9TdHJpbmc7AQAGZGVjb2RlBwD9BwEIAQAKZXhlY3V0ZVNRTAEAbyhMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztaKUxqYXZhL2xhbmcvU3RyaW5nOwcBHwcBIAcBIQcBIgcBIwEACnNob3dUYWJsZXMBAEooTGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvU3RyaW5nOwEAClNvdXJjZUZpbGUBABBTaG93X3RhYmxlcy5qYXZhDACEAIUMAHoAewwAfAB9AQAOYW50c3dvcmRBRVNLZXkMAIIAfwEAD2FudHN3b3JkRGVmYXVsdAwAgwB/AQAdamF2YXguc2VydmxldC5qc3AuUGFnZUNvbnRleHQMASQBJQEACmdldFJlcXVlc3QBAA9qYXZhL2xhbmcvQ2xhc3MMASYBJwEAEGphdmEvbGFuZy9PYmplY3QHASgMASkBKgEAJWphdmF4L3NlcnZsZXQvaHR0cC9IdHRwU2VydmxldFJlcXVlc3QBAAtnZXRSZXNwb25zZQEAJmphdmF4L3NlcnZsZXQvaHR0cC9IdHRwU2VydmxldFJlc3BvbnNlAQATamF2YS9sYW5nL0V4Y2VwdGlvbgwBKwEsDAEtAS4HAS8MATABMQwBMgEzAQAUYW50c3dvcmRyYW5kb21QcmVmaXgMAIEAfwEABmJhc2U2NAwAfgB/AQAPYW50c3dvcmRDaGFyc2V0DACAAH8BABZqYXZhL2xhbmcvU3RyaW5nQnVmZmVyAQAADACEATQBAAMtPnwBAAN8PC0BABFhbnRzd29yZGFyZ2VuY29kZQEAD2FudHN3b3JkYXJnY29ubgEADWFudHN3b3JkYXJnZGIBAAl0ZXh0L2h0bWwMATUBNAwBNgE0DAE3AJcMAJgAlwwAogCjDAE4ATkBABdqYXZhL2xhbmcvU3RyaW5nQnVpbGRlcgEACUVSUk9SOi8vIAwBOAE6DAE7ATwMAT0BPgwAfgCRBwE/DAFAATQMAIgAiQwBQQFCDACTAJQBAANhZXMMAJUAkQEAEGphdmEudXRpbC5CYXNlNjQBAApnZXRFbmNvZGVyDAFDAScBAA5lbmNvZGVUb1N0cmluZwEAAltCAQAQamF2YS9sYW5nL1N0cmluZwEAFnN1bi5taXNjLkJBU0U2NEVuY29kZXIMAUQBRQEAAQoMAUYBRwEAAQ0BACFqYXZheC9jcnlwdG8vc3BlYy9JdlBhcmFtZXRlclNwZWMMAIQBSAEAH2phdmF4L2NyeXB0by9zcGVjL1NlY3JldEtleVNwZWMBAANBRVMMAIQBSQEAEUFFUy9DRkIvTm9QYWRkaW5nBwFKDAFLAUwMAU0BTgEABVVURi04DAFBAU8MAVABUQEAA2hleAcBUgwBUwFUDAFVAVYBABAwMTIzNDU2Nzg5QUJDREVGDAFXATwBAB1qYXZhL2lvL0J5dGVBcnJheU91dHB1dFN0cmVhbQwBWAFZDACEAVoMAVsBXAwBXQFeDAE4AV8BAAEsDAFgAVoMATsAlwEAFnN1bi5taXNjLkJBU0U2NERlY29kZXIBAAxkZWNvZGVCdWZmZXIBACBqYXZhL2xhbmcvQ2xhc3NOb3RGb3VuZEV4Y2VwdGlvbgEACmdldERlY29kZXIMAWEBPAEAAg0KDAFiAWMHAWQMAWUBZgcBIAwBZwFoBwEhDAFpAWoHASIMAWsBbAcBIwwBbQFZDAFuAVYMAW8BcAwBcQFWAQBHU0VMRUNUIFRBQkxFX05BTUUgRlJPTSAoU0VMRUNUIFRBQkxFX05BTUUgRlJPTSBBTExfVEFCTEVTIFdIRVJFIE9XTkVSPScBAA0nIE9SREVSIEJZIDEpAQABCQwAmwCcAQAbZGF0YWJhc2Uvb3JhY2xlL1Nob3dfdGFibGVzAQATW0xqYXZhL2xhbmcvU3RyaW5nOwEAE2phdmEvc3FsL0Nvbm5lY3Rpb24BABJqYXZhL3NxbC9TdGF0ZW1lbnQBABJqYXZhL3NxbC9SZXN1bHRTZXQBABpqYXZhL3NxbC9SZXN1bHRTZXRNZXRhRGF0YQEAB2Zvck5hbWUBACUoTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvQ2xhc3M7AQARZ2V0RGVjbGFyZWRNZXRob2QBAEAoTGphdmEvbGFuZy9TdHJpbmc7W0xqYXZhL2xhbmcvQ2xhc3M7KUxqYXZhL2xhbmcvcmVmbGVjdC9NZXRob2Q7AQAYamF2YS9sYW5nL3JlZmxlY3QvTWV0aG9kAQAGaW52b2tlAQA5KExqYXZhL2xhbmcvT2JqZWN0O1tMamF2YS9sYW5nL09iamVjdDspTGphdmEvbGFuZy9PYmplY3Q7AQAIZ2V0Q2xhc3MBABMoKUxqYXZhL2xhbmcvQ2xhc3M7AQAQZ2V0RGVjbGFyZWRGaWVsZAEALShMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9yZWZsZWN0L0ZpZWxkOwEAF2phdmEvbGFuZy9yZWZsZWN0L0ZpZWxkAQANc2V0QWNjZXNzaWJsZQEABChaKVYBAANnZXQBACYoTGphdmEvbGFuZy9PYmplY3Q7KUxqYXZhL2xhbmcvT2JqZWN0OwEAFShMamF2YS9sYW5nL1N0cmluZzspVgEADnNldENvbnRlbnRUeXBlAQAUc2V0Q2hhcmFjdGVyRW5jb2RpbmcBAAxnZXRQYXJhbWV0ZXIBAAZhcHBlbmQBACwoTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvU3RyaW5nQnVmZmVyOwEALShMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9TdHJpbmdCdWlsZGVyOwEACHRvU3RyaW5nAQAUKClMamF2YS9sYW5nL1N0cmluZzsBAAlnZXRXcml0ZXIBABcoKUxqYXZhL2lvL1ByaW50V3JpdGVyOwEAE2phdmEvaW8vUHJpbnRXcml0ZXIBAAVwcmludAEACGdldEJ5dGVzAQAEKClbQgEACWdldE1ldGhvZAEAC25ld0luc3RhbmNlAQAUKClMamF2YS9sYW5nL09iamVjdDsBAAdyZXBsYWNlAQBEKExqYXZhL2xhbmcvQ2hhclNlcXVlbmNlO0xqYXZhL2xhbmcvQ2hhclNlcXVlbmNlOylMamF2YS9sYW5nL1N0cmluZzsBAAUoW0IpVgEAFyhbQkxqYXZhL2xhbmcvU3RyaW5nOylWAQATamF2YXgvY3J5cHRvL0NpcGhlcgEAC2dldEluc3RhbmNlAQApKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YXgvY3J5cHRvL0NpcGhlcjsBAARpbml0AQBCKElMamF2YS9zZWN1cml0eS9LZXk7TGphdmEvc2VjdXJpdHkvc3BlYy9BbGdvcml0aG1QYXJhbWV0ZXJTcGVjOylWAQAWKExqYXZhL2xhbmcvU3RyaW5nOylbQgEAB2RvRmluYWwBAAYoW0IpW0IBABFqYXZhL2xhbmcvSW50ZWdlcgEACHBhcnNlSW50AQAVKExqYXZhL2xhbmcvU3RyaW5nOylJAQAJc3Vic3RyaW5nAQAVKEkpTGphdmEvbGFuZy9TdHJpbmc7AQALdG9VcHBlckNhc2UBAAZsZW5ndGgBAAMoKUkBAAQoSSlWAQAGY2hhckF0AQAEKEkpQwEAB2luZGV4T2YBAAQoSSlJAQAcKEkpTGphdmEvbGFuZy9TdHJpbmdCdWlsZGVyOwEABXdyaXRlAQAEdHJpbQEABXNwbGl0AQAnKExqYXZhL2xhbmcvU3RyaW5nOylbTGphdmEvbGFuZy9TdHJpbmc7AQAWamF2YS9zcWwvRHJpdmVyTWFuYWdlcgEADWdldENvbm5lY3Rpb24BAE0oTGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL3NxbC9Db25uZWN0aW9uOwEAD2NyZWF0ZVN0YXRlbWVudAEAFigpTGphdmEvc3FsL1N0YXRlbWVudDsBAAxleGVjdXRlUXVlcnkBACgoTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL3NxbC9SZXN1bHRTZXQ7AQALZ2V0TWV0YURhdGEBAB4oKUxqYXZhL3NxbC9SZXN1bHRTZXRNZXRhRGF0YTsBAA5nZXRDb2x1bW5Db3VudAEADWdldENvbHVtbk5hbWUBAARuZXh0AQADKClaAQAJZ2V0U3RyaW5nACEAeQANAAAABwABAHoAewAAAAEAfAB9AAAAAQB+AH8AAAABAIAAfwAAAAEAgQB/AAAAAQCCAH8AAAABAIMAfwAAAAkAAQCEAIUAAQCGAAAAQwACAAEAAAAbKrcAASoBtQACKgG1AAMqEgS1AAUqEga1AAexAAAAAQCHAAAAFgAFAAAADAAEAA0ACQAOAA4AEgAUABMAAQCIAIkAAQCGAAAC3gAFAAsAAAGeEgi4AAlNKiwSCgO9AAu2AAwrA70ADbYADsAAD7UAAiosEhADvQALtgAM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',
      [arg1]: '#{newbase64::encode}',
      [arg2]: '#{newbase64::conn}',
      [arg3]: '#{newbase64::db}'
    },
    show_columns: {
      _: 'yv66vgAAADIBdgoADQCoCQB7AKkJAHsAqggAqwkAewCsCACtCQB7AK4IAK8KAAsAsAgAsQcAsgoACwCzBwC0CgC1ALYHALcIALgHALkHALoKAA0AuwgAfAoACwC8CgC9AL4KAL0AvwgAfggAwAkAewDBCADCCQB7AMMIAMQJAHsAxQcAxggAxwoAHwDICADJCADKCADLCADMCADNCADOCADPCwARANALAA8A0QsAEQDRCwAPANIKAHsA0woAewDUCgAfANUHANYKADAAqAgA1woAMADYCgASANkKADAA2QsAEQDaCgAfANkKAHsA2woA3ADdCgBEAN4KAEQA3woAewDgCADhCgB7AOIIAOMIAOQKAAsA5QgA5gcA5wcA6AgA6QoACwDqCACFCADrCgBEAOwIAO0HAO4KAEsA7wcA8AgA8QoATQDyCADzCgBEAMgKAPQA9QoA9AD2CAD3CgBEAPgKAPQA+QgA+goARADyCgD7APwKAEQA/QgA/goARAD/BwEACgBEAQEKAF0BAgoARAEDCgBEAQQKADABBQgBBgoAXQEHCgBdAQgIAQkIAQoHAQsIAQwIAJoKAEQBDQgBDgoARAEPCgEQARELARIBEwsBFAEVCwEWARcLARgBGQsBGAEaCwEWARsLARYBHAgBHQgBHggBHwgBIAoAewEhBwEiAQAHcmVxdWVzdAEAJ0xqYXZheC9zZXJ2bGV0L2h0dHAvSHR0cFNlcnZsZXRSZXF1ZXN0OwEACHJlc3BvbnNlAQAoTGphdmF4L3NlcnZsZXQvaHR0cC9IdHRwU2VydmxldFJlc3BvbnNlOwEAB2VuY29kZXIBABJMamF2YS9sYW5nL1N0cmluZzsBAAJjcwEADHJhbmRvbVByZWZpeAEAA2tleQEABmVuY29kZQEABjxpbml0PgEAAygpVgEABENvZGUBAA9MaW5lTnVtYmVyVGFibGUBAAZlcXVhbHMBABUoTGphdmEvbGFuZy9PYmplY3Q7KVoBAA1TdGFja01hcFRhYmxlBwC6BwEiBwC0BwC6BwDGBwDoAQA4KExqYXZhL2xhbmcvU3RyaW5nO0xqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZzsBAApFeGNlcHRpb25zAQAMYmFzZTY0RW5jb2RlAQAWKFtCKUxqYXZhL2xhbmcvU3RyaW5nOwEACkFlc0VuY3J5cHQBAAJFQwEAJihMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9TdHJpbmc7AQAGZGVjb2RlBwEABwELAQAKZXhlY3V0ZVNRTAEAbyhMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztaKUxqYXZhL2xhbmcvU3RyaW5nOwcBIwcBJAcBJQcBJgcBJwEAC3Nob3dDb2x1bW5zAQBcKExqYXZhL2xhbmcvU3RyaW5nO0xqYXZhL2xhbmcvU3RyaW5nO0xqYXZhL2xhbmcvU3RyaW5nO0xqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZzsBAApTb3VyY2VGaWxlAQARU2hvd19jb2x1bW5zLmphdmEMAIYAhwwAfAB9DAB+AH8BAA5hbnRzd29yZEFFU0tleQwAhACBAQAPYW50c3dvcmREZWZhdWx0DACFAIEBAB1qYXZheC5zZXJ2bGV0LmpzcC5QYWdlQ29udGV4dAwBKAEpAQAKZ2V0UmVxdWVzdAEAD2phdmEvbGFuZy9DbGFzcwwBKgErAQAQamF2YS9sYW5nL09iamVjdAcBLAwBLQEuAQAlamF2YXgvc2VydmxldC9odHRwL0h0dHBTZXJ2bGV0UmVxdWVzdAEAC2dldFJlc3BvbnNlAQAmamF2YXgvc2VydmxldC9odHRwL0h0dHBTZXJ2bGV0UmVzcG9uc2UBABNqYXZhL2xhbmcvRXhjZXB0aW9uDAEvATAMATEBMgcBMwwBNAE1DAE2ATcBABRhbnRzd29yZHJhbmRvbVByZWZpeAwAgwCBAQAGYmFzZTY0DACAAIEBAA9hbnRzd29yZENoYXJzZXQMAIIAgQEAFmphdmEvbGFuZy9TdHJpbmdCdWZmZXIBAAAMAIYBOAEAAy0+fAEAA3w8LQEAEWFudHN3b3JkYXJnZW5jb2RlAQAPYW50c3dvcmRhcmdjb25uAQANYW50c3dvcmRhcmdkYgEAEGFudHN3b3JkYXJndGFibGUBAAl0ZXh0L2h0bWwMATkBOAwBOgE4DAE7AJkMAJoAmQwApAClDAE8AT0BABdqYXZhL2xhbmcvU3RyaW5nQnVpbGRlcgEACUVSUk9SOi8vIAwBPAE+DAE/AUAMAUEBQgwAgACTBwFDDAFEATgMAIoAiwwBRQFGDACVAJYBAANhZXMMAJcAkwEAEGphdmEudXRpbC5CYXNlNjQBAApnZXRFbmNvZGVyDAFHASsBAA5lbmNvZGVUb1N0cmluZwEAAltCAQAQamF2YS9sYW5nL1N0cmluZwEAFnN1bi5taXNjLkJBU0U2NEVuY29kZXIMAUgBSQEAAQoMAUoBSwEAAQ0BACFqYXZheC9jcnlwdG8vc3BlYy9JdlBhcmFtZXRlclNwZWMMAIYBTAEAH2phdmF4L2NyeXB0by9zcGVjL1NlY3JldEtleVNwZWMBAANBRVMMAIYBTQEAEUFFUy9DRkIvTm9QYWRkaW5nBwFODAFPAVAMAVEBUgEABVVURi04DAFFAVMMAVQBVQEAA2hleAcBVgwBVwFYDAFZAVoBABAwMTIzNDU2Nzg5QUJDREVGDAFbAUABAB1qYXZhL2lvL0J5dGVBcnJheU91dHB1dFN0cmVhbQwBXAFdDACGAV4MAV8BYAwBYQFiDAE8AWMBAAEsDAFkAV4MAT8AmQEAFnN1bi5taXNjLkJBU0U2NERlY29kZXIBAAxkZWNvZGVCdWZmZXIBACBqYXZhL2xhbmcvQ2xhc3NOb3RGb3VuZEV4Y2VwdGlvbgEACmdldERlY29kZXIMAWUBQAEAAg0KDAFmAWcHAWgMAWkBagcBJAwBawFsBwElDAFtAW4HASYMAW8BcAcBJwwBcQFdDAFyAVoMAXMBdAwBdQFaAQABCQEADnNlbGVjdCAqIGZyb20gAQABLgEADyBXSEVSRSBST1dOVU09MAwAnQCeAQAcZGF0YWJhc2Uvb3JhY2xlL1Nob3dfY29sdW1ucwEAE1tMamF2YS9sYW5nL1N0cmluZzsBABNqYXZhL3NxbC9Db25uZWN0aW9uAQASamF2YS9zcWwvU3RhdGVtZW50AQASamF2YS9zcWwvUmVzdWx0U2V0AQAaamF2YS9zcWwvUmVzdWx0U2V0TWV0YURhdGEBAAdmb3JOYW1lAQAlKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL0NsYXNzOwEAEWdldERlY2xhcmVkTWV0aG9kAQBAKExqYXZhL2xhbmcvU3RyaW5nO1tMamF2YS9sYW5nL0NsYXNzOylMamF2YS9sYW5nL3JlZmxlY3QvTWV0aG9kOwEAGGphdmEvbGFuZy9yZWZsZWN0L01ldGhvZAEABmludm9rZQEAOShMamF2YS9sYW5nL09iamVjdDtbTGphdmEvbGFuZy9PYmplY3Q7KUxqYXZhL2xhbmcvT2JqZWN0OwEACGdldENsYXNzAQATKClMamF2YS9sYW5nL0NsYXNzOwEAEGdldERlY2xhcmVkRmllbGQBAC0oTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvcmVmbGVjdC9GaWVsZDsBABdqYXZhL2xhbmcvcmVmbGVjdC9GaWVsZAEADXNldEFjY2Vzc2libGUBAAQoWilWAQADZ2V0AQAmKExqYXZhL2xhbmcvT2JqZWN0OylMamF2YS9sYW5nL09iamVjdDsBABUoTGphdmEvbGFuZy9TdHJpbmc7KVYBAA5zZXRDb250ZW50VHlwZQEAFHNldENoYXJhY3RlckVuY29kaW5nAQAMZ2V0UGFyYW1ldGVyAQAGYXBwZW5kAQAsKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZ0J1ZmZlcjsBAC0oTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvU3RyaW5nQnVpbGRlcjsBAAh0b1N0cmluZwEAFCgpTGphdmEvbGFuZy9TdHJpbmc7AQAJZ2V0V3JpdGVyAQAXKClMamF2YS9pby9QcmludFdyaXRlcjsBABNqYXZhL2lvL1ByaW50V3JpdGVyAQAFcHJpbnQBAAhnZXRCeXRlcwEABCgpW0IBAAlnZXRNZXRob2QBAAtuZXdJbnN0YW5jZQEAFCgpTGphdmEvbGFuZy9PYmplY3Q7AQAHcmVwbGFjZQEARChMamF2YS9sYW5nL0NoYXJTZXF1ZW5jZTtMamF2YS9sYW5nL0NoYXJTZXF1ZW5jZTspTGphdmEvbGFuZy9TdHJpbmc7AQAFKFtCKVYBABcoW0JMamF2YS9sYW5nL1N0cmluZzspVgEAE2phdmF4L2NyeXB0by9DaXBoZXIBAAtnZXRJbnN0YW5jZQEAKShMamF2YS9sYW5nL1N0cmluZzspTGphdmF4L2NyeXB0by9DaXBoZXI7AQAEaW5pdAEAQihJTGphdmEvc2VjdXJpdHkvS2V5O0xqYXZhL3NlY3VyaXR5L3NwZWMvQWxnb3JpdGhtUGFyYW1ldGVyU3BlYzspVgEAFihMamF2YS9sYW5nL1N0cmluZzspW0IBAAdkb0ZpbmFsAQAGKFtCKVtCAQARamF2YS9sYW5nL0ludGVnZXIBAAhwYXJzZUludAEAFShMamF2YS9sYW5nL1N0cmluZzspSQEACXN1YnN0cmluZwEAFShJKUxqYXZhL2xhbmcvU3RyaW5nOwEAC3RvVXBwZXJDYXNlAQAGbGVuZ3RoAQADKClJAQAEKEkpVgEABmNoYXJBdAEABChJKUMBAAdpbmRleE9mAQAEKEkpSQEAHChJKUxqYXZhL2xhbmcvU3RyaW5nQnVpbGRlcjsBAAV3cml0ZQEABHRyaW0BAAVzcGxpdAEAJyhMamF2YS9sYW5nL1N0cmluZzspW0xqYXZhL2xhbmcvU3RyaW5nOwEAFmphdmEvc3FsL0RyaXZlck1hbmFnZXIBAA1nZXRDb25uZWN0aW9uAQBNKExqYXZhL2xhbmcvU3RyaW5nO0xqYXZhL2xhbmcvU3RyaW5nO0xqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9zcWwvQ29ubmVjdGlvbjsBAA9jcmVhdGVTdGF0ZW1lbnQBABYoKUxqYXZhL3NxbC9TdGF0ZW1lbnQ7AQAMZXhlY3V0ZVF1ZXJ5AQAoKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9zcWwvUmVzdWx0U2V0OwEAC2dldE1ldGFEYXRhAQAeKClMamF2YS9zcWwvUmVzdWx0U2V0TWV0YURhdGE7AQAOZ2V0Q29sdW1uQ291bnQBAA1nZXRDb2x1bW5OYW1lAQAEbmV4dAEAAygpWgEACWdldFN0cmluZwAhAHsADQAAAAcAAQB8AH0AAAABAH4AfwAAAAEAgACBAAAAAQCCAIEAAAABAIMAgQAAAAEAhACBAAAAAQCFAIEAAAAJAAEAhgCHAAEAiAAAAEMAAgABAAAAGyq3AAEqAbUAAioBtQADKhIEtQAFKhIGtQAHsQAAAAEAiQAAABYABQAAAAwABAANAAkADgAOABIAFAATAAEAigCLAAEAiAAAAwAABgANAAABtRIIuAAJTSosEgoDvQALtgAMKwO9AA22AA7AAA+1AAIqLBIQA70AC7YADCsDvQAN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',
      [arg1]: '#{newbase64::encode}',
      [arg2]: '#{newbase64::conn}',
      [arg3]: '#{newbase64::db}',
      [arg4]: '#{newbase64::table}'
    },
    query: {
      _: 'yv66vgAAADIBiwoADQCuCQCAAK8JAIAAsAgAsQkAgACyCACzCQCAALQIALUKAAsAtggAtwcAuAoACwC5BwC6CgC7ALwHAL0IAL4HAL8HAMAKAA0AwQgAgQoACwDCCgDDAMQKAMMAxQgAgwgAxgkAgADHCADICQCAAMkIAMoJAIAAywcAzAgAzQoAHwDOCADPCADQCADRCADSCADTCADUCwARANULAA8A1gsAEQDWCwAPANcKAIAA2AoAgADZCgAfANoHANsKAC8ArggA3AoALwDdCgASAN4KAC8A3gsAEQDfCgAfAN4KAIAA4AoA4QDiCgBDAOMKAEMA5AoAgADlCADmCgCAAOcIAOgIAOkKAAsA6ggA6wcA7AcA7QgA7goACwDvCACKCADwCgBDAPEIAPIHAPMKAEoA9AcA9QgA9goATAD3CAD4CgBDAM4KAPkA+goA+QD7CAD8CgBDAP0KAPkA/ggA/woAQwD3CgEAAQEKAEMBAggBAwoAQwEEBwEFCgBDAQYKAFwBBwoAQwEICgBDAQkKAC8BCggBCwoAXAEMCgBcAQ0IAQ4IAQ8HARAIAREIAJ8IARIKARMBFAgBFQoAQwEWCgALARcKARgBGQgBGgoAQwEbCgBDARwIAR0KAEMBHgoBHwEgCwEhASILASMBJAsBJQEmCwEnASgLAScBKQsBJQEqCwElASsKAIABLAgBLQoAgAEuBwEvAQAHcmVxdWVzdAEAJ0xqYXZheC9zZXJ2bGV0L2h0dHAvSHR0cFNlcnZsZXRSZXF1ZXN0OwEACHJlc3BvbnNlAQAoTGphdmF4L3NlcnZsZXQvaHR0cC9IdHRwU2VydmxldFJlc3BvbnNlOwEAB2VuY29kZXIBABJMamF2YS9sYW5nL1N0cmluZzsBAAJjcwEADHJhbmRvbVByZWZpeAEAA2tleQEABmVuY29kZQEABjxpbml0PgEAAygpVgEABENvZGUBAA9MaW5lTnVtYmVyVGFibGUBAAZlcXVhbHMBABUoTGphdmEvbGFuZy9PYmplY3Q7KVoBAA1TdGFja01hcFRhYmxlBwDABwEvBwC6BwDABwDMBwDtAQA4KExqYXZhL2xhbmcvU3RyaW5nO0xqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZzsBAApFeGNlcHRpb25zAQAMYmFzZTY0RW5jb2RlAQAWKFtCKUxqYXZhL2xhbmcvU3RyaW5nOwEACkFlc0VuY3J5cHQBAAJFQwEAJihMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9TdHJpbmc7AQAGZGVjb2RlBwEFBwEQAQAMQmFzZTY0RW5jb2RlAQAKZXhlY3V0ZVNRTAEAbyhMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztaKUxqYXZhL2xhbmcvU3RyaW5nOwcBMAcBMQcBMgcBMwcBNAEABXF1ZXJ5AQBKKExqYXZhL2xhbmcvU3RyaW5nO0xqYXZhL2xhbmcvU3RyaW5nO0xqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZzsBAApTb3VyY2VGaWxlAQAKUXVlcnkuamF2YQwAiwCMDACBAIIMAIMAhAEADmFudHN3b3JkQUVTS2V5DACJAIYBAA9hbnRzd29yZERlZmF1bHQMAIoAhgEAHWphdmF4LnNlcnZsZXQuanNwLlBhZ2VDb250ZXh0DAE1ATYBAApnZXRSZXF1ZXN0AQAPamF2YS9sYW5nL0NsYXNzDAE3ATgBABBqYXZhL2xhbmcvT2JqZWN0BwE5DAE6ATsBACVqYXZheC9zZXJ2bGV0L2h0dHAvSHR0cFNlcnZsZXRSZXF1ZXN0AQALZ2V0UmVzcG9uc2UBACZqYXZheC9zZXJ2bGV0L2h0dHAvSHR0cFNlcnZsZXRSZXNwb25zZQEAE2phdmEvbGFuZy9FeGNlcHRpb24MATwBPQwBPgE/BwFADAFBAUIMAUMBRAEAFGFudHN3b3JkcmFuZG9tUHJlZml4DACIAIYBAAZiYXNlNjQMAIUAhgEAD2FudHN3b3JkQ2hhcnNldAwAhwCGAQAWamF2YS9sYW5nL1N0cmluZ0J1ZmZlcgEAAAwAiwFFAQADLT58AQADfDwtAQARYW50c3dvcmRhcmdlbmNvZGUBAA9hbnRzd29yZGFyZ2Nvbm4BAA5hbnRzd29yZGFyZ3NxbAEACXRleHQvaHRtbAwBRgFFDAFHAUUMAUgAngwAnwCeDACqAKsMAUkBSgEAF2phdmEvbGFuZy9TdHJpbmdCdWlsZGVyAQAJRVJST1I6Ly8gDAFJAUsMAUwBTQwBTgFPDACFAJgHAVAMAVEBRQwAjwCQDAFSAVMMAJoAmwEAA2FlcwwAnACYAQAQamF2YS51dGlsLkJhc2U2NAEACmdldEVuY29kZXIMAVQBOAEADmVuY29kZVRvU3RyaW5nAQACW0IBABBqYXZhL2xhbmcvU3RyaW5nAQAWc3VuLm1pc2MuQkFTRTY0RW5jb2RlcgwBVQFWAQABCgwBVwFYAQABDQEAIWphdmF4L2NyeXB0by9zcGVjL0l2UGFyYW1ldGVyU3BlYwwAiwFZAQAfamF2YXgvY3J5cHRvL3NwZWMvU2VjcmV0S2V5U3BlYwEAA0FFUwwAiwFaAQARQUVTL0NGQi9Ob1BhZGRpbmcHAVsMAVwBXQwBXgFfAQAFVVRGLTgMAVIBYAwBYQFiAQADaGV4BwFjDAFkAWUMAWYBZwEAEDAxMjM0NTY3ODlBQkNERUYMAWgBTQEAHWphdmEvaW8vQnl0ZUFycmF5T3V0cHV0U3RyZWFtDAFpAWoMAIsBawwBbAFtDAFuAW8MAUkBcAEAASwMAXEBawwBTACeAQAWc3VuLm1pc2MuQkFTRTY0RGVjb2RlcgEADGRlY29kZUJ1ZmZlcgEAIGphdmEvbGFuZy9DbGFzc05vdEZvdW5kRXhjZXB0aW9uAQAKZ2V0RGVjb2RlcgEADGphdmEudmVyc2lvbgcBcgwBcwCeAQADMS45DAF0AWUMAXUBdgcBdwwBVQF4AQADDXwKDAF5AJgMAXoBTQEAAg0KDAF7AXwHAX0MAX4BfwcBMQwBgAGBBwEyDAGCAYMHATMMAYQBhQcBNAwBhgFqDAGHAWcMAYgBiQwBigFnDACiAJ4BAAMJfAkMAKMApAEAFWRhdGFiYXNlL29yYWNsZS9RdWVyeQEAE1tMamF2YS9sYW5nL1N0cmluZzsBABNqYXZhL3NxbC9Db25uZWN0aW9uAQASamF2YS9zcWwvU3RhdGVtZW50AQASamF2YS9zcWwvUmVzdWx0U2V0AQAaamF2YS9zcWwvUmVzdWx0U2V0TWV0YURhdGEBAAdmb3JOYW1lAQAlKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL0NsYXNzOwEAEWdldERlY2xhcmVkTWV0aG9kAQBAKExqYXZhL2xhbmcvU3RyaW5nO1tMamF2YS9sYW5nL0NsYXNzOylMamF2YS9sYW5nL3JlZmxlY3QvTWV0aG9kOwEAGGphdmEvbGFuZy9yZWZsZWN0L01ldGhvZAEABmludm9rZQEAOShMamF2YS9sYW5nL09iamVjdDtbTGphdmEvbGFuZy9PYmplY3Q7KUxqYXZhL2xhbmcvT2JqZWN0OwEACGdldENsYXNzAQATKClMamF2YS9sYW5nL0NsYXNzOwEAEGdldERlY2xhcmVkRmllbGQBAC0oTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvcmVmbGVjdC9GaWVsZDsBABdqYXZhL2xhbmcvcmVmbGVjdC9GaWVsZAEADXNldEFjY2Vzc2libGUBAAQoWilWAQADZ2V0AQAmKExqYXZhL2xhbmcvT2JqZWN0OylMamF2YS9sYW5nL09iamVjdDsBABUoTGphdmEvbGFuZy9TdHJpbmc7KVYBAA5zZXRDb250ZW50VHlwZQEAFHNldENoYXJhY3RlckVuY29kaW5nAQAMZ2V0UGFyYW1ldGVyAQAGYXBwZW5kAQAsKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZ0J1ZmZlcjsBAC0oTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvU3RyaW5nQnVpbGRlcjsBAAh0b1N0cmluZwEAFCgpTGphdmEvbGFuZy9TdHJpbmc7AQAJZ2V0V3JpdGVyAQAXKClMamF2YS9pby9QcmludFdyaXRlcjsBABNqYXZhL2lvL1ByaW50V3JpdGVyAQAFcHJpbnQBAAhnZXRCeXRlcwEABCgpW0IBAAlnZXRNZXRob2QBAAtuZXdJbnN0YW5jZQEAFCgpTGphdmEvbGFuZy9PYmplY3Q7AQAHcmVwbGFjZQEARChMamF2YS9sYW5nL0NoYXJTZXF1ZW5jZTtMamF2YS9sYW5nL0NoYXJTZXF1ZW5jZTspTGphdmEvbGFuZy9TdHJpbmc7AQAFKFtCKVYBABcoW0JMamF2YS9sYW5nL1N0cmluZzspVgEAE2phdmF4L2NyeXB0by9DaXBoZXIBAAtnZXRJbnN0YW5jZQEAKShMamF2YS9sYW5nL1N0cmluZzspTGphdmF4L2NyeXB0by9DaXBoZXI7AQAEaW5pdAEAQihJTGphdmEvc2VjdXJpdHkvS2V5O0xqYXZhL3NlY3VyaXR5L3NwZWMvQWxnb3JpdGhtUGFyYW1ldGVyU3BlYzspVgEAFihMamF2YS9sYW5nL1N0cmluZzspW0IBAAdkb0ZpbmFsAQAGKFtCKVtCAQARamF2YS9sYW5nL0ludGVnZXIBAAhwYXJzZUludAEAFShMamF2YS9sYW5nL1N0cmluZzspSQEACXN1YnN0cmluZwEAFShJKUxqYXZhL2xhbmcvU3RyaW5nOwEAC3RvVXBwZXJDYXNlAQAGbGVuZ3RoAQADKClJAQAEKEkpVgEABmNoYXJBdAEABChJKUMBAAdpbmRleE9mAQAEKEkpSQEAHChJKUxqYXZhL2xhbmcvU3RyaW5nQnVpbGRlcjsBAAV3cml0ZQEAEGphdmEvbGFuZy9TeXN0ZW0BAAtnZXRQcm9wZXJ0eQEACWNvbXBhcmVUbwEAFmdldERlY2xhcmVkQ29uc3RydWN0b3IBADMoW0xqYXZhL2xhbmcvQ2xhc3M7KUxqYXZhL2xhbmcvcmVmbGVjdC9Db25zdHJ1Y3RvcjsBAB1qYXZhL2xhbmcvcmVmbGVjdC9Db25zdHJ1Y3RvcgEAJyhbTGphdmEvbGFuZy9PYmplY3Q7KUxqYXZhL2xhbmcvT2JqZWN0OwEACnJlcGxhY2VBbGwBAAR0cmltAQAFc3BsaXQBACcoTGphdmEvbGFuZy9TdHJpbmc7KVtMamF2YS9sYW5nL1N0cmluZzsBABZqYXZhL3NxbC9Ecml2ZXJNYW5hZ2VyAQANZ2V0Q29ubmVjdGlvbgEATShMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZzspTGphdmEvc3FsL0Nvbm5lY3Rpb247AQAPY3JlYXRlU3RhdGVtZW50AQAWKClMamF2YS9zcWwvU3RhdGVtZW50OwEADGV4ZWN1dGVRdWVyeQEAKChMamF2YS9sYW5nL1N0cmluZzspTGphdmEvc3FsL1Jlc3VsdFNldDsBAAtnZXRNZXRhRGF0YQEAHigpTGphdmEvc3FsL1Jlc3VsdFNldE1ldGFEYXRhOwEADmdldENvbHVtbkNvdW50AQANZ2V0Q29sdW1uTmFtZQEABG5leHQBAAMoKVoBAAlnZXRT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',
      [arg1]: '#{newbase64::encode}',
      [arg2]: '#{newbase64::conn}',
      [arg3]: '#{newbase64::sql}'
    }
  })
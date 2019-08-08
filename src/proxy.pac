function FindProxyForURL(url,host)
{
	if(shExpMatch(host, "*.isiknowledge.com")
	|| shExpMatch(host, "192.168.0.225")
	|| shExpMatch(host, "*.webofknowledge.com")
	|| shExpMatch(host, "jcp.aip.org")
	|| shExpMatch(host, "pubs.acs.org")
	|| shExpMatch(host, "www.jbc.org")
	|| shExpMatch(host, "*.cas.org")
	|| shExpMatch(host, "onlinelibrary.wiley.com")
	|| shExpMatch(host, "*.springerlink.com")
	|| shExpMatch(host, "informahealthcare.com")
	|| shExpMatch(host, "*.u-tokyo.ac.jp")
	|| shExpMatch(host, "www.todaibio.info")
	|| shExpMatch(host, "*.sciencedirect.com")
	|| shExpMatch(host, "pubs.rsc.org")
	|| shExpMatch(host, "*.biochemj.org")
	|| shExpMatch(host, "*.nature.com")
	|| shExpMatch(host, "*.annualreviews.org")
	|| shExpMatch(host, "*.aip.org")
	|| shExpMatch(host, "*.asm.org")
	|| shExpMatch(host, "mic.sgmjournals.org")
	|| shExpMatch(host, "*.springer.com")
	|| shExpMatch(host, "*.begellhouse.com")
	|| shExpMatch(host, "*.pnas.org")
	|| shExpMatch(host, "*.aps.org")
	|| shExpMatch(host, "*.sciencemag.org")
	|| shExpMatch(host, "*.oup.com")
	|| shExpMatch(host, "*.cell.com")
	|| shExpMatch(host, "emboj.embopress.org")
	|| shExpMatch(host, "*.jstage.jst.go.jp")
	|| shExpMatch(host, "scifinder.cas.org")
	|| shExpMatch(host, "www.ems-ph.org")
	|| shExpMatch(host, "192.168.0.201")
	|| shExpMatch(host, "aip.scitation.org")
	   )
	{
		return "SOCKS5 127.0.0.1:8192; DIRECT";
	}
	else{
		return "DIRECT";
	}
}


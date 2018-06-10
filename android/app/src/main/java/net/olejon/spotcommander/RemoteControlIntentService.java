package net.olejon.spotcommander;

/*

Copyright 2017 Ole Jon Bjørkum

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see http://www.gnu.org/licenses/.

*/

import android.app.IntentService;
import android.content.Intent;

public class RemoteControlIntentService extends IntentService
{
	public final static String REMOTE_CONTROL_INTENT_SERVICE_EXTRA = "net.olejon.spotcommander.REMOTE_CONTROL_INTENT_SERVICE_EXTRA";

	private final MyTools mTools = new MyTools(this);

	public RemoteControlIntentService()
	{
		super("RemoteControlIntentService");
	}

	@Override
	protected void onHandleIntent(Intent intent)
	{
		long computerId = intent.getLongExtra(REMOTE_CONTROL_INTENT_SERVICE_EXTRA, 0);

		String action = intent.getAction();
		String subAction = "";

		mTools.remoteControl(computerId, action, subAction);
	}
}